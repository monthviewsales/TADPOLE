# poolscanner-poc

Small Node.js proof-of-concept for decoding Solana pool state accounts and deriving spot prices for memecoin liquidity pools. The repo is intentionally lightweight and script-first while we iterate on a more structured app.

## Goals
- Decode pool state accounts using Anchor-compatible IDLs in `idl/`.
- Calculate spot prices from vault balances (starting with Raydium CPMM and Meteora DLMM).
- Move toward a small app that uses:
  - `@solana/kit` for RPC clients and Solana interactions
  - `winston` for structured logging
  - `@solana-tracker/data-api` for SolanaTracker data access

## Setup
- Node.js 18+ recommended.
- Create a `.env` file with your RPC URL:

```bash
RPC_URL=https://rpc-mainnet.solanatracker.io/?api_key=YOUR_KEY
SOLANATRACKER_DATA_API_KEY=YOUR_DATA_API_KEY
NODE_ENV=development
```

The `.env` file is ignored by git. The scripts read `RPC_URL` from the environment; if you want `.env` auto-loaded, install `dotenv`:

```bash
npm i dotenv
```

## Scripts
- `node app.js <TOKEN_MINT>` (fetch pools via Data API, pick one, decode, show price)
- `node inspectAccount.js <ACCOUNT_PUBKEY>`
- `node tools/decodePool.js <POOL_STATE_PUBKEY> <MARKET> [idlPath]`
- `node tools/priceFromPool.js <POOL_STATE_PUBKEY> <TOKEN_MINT> <MARKET> [quoteMint] [idlPath]`

## Notes
- `idl/` contains the Anchor-compatible IDLs used for decoding.
- IDLs are expected to be named after the pool `market` (e.g., `idl/raydium-cpmm.json`).
- Decoding is driven by `idl/manifest.json`, which maps each `market` to:
  - the IDL file,
  - the primary account name,
  - and the vault/mint field names needed to derive price.
- Supported markets (current): `raydium-cpmm`, `meteora-dlmm`, `pump-amm`, `raydium-launchlab`.
- RPC clients are built with `@solana/kit` (HTTP + WSS) and log to `logs/app.log`.
- Log level is controlled by `NODE_ENV` (e.g., `development` for verbose logs).

## Adding a new market
1. Drop the IDL in `idl/<market>.json` (use the Data API `market` string).
2. Add an entry to `idl/manifest.json` with `accountName`, `vaultFields`, and `mintFields`.
3. Run `node app.js <TOKEN_MINT>` and select a pool for that market to validate.
- The current scripts use `@solana/web3.js`. We will migrate to `@solana/kit` as we expand.
