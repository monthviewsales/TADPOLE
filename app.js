#!/usr/bin/env node
/* poolscanner CLI */
try {
  require('@dotenvx/dotenvx').config();
} catch (e) {
  // Optional dependency; use process.env if dotenvx isn't installed.
}

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const anchor = require('@coral-xyz/anchor');
const logger = require('./lib/logger');
const { createRpcClients } = require('./lib/solanaRpc');

const RPC_URL = process.env.RPC_URL;
const DATA_API_KEY = process.env.SOLANATRACKER_DATA_API_KEY;

if (!RPC_URL) {
  console.error('Missing RPC_URL. Set it in .env or your shell environment.');
  process.exit(1);
}

if (!DATA_API_KEY) {
  console.error(
    'Missing SOLANATRACKER_DATA_API_KEY. Set it in .env or your shell environment.'
  );
  process.exit(1);
}

const IDL_CACHE = new Map();
const MANIFEST_PATH = path.join(__dirname, 'idl', 'manifest.json');
let MANIFEST_CACHE = null;
let rpc = null;
let rpcSubscriptions = null;
let addressFn = null;

function loadIdl(idlPath) {
  if (IDL_CACHE.has(idlPath)) return IDL_CACHE.get(idlPath);
  const idl = JSON.parse(fs.readFileSync(idlPath, 'utf8'));
  IDL_CACHE.set(idlPath, idl);
  return idl;
}

function loadManifest() {
  if (MANIFEST_CACHE) return MANIFEST_CACHE;
  if (!fs.existsSync(MANIFEST_PATH)) {
    throw new Error('Missing idl/manifest.json.');
  }
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  MANIFEST_CACHE = manifest;
  return manifest;
}

function getManifestEntry(market) {
  if (!market) return null;
  const manifest = loadManifest();
  const key = String(market).toLowerCase();
  return manifest[key] || null;
}

function pubkeyToString(value) {
  if (!value) return '';
  if (typeof value.toBase58 === 'function') return value.toBase58();
  return String(value);
}

function abbreviate(value, head = 4, tail = 4) {
  if (!value) return '';
  if (value.length <= head + tail + 3) return value;
  return `${value.slice(0, head)}...${value.slice(-tail)}`;
}

