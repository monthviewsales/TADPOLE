#!/usr/bin/env node
/* Generic pool price helper using idl/manifest.json */
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
const { fetchVaultBalanceSnapshot } = require('../lib/vaultStreamAdapter');
const { decodeRaydiumAmmV4Account } = require('../lib/raydiumAmmV4Decoder');

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

async function decodeAccount(dataBuffer, idl, entry) {
  if (entry && entry.decoderType === 'raydiumAmmV4') {
    const decoded = await decodeRaydiumAmmV4Account(dataBuffer);
    return { decoded, name: entry.accountName || 'AmmInfo' };
  }

  const coder = new anchor.BorshAccountsCoder(idl);

  const preferredName = entry && entry.accountName;
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

function extractVaults(decoded, entry, options = {}) {
  const vaults = [];
  const vaultFields = entry.vaultFields || [];
  const mintFields = entry.mintFields || [];
  const count = vaultFields.length;
  const fallbackQuoteMint = options.quoteMint ? String(options.quoteMint) : '';

  for (let i = 0; i < count; i += 1) {
    const vaultField = vaultFields[i];
    const mintField = mintFields[i];
    const vault = pubkeyToString(decoded[vaultField]);
    if (!vault) continue;

    let mint = mintField ? pubkeyToString(decoded[mintField]) : '';
    if (!mint && entry.quoteMintFromPool && i > 0 && fallbackQuoteMint) {
      mint = fallbackQuoteMint;
    }

    vaults.push({
      mint,
      vault,
    });
  }

  return vaults;
}

function formatPrice(value) {
  if (value === null || value === undefined || Number.isNaN(value)) return '0';
  if (value === 0) return '0';
  const abs = Math.abs(value);
  let fixed;
  if (abs >= 1) fixed = value.toFixed(4);
  else if (abs >= 0.01) fixed = value.toFixed(6);
  else if (abs >= 0.0001) fixed = value.toFixed(8);
  else fixed = value.toFixed(12);
  return fixed.replace(/\.?0+$/, '');
}

async function main() {
  const poolStr = process.argv[2];
  const tokenMint = process.argv[3];
  const market = process.argv[4];
  const quoteMintOverride = process.argv[5];
  const idlOverride = process.argv[6];

  if (!poolStr || !tokenMint || !market) {
    console.error(
      'Usage: node tools/priceFromPool.js <POOL_STATE_PUBKEY> <TOKEN_MINT> <MARKET> [quoteMint] [idlPath]'
    );
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
  const decodedResult = await decodeAccount(dataBuffer, idl, entry);
  if (!decodedResult) {
    console.error('Could not decode the pool state with the provided IDL.');
    process.exit(1);
  }

  const { decoded, name } = decodedResult;
  const vaults = extractVaults(decoded, entry, {
    quoteMint: quoteMintOverride,
  });
  if (vaults.length < 2) {
    console.error('Vault fields are missing or incomplete in the manifest.');
    process.exit(1);
  }

  const baseVault = vaults.find((v) => v.mint === tokenMint);
  if (!baseVault) {
    console.error('Token mint not found in decoded pool mints.');
    process.exit(1);
  }

  let quoteMint = quoteMintOverride || null;
  if (!quoteMint) {
    const otherByMint = vaults.find((v) => v.mint && v.mint !== tokenMint);
    quoteMint = otherByMint ? otherByMint.mint : null;
  }

  let quoteVault = quoteMint ? vaults.find((v) => v.mint === quoteMint) : null;
  if (!quoteVault) {
    quoteVault = vaults.find((v) => v.vault !== baseVault.vault) || null;
    if (quoteVault && !quoteMint) {
      quoteMint = quoteVault.mint || '';
    }
  }

  if (!quoteVault) {
    console.error('Quote mint does not map to a decoded vault.');
    process.exit(1);
  }

  const [baseSnapshot, quoteSnapshot] = await Promise.all([
    fetchVaultBalanceSnapshot({
      rpc,
      addressFn,
      vault: baseVault.vault,
      commitment: 'confirmed',
      encodingMode: 'parsed',
      decimals: null,
      mint: tokenMint,
    }),
    fetchVaultBalanceSnapshot({
      rpc,
      addressFn,
      vault: quoteVault.vault,
      commitment: 'confirmed',
      encodingMode: 'parsed',
      decimals: null,
      mint: quoteMint || null,
    }),
  ]);

  if (!baseSnapshot.ui || !quoteSnapshot.ui) {
    console.error('Zero balance in one of the pool vaults.');
    process.exit(1);
  }

  const price = quoteSnapshot.ui / baseSnapshot.ui;
  console.log('pool:', poolStr);
  console.log('market:', market);
  console.log('decodedAs:', name);
  console.log('baseMint:', tokenMint);
  console.log('quoteMint:', quoteMint || '(unknown)');
  console.log('price:', formatPrice(price));
}

main().catch((err) => {
  logger.error('tools priceFromPool error', { error: err });
  console.error('Error:', err.message || err);
  process.exit(1);
});
