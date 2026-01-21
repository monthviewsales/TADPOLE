const { Connection, PublicKey } = require('@solana/web3.js');

const RPC_URL =
  'https://rpc-mainnet.solanatracker.io/?api_key=50985673-3bc4-4f8e-b5cd-aa9522cfcc4e';
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