function formatNumber(value) {
  if (value === null || value === undefined || Number.isNaN(value)) return '0';
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(
    value
  );
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

function formatDelta(prev, next) {
  if (prev === null || prev === undefined) return { diff: 'n/a', pct: 'n/a' };
  const diff = next - prev;
  const diffStr = `${diff >= 0 ? '+' : ''}${formatPrice(diff)}`;
  if (!prev) return { diff: diffStr, pct: 'n/a' };
  const pct = (diff / prev) * 100;
  const pctStr = `${pct >= 0 ? '+' : ''}${pct.toFixed(2)}%`;
  return { diff: diffStr, pct: pctStr };
}

function normalizeSlot(slot) {
  if (slot === null || slot === undefined) return null;
  try {
    return typeof slot === 'bigint' ? slot : BigInt(slot);
  } catch (err) {
    return null;
  }
}

function renderLiveLine({ price, prevPrice, quoteMint, tokenMint, slot }) {
  const quoteShort = abbreviate(quoteMint || '');
  const tokenShort = abbreviate(tokenMint || '');
  const { diff, pct } = formatDelta(prevPrice, price);
  const ts = new Date().toISOString();
  const slotPart =
    slot !== undefined && slot !== null ? `slot ${slot.toString()} | ` : '';
  return `[${ts}] ${slotPart}price per ${tokenShort}: ${formatPrice(
    price
  )} ${quoteShort} | Δ ${diff} (${pct})`;
}

function writeLiveLine(line) {
  if (!process.stdout.isTTY) {
    console.log(line);
    return;
  }
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(line);
}

function formatRatio(buys, sells) {
  if (!sells) return buys ? 'inf' : '0';
  return (buys / sells).toFixed(2);
}

function truncate(value, width) {
  const s = String(value ?? '');
  if (s.length <= width) return s;
  return s.slice(0, Math.max(0, width - 3)) + '...';
}

function pad(value, width) {
  return String(value ?? '').padEnd(width, ' ');
}

function renderPools(pools) {
  const widths = {
    index: 4,
    market: 16,
    ratio: 6,
    liquidity: 14,
    volume: 12,
    quote: 13,
  };

  const header =
    pad('#', widths.index) +
    pad('Market', widths.market) +
    pad('B/S', widths.ratio) +
    pad('Liq(quote)', widths.liquidity) +
    pad('Vol24h', widths.volume) +
    pad('Quote', widths.quote);

  console.log(header);
  console.log('-'.repeat(header.length));

  pools.forEach((pool, idx) => {
    const line =
      pad(String(idx + 1), widths.index) +
      pad(truncate(pool.market, widths.market - 1), widths.market) +
      pad(pool.ratio, widths.ratio) +
      pad(pool.liquidityQuote, widths.liquidity) +
      pad(pool.volume24h, widths.volume) +
      pad(pool.quoteTokenShort, widths.quote);
    console.log(line);
  });
}

function selectDecoder(market) {
  const entry = getManifestEntry(market);
  if (!entry) return null;

  const idlPath = entry.idl
    ? path.isAbsolute(entry.idl)
      ? entry.idl
      : path.join(__dirname, entry.idl)
    : null;

  return {
    name: String(market || '').toLowerCase(),
    idlPath,
    accountName: entry.accountName,
    vaultFields: entry.vaultFields || [],
    mintFields: entry.mintFields || [],
  };
}

async function decodePoolState(poolId, decoder) {
  if (!decoder.idlPath) {
    throw new Error(`IDL file not found for ${decoder.name}.`);
  }
  const response = await rpc
    .getAccountInfo(addressFn(poolId), { commitment: 'confirmed', encoding: 'base64' })
    .send();
  const info = response.value;
  if (!info) throw new Error('Pool account not found');

  const rawData = Array.isArray(info.data) ? info.data[0] : info.data;
  const dataBuffer = Buffer.from(rawData, 'base64');

  const idl = loadIdl(decoder.idlPath);
  const coder = new anchor.BorshAccountsCoder(idl);

  let decoded = null;
  try {
    decoded = coder.decode(decoder.accountName, dataBuffer);
  } catch (err) {
    // fallback: try all account names
    const accountNames = (idl.accounts || []).map((a) => a.name);
    for (const name of accountNames) {
      try {
        const d = coder.decode(name, dataBuffer);
        if (d) {
          decoded = d;
          break;
        }
      } catch (e) {
        // ignore
      }
    }
  }

  if (!decoded) {
    throw new Error(`Could not decode pool state using ${decoder.name} IDL.`);
  }

  return decoded;
}

function extractVaults(decoded, decoder) {
  const vaults = [];
  const count = Math.min(decoder.vaultFields.length, decoder.mintFields.length);

  for (let i = 0; i < count; i += 1) {
    const vaultField = decoder.vaultFields[i];
    const mintField = decoder.mintFields[i];
    vaults.push({
      mint: pubkeyToString(decoded[mintField]),
      vault: pubkeyToString(decoded[vaultField]),
    });
  }

  return vaults;
}

function selectVaults({ vaults, tokenMint, quoteToken }) {
  const byMint = new Map(vaults.map((v) => [v.mint, v.vault]));
  const baseVault = byMint.get(tokenMint);
  if (!baseVault) {
    throw new Error('Token mint not found in decoded pool mints.');
  }

  let quoteMint = quoteToken && byMint.has(quoteToken) ? quoteToken : null;
  if (!quoteMint) {
    const other = vaults.find((v) => v.mint !== tokenMint);
    quoteMint = other ? other.mint : null;
  }

  if (!quoteMint) {
    throw new Error('Unable to determine quote mint for the selected pool.');
  }

  const quoteVault = byMint.get(quoteMint);
  if (!quoteVault) {
    throw new Error('Quote mint does not map to a decoded vault.');
  }

  return { baseVault, quoteVault, quoteMint };
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

async function getPoolPrice({ pool, tokenMint }) {
  const context = await getPoolVaultContext({ pool, tokenMint });
  const { baseVault, quoteVault, quoteMint } = context;

  const { baseAmount, quoteAmount } = await fetchVaultBalances({
    baseVault,
    quoteVault,
  });

  if (!baseAmount.ui || !quoteAmount.ui) {
    throw new Error('Zero balance in one of the pool vaults.');
  }

  const price = quoteAmount.ui / baseAmount.ui;
  return {
    price,
    quoteMint,
    baseAmount,
    quoteAmount,
  };
}

async function getPoolVaultContext({ pool, tokenMint }) {
  const decoder = selectDecoder(pool.market);
  if (!decoder) {
    throw new Error(`No decoder available for market "${pool.market}".`);
  }

  const decoded = await decodePoolState(pool.poolId, decoder);
  const vaults = extractVaults(decoded, decoder);

  const { baseVault, quoteVault, quoteMint } = selectVaults({
    vaults,
    tokenMint,
    quoteToken: pool.quoteToken,
  });

  return {
    decoder,
    vaults,
    baseVault,
    quoteVault,
    quoteMint,
  };
}

async function fetchVaultBalances({ baseVault, quoteVault }) {
  const accounts = await rpc
    .getMultipleAccounts([addressFn(baseVault), addressFn(quoteVault)], {
      commitment: 'confirmed',
      encoding: 'jsonParsed',
    })
    .send();
  const [baseInfo, quoteInfo] = accounts.value;
  const slot = normalizeSlot(accounts.context && accounts.context.slot);

  const baseAmount = parseTokenAmount(baseInfo);
  const quoteAmount = parseTokenAmount(quoteInfo);

  return { baseAmount, quoteAmount, slot };
}

async function promptSelection(count) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await new Promise((resolve) => {
    rl.question(`Select a pool (1-${count}) or "q" to quit: `, resolve);
  });
  rl.close();

  const trimmed = String(answer || '').trim().toLowerCase();
  if (trimmed === 'q' || trimmed === 'quit') return null;

  const index = Number.parseInt(trimmed, 10);
  if (!Number.isFinite(index) || index < 1 || index > count) {
    throw new Error('Invalid selection.');
  }

  return index - 1;
}

async function promptMode() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await new Promise((resolve) => {
    rl.question('Mode: snapshot (s) or live (l)? ', resolve);
  });
  rl.close();

  const trimmed = String(answer || '').trim().toLowerCase();
  if (trimmed === 'l' || trimmed === 'live') return 'live';
  return 'snapshot';
}

