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

The `.env` file is ignored by git. The scripts read `RPC_URL`, `SOLANATRACKER_DATA_API_KEY`, `VAULT_ENCODING`, and `MIN_QUOTE_SOL` from the environment.

`VAULT_ENCODING` controls how vault balances are decoded:
- `raw` (default): subscribe with base64 and decode SPL token accounts locally
- `parsed`: subscribe with `jsonParsed` and extract the parsed token amount

`MIN_QUOTE_SOL` sets the minimum quote reserve (default 35) required for state labeling; smaller pools are marked THIN_OR_STALE.

We use `dotenvx` to load (and optionally encrypt) env vars. Run scripts via the npm commands (they wrap `dotenvx run --`) or call `dotenvx` directly.

To encrypt `.env`, use `dotenvx` and keep `.env.keys` private (it is gitignored).

## Scripts
- `npm run app -- <TOKEN_MINT>` (fetch pools via Data API, pick one, then choose snapshot or live pricing)
- `npm run inspect -- <ACCOUNT_PUBKEY>`
- `npm run decode:pool -- <POOL_STATE_PUBKEY> <MARKET> [idlPath]`
- `npm run price:pool -- <POOL_STATE_PUBKEY> <TOKEN_MINT> <MARKET> [quoteMint] [idlPath]`

## Live mode UI
Live mode prints a two-line display that refreshes in place:

1) **Price line** (unchanged from previous behavior): timestamped spot price per base token, with slot when available and a delta vs the previous tick.
2) **PoolTick summary line**: `STATE <name> <dir> | depth <quoteReserveUi> SOL | flow10 <net10> | flow60 <net60> | stale <seconds>s`

Field meanings:
- `STATE <name>`: state label from the pool state machine (THIN_OR_STALE, IDLE, IMPULSE, CONFIRMING, TRENDING, FAILED, or UNKNOWN).
- `dir`: arrow for direction (↑ for UP, ↓ for DOWN) or blank.
- `depth`: quote reserve in SOL (pool liquidity depth).
- `flow10`: net quote reserve change over the last 10s window.
- `flow60`: net quote reserve change over the last 60s window.
- `stale`: seconds since the last coherent snapshot for the pool.

## Snapshot mode output
Snapshot mode prints a single price line (no live refresh). It represents the latest on-chain snapshot for the selected pool and uses the same spot price format as live mode.

## Testing
- `npm test` runs Jest with coverage (60% global threshold over `lib/`, excluding `lib/logger.js`).

## Notes
- `idl/` contains the Anchor-compatible IDLs used for decoding.
- IDLs are expected to be named after the pool `market` (e.g., `idl/raydium-cpmm.json`).
- Decoding is driven by `idl/manifest.json`, which maps each `market` to:
  - the IDL file,
  - the primary account name,
  - and the vault/mint field names needed to derive price.
- Supported markets (current): `raydium-cpmm`, `meteora-dlmm`, `meteora-dyn-v2`, `meteora-curve`, `pump-amm`, `pumpfun-amm`, `pumpfun`, `raydium-launchlab`.
- RPC clients are built with `@solana/kit` (HTTP + WSS) and log to `logs/app.log`.
- `RPC_URL` is used for both HTTP and WebSocket connections (include the API key in the URL).
- Log level is controlled by `NODE_ENV` (e.g., `development` for verbose logs).
- Pool ticks: whenever a price line is printed (snapshot or live), the app also emits a normalized PoolTick JSON object to `logs/poolTicks.log` (one line per tick). This includes spot price, reserves, staleness, rolling metrics (quote flow + depth score), and a state label.

## PoolTick specification
PoolTick JSON lines written to `logs/poolTicks.log` follow this schema:

| Field | Type | Description |
| --- | --- | --- |
| tsMs | int | Unix timestamp in milliseconds. |
| slot | int&#124;null | Solana slot when the tick was captured (null when unavailable). |
| market | string | Market identifier (matches `idl/manifest.json`). |
| poolId | string | Pool account address. |
| baseMint | string | Base token mint. |
| quoteMint | string | Quote token mint. |
| priceQuotePerBase | number | Spot price in quote units per base. |
| baseReserveUi | number&#124;null | Base reserve in UI units. |
| quoteReserveUi | number&#124;null | Quote reserve in UI units. |
| reserveSource | string | Source of reserves (vault/bonding curve). |
| stalenessMs | int | Time since last coherent snapshot for the pool. |
| metrics | object | Rolling flow metrics and depth score. |
| metrics.netQuoteFlow_10s | number&#124;null | Net quote reserve change over 10s window. |
| metrics.netQuoteFlow_60s | number&#124;null | Net quote reserve change over 60s window. |
| metrics.netQuoteFlow_300s | number&#124;null | Net quote reserve change over 300s window. |
| metrics.flowVol_10s | number&#124;null | Total absolute flow over 10s window. |
| metrics.flowVol_60s | number&#124;null | Total absolute flow over 60s window. |
| metrics.depthScore | number&#124;null | Log-based depth score for quote reserve. |
| state | object | State label from the pool state machine. |
| state.name | string | One of: THIN_OR_STALE, IDLE, IMPULSE, CONFIRMING, TRENDING, FAILED. |
| state.dir | string&#124;null | Direction of the move: UP, DOWN, or null. |
| state.reasons | string[] | Short reasons explaining the state decision. |

## Adding a new market
1. Drop the IDL in `idl/<market>.json` (use the Data API `market` string).
2. Add an entry to `idl/manifest.json` with `accountName`, `vaultFields`, and `mintFields`.
3. If a market stores quote vault but not quote mint in pool state, set `"quoteMintFromPool": true` in the manifest entry.
4. Run `npm run app -- <TOKEN_MINT>` and select a pool for that market to validate.

## 📡 Connect with VAULT77

- **VAULT77 Community**: [Join on X](https://x.com/i/communities/1962257350309650488)  
- **Telegram (Community)**: [@BurnWalletBroadcast](https://t.me/BurnWalletBroadcast)  
> Join VAULT77 🔐77 and become part of the operator network.
