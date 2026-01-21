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

function extractVaults(decoded, entry) {
  const vaults = [];
  const vaultFields = entry.vaultFields || [];
  const mintFields = entry.mintFields || [];
  const count = Math.min(vaultFields.length, mintFields.length);

  for (let i = 0; i < count; i += 1) {
    const vaultField = vaultFields[i];
    const mintField = mintFields[i];
    vaults.push({
      mint: pubkeyToString(decoded[mintField]),
      vault: pubkeyToString(decoded[vaultField]),
    });
  }

  return vaults;
}

function parseTokenAmount(parsedAccount) {
  if (!parsedAccount) {
    throw new Error('Token account not found.');
  }
  const data = parsedAccount && parsedAccount.data;
  const info = data && data.parsed && data.parsed.info;
  const tokenAmount = info && info.tokenAmount;
  if (!tokenAmount) {
    throw new Error('Account is not a parsed SPL token account.');
  }

  const ui = Number(tokenAmount.uiAmountString ?? tokenAmount.uiAmount ?? 0);
  return {
    ui,
    amount: tokenAmount.amount,
    decimals: tokenAmount.decimals,
  };
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
  const decodedResult = decodeAccount(dataBuffer, idl, entry.accountName);
  if (!decodedResult) {
    console.error('Could not decode the pool state with the provided IDL.');
    process.exit(1);
  }

  const { decoded, name } = decodedResult;
  const vaults = extractVaults(decoded, entry);
  if (vaults.length < 2) {
    console.error('Vault fields are missing or incomplete in the manifest.');
    process.exit(1);
  }

  const baseVault = vaults.find((v) => v.mint === tokenMint);
  if (!baseVault) {
    console.error('Token mint not found in decoded pool mints.');
    process.exit(1);
  }

  let quoteMint = quoteMintOverride;
  if (!quoteMint) {
    const other = vaults.find((v) => v.mint !== tokenMint);
    quoteMint = other ? other.mint : null;
  }

  if (!quoteMint) {
    console.error('Unable to determine quote mint.');
    process.exit(1);
  }

  const quoteVault = vaults.find((v) => v.mint === quoteMint);
  if (!quoteVault) {
    console.error('Quote mint does not map to a decoded vault.');
    process.exit(1);
  }

  const accounts = await rpc
    .getMultipleAccounts([addressFn(baseVault.vault), addressFn(quoteVault.vault)], {
      commitment: 'confirmed',
      encoding: 'jsonParsed',
    })
    .send();
  const [baseInfo, quoteInfo] = accounts.value;
  const baseAmount = parseTokenAmount(baseInfo);
  const quoteAmount = parseTokenAmount(quoteInfo);

  if (!baseAmount.ui || !quoteAmount.ui) {
    console.error('Zero balance in one of the pool vaults.');
    process.exit(1);
  }

  const price = quoteAmount.ui / baseAmount.ui;
  console.log('pool:', poolStr);
  console.log('market:', market);
  console.log('decodedAs:', name);
  console.log('baseMint:', tokenMint);
  console.log('quoteMint:', quoteMint);
  console.log('price:', formatPrice(price));
}

main().catch((err) => {
  logger.error('tools priceFromPool error', { error: err });
  console.error('Error:', err.message || err);
  process.exit(1);
});
