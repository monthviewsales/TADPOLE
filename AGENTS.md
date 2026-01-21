# Coding Agent Guide

## Repo context
- This is a lightweight Node.js POC for decoding Solana pool accounts and computing spot prices.
- Scripts live in the repo root; Anchor IDLs live in `idl/`.
- The RPC URL must come from `RPC_URL` in the environment (see `.env`).
- SolanaTracker docs live under `docs/solanatracker/`.

## Primary goals (short-term)
- Keep scripts runnable directly with `node`.
- Avoid hardcoded secrets or RPC URLs in code.
- Expand support for pool decoding and price calculation (Raydium CPMM, Meteora DLMM first).

## Planned stack (as we expand)
- `@solana/kit` for RPC client creation and Solana interactions.
- `winston` for structured logging.
- `@solana-tracker/data-api` for SolanaTracker data access.

## Conventions
- Prefer small modules and clear CLI usage strings.
- When adding dependencies, update `README.md` and add a `package.json` if needed.
- Keep output and logs concise and structured.
- Use ASCII-only edits unless the file already contains Unicode.
- Check `docs/solanatracker/` before doing web searches; prefer local docs as the first source.
- Data API usage is REST-only (no WebSocket/Datastream).
- RPC work may use both HTTP and WebSocket connections; both share the same base URL and API key.
- IDL files should be named after the Data API `market` value (e.g., `idl/raydium-cpmm.json`).
- Decoding is driven by `idl/manifest.json`; add new markets there instead of adding new scripts.
- Generic tooling scripts live in `tools/` (avoid market-specific scripts).
- Logging uses `lib/logger.js` (Winston). `NODE_ENV` controls log verbosity; logs go to `logs/app.log`.
- RPC clients are created via `lib/solanaRpc.js` using `@solana/kit` (HTTP + WSS).

## Adding a new market (agent checklist)
1. Add `idl/<market>.json` using the Data API `market` string.
2. Update `idl/manifest.json` with `accountName`, `vaultFields`, and `mintFields`.
3. Use `node app.js <TOKEN_MINT>` to validate decoding and price output.

## Documentation dirs
- `docs/solanatracker/dataapi/`: fundamentals and examples for the SolanaTracker Data API SDK.
- `docs/solanatracker/rpc/`: RPC documentation and local notes (added by the team).

## Quick commands
- `node inspectAccount.js <ACCOUNT_PUBKEY>`
- `node decodeCpmmPool.js <POOL_STATE_PUBKEY> [idlPath]`
- `node decodeMeteoraDlmmPool.js <POOL_STATE_PUBKEY> [idlPath]`
- `node getPriceFromRaydiumPool.js`