function extractAccountNotification(notification) {
  if (!notification) return null;
  if (notification.value && notification.value.data) {
    return {
      account: notification.value,
      slot: normalizeSlot(notification.context && notification.context.slot),
    };
  }
  if (notification.data) {
    return {
      account: notification,
      slot: null,
    };
  }
  return null;
}

async function streamPoolPrice({ pool, tokenMint }) {
  if (!rpcSubscriptions) {
    throw new Error('RPC subscriptions client is not initialized.');
  }

  const { baseVault, quoteVault, quoteMint } = await getPoolVaultContext({
    pool,
    tokenMint,
  });

  const { baseAmount, quoteAmount, slot } = await fetchVaultBalances({
    baseVault,
    quoteVault,
  });

  const state = {
    base: { amount: baseAmount, slot },
    quote: { amount: quoteAmount, slot },
  };

  console.log('\n--- Live Price ---');
  console.log(`Market: ${pool.market}`);
  console.log(`Pool: ${pool.poolId}`);
  console.log('Press Ctrl+C to stop.');
  const renderSyncLine = (baseSlot, quoteSlot) =>
    `[${new Date().toISOString()}] syncing base slot ${
      baseSlot ? baseSlot.toString() : 'n/a'
    } / quote slot ${quoteSlot ? quoteSlot.toString() : 'n/a'}`;

  let lastPrice = null;
  const printPrice = () => {
    const baseState = state.base;
    const quoteState = state.quote;
    if (!baseState || !quoteState) return;

    const baseSlot = baseState.slot;
    const quoteSlot = quoteState.slot;
    if (baseSlot == null || quoteSlot == null) return;

    if (baseSlot !== quoteSlot) {
      writeLiveLine(renderSyncLine(baseSlot, quoteSlot));
      return;
    }

    const baseAmountLocal = baseState.amount;
    const quoteAmountLocal = quoteState.amount;
    if (!baseAmountLocal.ui || !quoteAmountLocal.ui) return;

    const price = quoteAmountLocal.ui / baseAmountLocal.ui;
    const line = renderLiveLine({
      price,
      prevPrice: lastPrice,
      quoteMint,
      tokenMint,
      slot: baseSlot,
    });
    writeLiveLine(line);
    lastPrice = price;
  };

  printPrice();

  const abortController = new AbortController();
  const stop = () => {
    if (!abortController.signal.aborted) {
      abortController.abort();
    }
  };

  process.once('SIGINT', () => {
    console.log('\nStopping...');
    stop();
  });

  const baseStream = await rpcSubscriptions
    .accountNotifications(addressFn(baseVault), {
      commitment: 'confirmed',
      encoding: 'jsonParsed',
    })
    .subscribe({ abortSignal: abortController.signal });

  const quoteStream = await rpcSubscriptions
    .accountNotifications(addressFn(quoteVault), {
      commitment: 'confirmed',
      encoding: 'jsonParsed',
    })
    .subscribe({ abortSignal: abortController.signal });

  const consume = async (stream, label) => {
    try {
      for await (const notification of stream) {
        const payload = extractAccountNotification(notification);
        if (!payload) continue;
        try {
          const amount = parseTokenAmount(payload.account);
          state[label] = {
            amount,
            slot: payload.slot ?? (state[label] && state[label].slot) ?? null,
          };
          printPrice();
        } catch (err) {
          logger.warn('Failed to parse live token amount', { error: err });
        }
      }
    } catch (err) {
      if (!abortController.signal.aborted) {
        logger.error('Subscription error', { error: err });
      }
    }
  };

  await Promise.all([consume(baseStream, 'base'), consume(quoteStream, 'quote')]);
}

