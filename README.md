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
```

The `.env` file is ignored by git. The scripts read `RPC_URL` from the environment; if you want `.env` auto-loaded, install `dotenv`:

```bash
npm i dotenv
```

## Scripts
- `node inspectAccount.js <ACCOUNT_PUBKEY>`
- `node decodeCpmmPool.js <POOL_STATE_PUBKEY> [idlPath]`
- `node decodeMeteoraDlmmPool.js <POOL_STATE_PUBKEY> [idlPath]`
- `node getPriceFromRaydiumPool.js`

## Notes
- `idl/` contains the Anchor-compatible IDLs used for decoding.
- The current scripts use `@solana/web3.js`. We will migrate to `@solana/kit` as we expand.
