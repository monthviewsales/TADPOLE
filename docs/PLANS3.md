You are working in the existing Node 24 CommonJS repo `poolscanner-poc`. Do NOT migrate to ESM. Do NOT add @solana/web3.js. No trading/swaps. Keep the existing Ink UI behavior the same (no new menus/screens). This change is incremental: add state labels to PoolTick.

Goal:
Implement a simple per-pool state labeler (finite state machine) that consumes PoolTick + rolling metrics and annotates each PoolTick with:

- state name
- direction (UP/DOWN/null)
- reasons (array of short strings)

Also add MIN_QUOTE_SOL env var (default 35) as a hard liquidity gate.

Scope:

- Single-pool operation as it exists today. No multi-pool.
- State labels must be deterministic and fully explainable via `reasons`.

1. Add configuration

- ENV var: MIN_QUOTE_SOL
- Default: 35
- Parsing:
  - if unset or empty => 35
  - parseFloat
  - if NaN or <= 0 => exit fatally with clear message
- Log once at startup (app init): "State machine MIN_QUOTE_SOL=<value>"

2. Create a new module: `lib/poolStateMachine.js`
   Export:

- `createPoolStateMachine(config)` -> returns { evaluateTick }
- `evaluateTick(tick)` -> returns { state, dir, reasons }

Internal behavior:

- Maintain minimal per-pool memory keyed by tick.poolId:
  - lastState
  - lastDir
  - lastImpulseTsMs (optional)
  - cooldownUntilTsMs (optional)
  - confirmCount (for consecutive confirmations)
    This should be in-memory only (Map).

3. States and output shape
   States (strings):

- "THIN_OR_STALE"
- "IDLE"
- "IMPULSE"
- "CONFIRMING"
- "TRENDING"
- "FAILED"

Direction:

- "UP" | "DOWN" | null

Return object:
{ state: string, dir: "UP"|"DOWN"|null, reasons: string[] }

4. Inputs / fields used (only what already exists on PoolTick)
   Use these tick fields:

- quoteReserveUi
- stalenessMs
- metrics.netQuoteFlow_10s
- metrics.netQuoteFlow_60s
- metrics.netQuoteFlow_300s (optional; only if non-null)
- market/poolId/baseMint/quoteMint may be included in reasons if helpful, but do not change tick identity fields.

5. Threshold tuning (for 0.1–0.5 SOL entries)
   Implement these rules:

Safety gates:

- If quoteReserveUi is present and quoteReserveUi < MIN_QUOTE_SOL:
  -> state="THIN_OR_STALE", dir=null
  -> reasons include `quoteReserveUi=<x> < minQuote=<MIN_QUOTE_SOL>`
  -> Return immediately (no other logic).
- If stalenessMs > 12000:
  -> state="THIN_OR_STALE", dir=null
  -> reason `stalenessMs=<x> > 12000`
  -> Return immediately.
- If required metrics are missing (e.g., netQuoteFlow_10s is null):
  -> state="IDLE", dir=null
  -> reason `warmup:netQuoteFlow_10s=null`
  -> (Do not mark thin/stale just for missing quoteReserveUi; if quoteReserveUi is null/undefined, skip the min-quote gate and proceed to warmup/IDLE logic.)

Impulse thresholds (depth-scaled):

- impulse10 = max(0.25, 0.003 \* quoteReserveUi) // 0.3% of quote reserve, floor 0.25 SOL
- trend60 = max(0.5, 0.005 \* quoteReserveUi) // 0.5% of quote reserve, floor 0.5 SOL
  Use quoteReserveUi for scaling; if quoteReserveUi missing, fall back to impulse10=0.25 and trend60=0.5.

State logic:

- Default: state="IDLE", dir=null
- IMPULSE:
  - if abs(netQuoteFlow_10s) >= impulse10:
    state="IMPULSE"
    dir = (netQuoteFlow_10s > 0 ? "UP" : "DOWN")
    reasons include the computed impulse10 and netQuoteFlow_10s
- CONFIRMING:
  - if state would be IMPULSE and last tick for this pool was also IMPULSE with same dir (confirmCount>=2), AND:
    - For UP: netQuoteFlow_60s > -(trend60/2)
    - For DOWN: netQuoteFlow_60s < +(trend60/2)
      -> state="CONFIRMING" (same dir)
- TRENDING:
  - if CONFIRMING and:
    - For UP: netQuoteFlow_60s >= trend60
    - For DOWN: netQuoteFlow_60s <= -trend60
      -> state="TRENDING"
  - Optionally: if netQuoteFlow_300s is non-null, require it to match direction as an additional confirmation; if null, ignore it.
- FAILED + cooldown:
  - if lastState was IMPULSE or CONFIRMING and dir was UP, and current netQuoteFlow_10s < 0 and netQuoteFlow_60s <= 0:
    state="FAILED", dir=null, set cooldownUntilTsMs = tsMs + 45000
  - similarly for DOWN: if flips positive and 60s >= 0 -> FAILED
  - If cooldownUntilTsMs is in the future, clamp state to "FAILED" with reason `cooldown` (do not emit IMPULSE/CONFIRMING/TRENDING during cooldown)

Reasons:

- Always include 2–5 short reasons indicating which rule fired and key numbers, e.g.:
  - `impulse10=0.60 net10s=+5.12`
  - `trend60=1.00 net60s=-0.04`
  - `confirmCount=2`
  - `cooldownUntil=<ts>`
    Keep reasons concise.

6. Wire it into tick handling

- In the existing code where PoolTick is finalized (right before logging to poolTicks.log), call the state machine evaluator and attach:
  tick.state = { name: state, dir, reasons }
- Do not change existing PoolTick fields; just add `state` object.
- Do not change console output format, except you MAY optionally add a brief suffix like:
  "state=IMPULSE dir=UP"
  only if it’s trivial and doesn’t alter the UI flow.

7. Minimal tests (only if tests already exist)

- If the repo already has a test setup for these libs, add tests for:
  - min quote gate triggers THIN_OR_STALE
  - impulse -> confirming after two consecutive impulses
  - cooldown behavior
- If no tests exist, do not introduce a new framework in this change.

Acceptance criteria

- PoolTick JSON lines now include `state` object with name/dir/reasons.
- MIN_QUOTE_SOL defaults to 35 and can be overridden; invalid value exits at startup.
- Thin pools (< MIN_QUOTE_SOL) always label THIN_OR_STALE when quoteReserveUi is present.
- Warmup ticks have state IDLE with warmup reason.
- No trading code added; no web3.js; CommonJS only.

When finished:

- Summarize files added/changed.
- Show 2 sample PoolTick log lines (one THIN_OR_STALE, one IMPULSE/CONFIRMING).
- Show how to run with MIN_QUOTE_SOL override.