async function loadDataApiClient() {
  try {
    const mod = require('@solana-tracker/data-api');
    return mod.Client || (mod.default && mod.default.Client) || mod.default;
  } catch (err) {
    const mod = await import('@solana-tracker/data-api');
    return mod.Client || (mod.default && mod.default.Client) || mod.default;
  }
}

async function main() {
  const tokenMint = process.argv[2];
  if (!tokenMint) {
    console.error('Usage: node app.js <TOKEN_MINT>');
    process.exit(1);
  }

  const clients = await createRpcClients();
  rpc = clients.rpc;
  rpcSubscriptions = clients.rpcSubscriptions;
  addressFn = clients.address;

  const Client = await loadDataApiClient();
  if (!Client) {
    throw new Error('Unable to load @solana-tracker/data-api Client.');
  }

  const client = new Client({ apiKey: DATA_API_KEY });
  const tokenInfo = await client.getTokenInfo(tokenMint);
  const pools = Array.isArray(tokenInfo.pools) ? tokenInfo.pools : [];

  if (pools.length === 0) {
    console.log('No pools found for this token.');
    return;
  }

  const displayPools = pools.map((pool) => {
    const buys = pool.txns?.buys ?? 0;
    const sells = pool.txns?.sells ?? 0;
    const volume24h = pool.txns?.volume24h ?? 0;
    const liquidityQuote = pool.liquidity?.quote ?? 0;

    return {
      poolId: pool.poolId,
      market: pool.market || 'unknown',
      quoteToken: pool.quoteToken,
      ratio: formatRatio(buys, sells),
      liquidityQuote: formatNumber(liquidityQuote),
      volume24h: formatNumber(volume24h),
      quoteTokenShort: abbreviate(pool.quoteToken || ''),
    };
  });

  const tokenName = tokenInfo.token?.name || 'Unknown';
  const tokenSymbol = tokenInfo.token?.symbol || '';
  console.log(`Pools for ${tokenName} ${tokenSymbol ? `(${tokenSymbol})` : ''}`);
  renderPools(displayPools);

  let selectedIndex;
  try {
    selectedIndex = await promptSelection(displayPools.length);
  } catch (err) {
    console.error(err.message);
    return;
  }

  if (selectedIndex === null) {
    console.log('Done.');
    return;
  }

  const selected = pools[selectedIndex];
  if (!selected) {
    console.error('Selected pool not found.');
    return;
  }

  const mode = await promptMode();
  if (mode === 'live') {
    await streamPoolPrice({ pool: selected, tokenMint });
    return;
  }

  const result = await getPoolPrice({ pool: selected, tokenMint });
  const quoteShort = abbreviate(result.quoteMint || '');
  console.log('\n--- Price ---');
  console.log(`Market: ${selected.market}`);
  console.log(`Pool: ${selected.poolId}`);
  console.log(
    `Price: ${formatPrice(result.price)} ${quoteShort} per ${abbreviate(
      tokenMint
    )}`
  );
}

main().catch((err) => {
  logger.error('app error', { error: err });
  console.error('Error:', err.message || err);
  process.exit(1);
});
