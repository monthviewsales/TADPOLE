# Coding Agent Guide

## Repo context
- This is a lightweight Node.js POC for decoding Solana pool accounts and computing spot prices.
- Scripts live in the repo root; Anchor IDLs live in `idl/`.
- The RPC URL must come from `RPC_URL` in the environment (see `.env`).

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

## Quick commands
- `node inspectAccount.js <ACCOUNT_PUBKEY>`
- `node decodeCpmmPool.js <POOL_STATE_PUBKEY> [idlPath]`
- `node decodeMeteoraDlmmPool.js <POOL_STATE_PUBKEY> [idlPath]`
- `node getPriceFromRaydiumPool.js`
