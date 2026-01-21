// inspectAccount.js
try {
  require('dotenv').config();
} catch (e) {
  // Optional dependency; use process.env if dotenv isn't installed.
}

const { Connection, PublicKey } = require('@solana/web3.js');

// Your SolanaTracker RPC
const RPC_URL = process.env.RPC_URL;
if (!RPC_URL) {
  console.error('Missing RPC_URL. Set it in .env or your shell environment.');
  process.exit(1);
}

const connection = new Connection(RPC_URL, {
  commitment: 'confirmed',
});

// usage: node inspectAccount.js <ACCOUNT_PUBKEY>
async function main() {
  const pubkeyStr = process.argv[2];
  if (!pubkeyStr) {
    console.error('Usage: node inspectAccount.js <ACCOUNT_PUBKEY>');
    process.exit(1);
  }

  const pubkey = new PublicKey(pubkeyStr);

  const info = await connection.getAccountInfo(pubkey, {
    commitment: 'confirmed',
  });

  if (!info) {
    console.log('Account not found');
    return;
  }

  console.log('--- Account Info ---');
  console.log('pubkey:', pubkey.toBase58());
  console.log('lamports:', info.lamports);
  console.log('owner:', info.owner.toBase58());
  console.log('executable:', info.executable);
  console.log('rentEpoch:', info.rentEpoch);
  console.log('data length:', info.data.length);

  // Raw data (base64 → hex preview)
  const hex = Buffer.from(info.data).toString('hex');
  console.log('data (hex preview):', hex.slice(0, 200) + '...');
}

main().catch(console.error);
