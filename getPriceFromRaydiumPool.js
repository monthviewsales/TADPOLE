try {
  require('dotenv').config();
} catch (e) {
  // Optional dependency; use process.env if dotenv isn't installed.
}

const { Connection, PublicKey } = require('@solana/web3.js');

const RPC_URL = process.env.RPC_URL;
if (!RPC_URL) {
  console.error('Missing RPC_URL. Set it in .env or your shell environment.');
  process.exit(1);
}
const connection = new Connection(RPC_URL, 'confirmed');

async function getVaultReserves() {
  const wsolVault = new PublicKey('CCJ7NxWKAgZg62iwVpgrbFwbezpn8K1JPygkdDekNkg8');
  const tokenVault = new PublicKey('8xXbvqGJjwNnmJL6vzQqzpPPvVSsjyJRVjvJuBQFySCV');

  const infos = await connection.getMultipleParsedAccounts(
    [wsolVault, tokenVault],
    'confirmed'
  );

  const [wsolInfo, tokenInfo] = infos.value;

  const wsol = wsolInfo.data.parsed.info.tokenAmount;   // decimals=9
  const tok = tokenInfo.data.parsed.info.tokenAmount;   // decimals=6 (for this mint)

  const wsolUi = Number(wsol.uiAmountString);
  const tokUi = Number(tok.uiAmountString);

  const priceSol = wsolUi / tokUi;

  console.log('WSOL reserve:', wsol.uiAmountString);
  console.log('Token reserve:', tok.uiAmountString);
  console.log('Spot price (SOL):', priceSol);
}

getVaultReserves().catch(console.error);
