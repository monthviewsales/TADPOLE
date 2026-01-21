You are working in the existing Node 24 CommonJS repo `poolscanner-poc`. Do NOT migrate to ESM. Do NOT add @solana/web3.js. We use @solana/kit for RPC and websocket subscriptions.

Goal: eliminate architectural technical debt around `jsonParsed` by introducing a single abstraction boundary for vault balance streaming, so we can switch between raw/base64 decoding and jsonParsed without touching trading/signal logic.

High-level requirements

- Introduce a new module that is the ONLY place that knows about RPC encoding formats (`jsonParsed` vs `base64`).
- Everywhere else should consume a normalized update shape:
  VaultBalanceUpdate = { vault: string, amountRaw: bigint, decimals: number, ui: number, slot: bigint|null, encoding: 'raw'|'parsed' }
- Add an env var toggle: VAULT_ENCODING with allowed values:
  - "raw" (default): subscribe with base64 and decode locally
  - "parsed": subscribe with jsonParsed and extract values
- Keep all existing behavior the same (still streams live price, still slot-sync logic). Only change how vault balances are obtained/decoded.
- Preserve logging with Winston (existing logger), and maintain current error handling patterns.

Concrete tasks

1. Create `lib/vaultStreamAdapter.js` exporting:
   - `subscribeVaultBalances({ rpcSubscriptions, addressFn, vault, commitment, encodingMode, abortSignal })`
     - returns an async iterator of VaultBalanceUpdate for that vault
   - `fetchVaultBalanceSnapshot({ rpc, addressFn, vault, commitment, encodingMode })`
     - returns a single VaultBalanceUpdate snapshot for that vault (used to seed initial state)
       Notes:
   - In "parsed" mode: request `encoding: 'jsonParsed'` and extract amount/decimals/ui from parsed token account.
   - In "raw" mode: request `encoding: 'base64'` and decode SPL Token account bytes locally to get raw u64 amount, and decimals from a cached mint-decimals resolver (see #2).
   - Slot should be taken from the websocket notification context slot when available; otherwise null.

2. Implement a minimal mint-decimals resolver for "raw" mode:
   - Add `lib/mintCache.js` that can resolve decimals for a given mint:
     - First try: use the existing SolanaTracker token decimals already available in app flow (tokenDecimals passed into streamPoolPrice). Allow callers to pass a fallback decimals number.
     - If decimals are missing, fetch the mint account once via RPC and decode decimals from the SPL Mint layout.
   - Cache results in-memory (Map) keyed by mint string to avoid repeated RPC calls.

3. Implement local decoding in "raw" mode WITHOUT web3.js:
   - Decode SPL Token Account layout:
     - amount is a u64 at the correct offset in the token account data.
   - Decode SPL Mint layout to read decimals for mint accounts.
   - Use Buffer / DataView / BigInt reads; keep it simple and well-commented.
   - Add `lib/splLayouts.js` with pure functions:
     - `decodeTokenAccountAmount(buffer) -> bigint`
     - `decodeMintDecimals(buffer) -> number`
   - Validate buffer lengths and throw clear errors on invalid layouts.

4. Refactor app.js to use the adapter everywhere it currently uses jsonParsed for vaults:
   - Replace `fetchVaultBalances()` and `parseTokenAmount()` usage in the live AMM path with:
     - initial snapshots from `fetchVaultBalanceSnapshot()` for baseVault and quoteVault
     - live streams from `subscribeVaultBalances()` for baseVault and quoteVault
   - Keep the existing slot-sync rule: only print price when baseSlot === quoteSlot (or if slot is null, fall back to a small debounce like 50ms; implement the fallback only if needed and keep it minimal).
   - DO NOT change bonding curve streaming (Pump) in this prompt; only vault-based pools.

5. Add a small CLI/help message:
   - If VAULT_ENCODING is not set, log that we default to "raw".
   - If VAULT_ENCODING is an invalid value, exit with a clear message listing allowed values.

Non-goals (do not do these)

- Do not implement swapping or trading.
- Do not change the IDL decoding logic.
- Do not change pool selection UI.
- Do not add new deps unless absolutely necessary; prefer zero new deps.

Acceptance criteria

- Running the app with VAULT_ENCODING=parsed behaves exactly like before.
- Running with VAULT_ENCODING=raw streams the same live prices (within floating tolerance) and remains stable.
- The rest of the app never references `jsonParsed` or `base64` directly; only the adapter does.
- Code is CommonJS, passes lint (if present), and has clear comments for offsets/decoding.

When you finish, summarize:

- what files you added/changed
- how to run in both modes
- any assumptions about SPL token account offsets you used.
