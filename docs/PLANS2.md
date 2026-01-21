You are working in the existing Node 24 CommonJS repo `poolscanner-poc`. Do NOT migrate to ESM. Do NOT add @solana/web3.js. Continue using @solana/kit for RPC + websocket. Preserve existing Ink UI behavior (same screens/menus). No swapping/trading.

Goal (incremental): introduce a normalized internal event called PoolTick and a small rolling-window metrics layer so the bot can produce actionable telemetry (flow/depth/staleness) WITHOUT changing pool discovery, decoding, or streaming architecture.

What already exists (assume current state):

- We can stream AMM pools (Raydium/Meteora) by subscribing to 2 vault accounts and computing price from reserve ratio.
- We can stream Pump bonding curve by subscribing to a single bonding curve account and computing price from virtual reserves.
- Vault streaming supports VAULT_ENCODING=raw|parsed, with coherent snapshots already handled.

Tasks

1. Add a new module `lib/poolTick.js` that defines:

- `createPoolTickBase({ dex, poolId, baseMint, quoteMint })` -> returns identity fields and defaults.
- `makePoolTick({ identity, tsMs, slot, priceQuotePerBase, baseReserveUi, quoteReserveUi, reserveSource, stalenessMs, metrics })`
  Return a plain JS object with the exact shape below.

2. Define the normalized PoolTick shape (use these exact field names):
   PoolTick = {
   tsMs: number,
   slot: bigint | null,
   dex: 'pump' | 'raydium' | 'meteora',
   poolId: string,
   baseMint: string,
   quoteMint: string,

// Spot price: quote per 1 base token
priceQuotePerBase: number,

// Reserves in UI units (quote/base). For pump these are proxies; see reserveSource.
baseReserveUi: number | null,
quoteReserveUi: number | null,

// Explains what reserve numbers represent
// 'vault' = AMM SPL token vault balances
// 'pump-real' = pump "real\_\*\_reserves" proxies
reserveSource: 'vault' | 'pump-real',

// How long since last coherent snapshot for this pool
stalenessMs: number,

// Rolling-window metrics (computed downstream)
metrics: {
netQuoteFlow_10s: number | null,
netQuoteFlow_60s: number | null,
netQuoteFlow_300s: number | null,
flowVol_10s: number | null,
flowVol_60s: number | null,
depthScore: number | null
}
}

3. Add `lib/rollingMetrics.js` to compute the metrics above from reserve snapshots.
   Requirements:

- Maintain per-pool rolling window state in-memory keyed by poolId.
- Inputs per update: { poolId, tsMs, quoteReserveUi, baseReserveUi } (base may be null).
- Compute:
  - netQuoteFlow_X = quoteReserveUi(now) - quoteReserveUi(at window start)
  - flowVol_X = sum over updates in window of abs(deltaQuote) + abs(deltaBase) (if base is null, use abs(deltaQuote) only)
  - depthScore = a simple monotonic function of quoteReserveUi (e.g., sqrt(quoteReserveUi) or log1p(quoteReserveUi)); keep it deterministic and documented.
- Windows: 10s, 60s, 300s. Use tsMs to evict old samples.
- If insufficient history, metrics should be null (do not fake numbers).

4. Wire PoolTick into existing streaming paths WITHOUT changing UI:

- Wherever the app currently prints a “price line”, also construct a PoolTick object and pass it through a single function `handlePoolTick(tick)`.
- Implement `handlePoolTick(tick)` in app.js (or a small module) to:
  - call rollingMetrics.update(...) to attach metrics
  - log the final tick as ONE JSON line using Winston at info level (to a dedicated log file, e.g., logs/poolTicks.log)
  - do not spam console with JSON; console stays human readable.

5. Pump mapping rules:

- priceQuotePerBase: compute from VIRTUAL reserves (as you already do)
- quoteReserveUi: proxy from real_sol_reserves (convert lamports->SOL UI)
- baseReserveUi: proxy from real_token_reserves (convert by token decimals UI if you have it; if not available, set null for now)
- reserveSource: 'pump-real'

6. AMM mapping rules (Raydium/Meteora):

- baseReserveUi / quoteReserveUi: from vault balances (already computed)
- reserveSource: 'vault'

7. Staleness:

- stalenessMs = tsMs - lastCoherentSnapshotTsMs for that poolId
- Update lastCoherentSnapshotTsMs whenever you emit a PoolTick (i.e., whenever you consider the snapshot coherent enough to print)

Non-goals

- No multi-pool concurrency changes
- No new selection UX
- No changes to decoding/IDL registry
- No trading code
- Do not modify existing output format except optionally adding ONE extra human-readable line showing netQuoteFlow_60s and depthScore (optional; only if simple and non-disruptive)

Acceptance criteria

- App runs exactly as before for snapshot/live modes.
- When live mode runs, a logs/poolTicks.log file is created/appended with one JSON object per emitted tick.
- For AMM pools, quoteReserveUi/baseReserveUi are populated and metrics eventually become non-null after enough time.
- For Pump, price is correct; quoteReserveUi populated; metrics on quote flow work (at least netQuoteFlow and depthScore).
- No @solana/web3.js added; CommonJS only.

When finished:

- Summarize what files changed/added.
- Show a sample JSON log line (redact nothing, but keep it short).
- Explain how to tail the tick log.
