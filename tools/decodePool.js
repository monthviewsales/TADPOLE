#!/usr/bin/env node
/* Generic pool decoder using idl/manifest.json */
try {
  require('@dotenvx/dotenvx').config();
} catch (e) {
  // Optional dependency; use process.env if dotenvx isn't installed.
}

const fs = require('fs');
const path = require('path');
const anchor = require('@coral-xyz/anchor');
const logger = require('../lib/logger');
const { createRpcClients } = require('../lib/solanaRpc');

const MANIFEST_PATH = path.join(__dirname, '..', 'idl', 'manifest.json');

function loadManifest() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    throw new Error('Missing idl/manifest.json.');
  }
  return JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
}

function getEntry(market) {
  const manifest = loadManifest();
  return manifest[String(market || '').toLowerCase()] || null;
}

function resolveIdlPath(entry, override) {
  if (override) return path.resolve(override);
  if (!entry || !entry.idl) return null;
  return path.isAbsolute(entry.idl)
    ? entry.idl
    : path.join(__dirname, '..', entry.idl);
}

function pubkeyToString(value) {
  if (!value) return '';
  if (typeof value.toBase58 === 'function') return value.toBase58();
  return String(value);
}

function decodeAccount(dataBuffer, idl, preferredName) {
  const coder = new anchor.BorshAccountsCoder(idl);

  if (preferredName) {
    try {
      const decoded = coder.decode(preferredName, dataBuffer);
      if (decoded) return { decoded, name: preferredName };
    } catch (e) {
      // fall back to scanning
    }
  }

  const accountNames = (idl.accounts || []).map((a) => a.name);
  for (const name of accountNames) {
    try {
      const decoded = coder.decode(name, dataBuffer);
      if (decoded) return { decoded, name };
    } catch (e) {
      // ignore and keep trying
    }
  }

  return null;
}

async function main() {
  const poolStr = process.argv[2];
  const market = process.argv[3];
  const idlOverride = process.argv[4];

  if (!poolStr || !market) {
    console.error('Usage: node tools/decodePool.js <POOL_STATE_PUBKEY> <MARKET> [idlPath]');
    process.exit(1);
  }

  const entry = getEntry(market);
  if (!entry) {
    console.error(`No manifest entry for market "${market}".`);
    process.exit(1);
  }

  const idlPath = resolveIdlPath(entry, idlOverride);
  if (!idlPath || !fs.existsSync(idlPath)) {
    console.error(`IDL not found for market "${market}".`);
    process.exit(1);
  }

  const clients = await createRpcClients();
  const rpc = clients.rpc;
  const addressFn = clients.address;

  const idl = JSON.parse(fs.readFileSync(idlPath, 'utf8'));
  const response = await rpc
    .getAccountInfo(addressFn(poolStr), { commitment: 'confirmed', encoding: 'base64' })
    .send();
  const info = response.value;

  if (!info) {
    console.error('Account not found.');
    process.exit(1);
  }

  const rawData = Array.isArray(info.data) ? info.data[0] : info.data;
  const dataBuffer = Buffer.from(rawData, 'base64');
  const decodedResult = decodeAccount(dataBuffer, idl, entry.accountName);
  if (!decodedResult) {
    console.error('Could not decode the pool state with the provided IDL.');
    process.exit(1);
  }

  const { decoded, name } = decodedResult;
  console.log('pool:', poolStr);
  console.log('market:', market);
  console.log('decodedAs:', name);

  const vaultFields = entry.vaultFields || [];
  const mintFields = entry.mintFields || [];
  const count = Math.min(vaultFields.length, mintFields.length);

  if (count === 0) {
    console.log('No vault/mint fields defined for this market in manifest.');
    return;
  }

  console.log('\n--- Vaults ---');
  for (let i = 0; i < count; i += 1) {
    const vaultField = vaultFields[i];
    const mintField = mintFields[i];
    const mint = pubkeyToString(decoded[mintField]);
    const vault = pubkeyToString(decoded[vaultField]);
    console.log(`${mintField}: ${mint}`);
    console.log(`${vaultField}: ${vault}`);
  }
}

main().catch((err) => {
  logger.error('tools decodePool error', { error: err });
  console.error('Error:', err.message || err);
  process.exit(1);
});
