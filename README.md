# TADPOLE from VAULT77 a 🔐77 relic
## 📡 Connect with VAULT77

- **VAULT77 Community**: [Join on X](https://x.com/i/communities/1962257350309650488)  
- **Telegram (Community)**: [@BurnWalletBroadcast](https://t.me/BurnWalletBroadcast)  
> Join VAULT77 🔐77 and become part of the operator network.

## Project Goals
TADPOLE is part of the VAULT77 🔐77 toolchain — a research and trading side project designed to explore the use of OpenAI’s APIs and SolanaTracker data to improve memecoin trading strategies. The main goals are:
Small Node.js proof-of-concept for decoding Solana pool state accounts and deriving spot prices for memecoin liquidity pools. The repo is intentionally lightweight and script-first while we iterate on a more structured app.

## Goals
- Decode pool state accounts using Anchor-compatible IDLs in `idl/`.
- Calculate spot prices from vault balances or bonding curve state (e.g., pumpfun).
- Move toward a small app that uses:
  - `@solana/kit` for RPC clients and Solana interactions
  - `winston` for structured logging
  - `@solana-tracker/data-api` for SolanaTracker data access

## Requirements
- A [SolanaTracker.io](https://www.solanatracker.io/?ref=0NGJ5PPN) account (used for data API lookups).
- A RPC to connect to the Solana blockchain.  [SolanaTracker.io](https://www.solanatracker.io/?ref=0NGJ5PPN) is the best one.
- Node.js 24 LTS and npm.

## Setup
- Install dependencies:

```bash
npm install
```
- Copy `.env.sample` to `.env` and fill in the variables:

```bash
cp .env.sample .env
```

The `.env` file is ignored by git. The scripts read `RPC_URL` and `SOLANATRACKER_DATA_API_KEY` from the environment.

We use `dotenvx` to load (and optionally encrypt) env vars. Run scripts via the npm commands (they wrap `dotenvx run --`) or call `dotenvx` directly.

To encrypt `.env`, use `dotenvx` and keep `.env.keys` private (it is gitignored).

## Scripts
- `npm run app -- <TOKEN_MINT>` (fetch pools via Data API, pick one, then choose snapshot or live pricing)
- `npm run inspect -- <ACCOUNT_PUBKEY>`
- `npm run decode:pool -- <POOL_STATE_PUBKEY> <MARKET> [idlPath]`
- `npm run price:pool -- <POOL_STATE_PUBKEY> <TOKEN_MINT> <MARKET> [quoteMint] [idlPath]`

## Testing
- `npm test` runs Jest with coverage (60% global threshold over `lib/`, excluding `lib/logger.js`).

## Notes
- `idl/` contains the Anchor-compatible IDLs used for decoding.
- IDLs are expected to be named after the pool `market` (e.g., `idl/raydium-cpmm.json`).
- Decoding is driven by `idl/manifest.json`, which maps each `market` to:
  - the IDL file,
  - the primary account name,
  - and the vault/mint field names needed to derive price.
- Supported markets (current): `raydium-cpmm`, `meteora-dlmm`, `meteora-dyn-v2`, `pump-amm`, `pumpfun-amm`, `pumpfun`, `raydium-launchlab`.
- RPC clients are built with `@solana/kit` (HTTP + WSS) and log to `logs/app.log`.
- `RPC_URL` is used for both HTTP and WebSocket connections (include the API key in the URL).
- Log level is controlled by `NODE_ENV` (e.g., `development` for verbose logs).

## Adding a new market
1. Drop the IDL in `idl/<market>.json` (use the Data API `market` string).
2. Add an entry to `idl/manifest.json` with `accountName`, `vaultFields`, and `mintFields`.
3. Run `npm run app -- <TOKEN_MINT>` and select a pool for that market to validate.

## 📡 Connect with VAULT77

- **VAULT77 Community**: [Join on X](https://x.com/i/communities/1962257350309650488)  
- **Telegram (Community)**: [@BurnWalletBroadcast](https://t.me/BurnWalletBroadcast)  
> Join VAULT77 🔐77 and become part of the operator network.
