// inspectAccount.js
try {
  require('dotenv').config();
} catch (e) {
  // Optional dependency; use process.env if dotenv isn't installed.
}

const logger = require('./lib/logger');
const { createRpcClients } = require('./lib/solanaRpc');

// Your SolanaTracker RPC
// usage: node inspectAccount.js <ACCOUNT_PUBKEY>
async function main() {
  const pubkeyStr = process.argv[2];
  if (!pubkeyStr) {
    console.error('Usage: node inspectAccount.js <ACCOUNT_PUBKEY>');
    process.exit(1);
  }

  const clients = await createRpcClients();
  const rpc = clients.rpc;
  const addressFn = clients.address;

  const response = await rpc
    .getAccountInfo(addressFn(pubkeyStr), { commitment: 'confirmed', encoding: 'base64' })
    .send();
  const info = response.value;

  if (!info) {
    console.log('Account not found');
    return;
  }

  const rawData = Array.isArray(info.data) ? info.data[0] : info.data;
  const dataBuffer = Buffer.from(rawData, 'base64');

  console.log('--- Account Info ---');
  console.log('pubkey:', pubkeyStr);
  console.log('lamports:', String(info.lamports));
  console.log('owner:', String(info.owner));
  console.log('executable:', info.executable);
  console.log('rentEpoch:', String(info.rentEpoch));
  console.log('data length:', dataBuffer.length);

  // Raw data (base64 → hex preview)
  const hex = Buffer.from(dataBuffer).toString('hex');
  console.log('data (hex preview):', hex.slice(0, 200) + '...');
}

main().catch((err) => {
  logger.error({ error: err }, 'inspectAccount error');
  console.error(err);
  process.exit(1);
});
