const logger = require('./logger');
const { normalizeSlot } = require('./format');
const { decodeTokenAccountAmount } = require('./splLayouts');
const { resolveMintDecimals } = require('./mintCache');

function shouldDebugRpc() {
  return process.env.NODE_ENV === 'development';
}

function normalizeEncodingMode(mode) {
  if (!mode) return 'raw';
  const normalized = String(mode).trim().toLowerCase();
  if (normalized !== 'raw' && normalized !== 'parsed') {
    throw new Error(`Invalid vault encoding mode: ${mode}`);
  }
  return normalized;
}

function getAccountDataBuffer(account) {
  if (!account) return null;
  const data = account.data;
  if (Array.isArray(data)) {
    const encoding = data[1] || 'base64';
    if (encoding !== 'base64') {
      throw new Error(`Unsupported account data encoding: ${encoding}`);
    }
    return Buffer.from(data[0], 'base64');
  }
  if (typeof data === 'string') {
    return Buffer.from(data, 'base64');
  }
  if (data instanceof Uint8Array) {
    return Buffer.from(data);
  }
  return null;
}

function describeAccountData(account) {
  if (!account) return { dataType: 'null' };
  const data = account.data;
  if (Array.isArray(data)) {
    return {
      dataType: 'array',
      dataEncoding: data[1] || 'base64',
      dataLength: typeof data[0] === 'string' ? data[0].length : null,
    };
  }
  if (data instanceof Uint8Array) {
    return { dataType: 'uint8', dataLength: data.length };
  }
  if (typeof data === 'string') {
    return { dataType: 'string', dataEncoding: 'base64', dataLength: data.length };
  }
  if (data && typeof data === 'object' && data.parsed) {
    return { dataType: 'parsed' };
  }
  return { dataType: typeof data };
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

function toUiAmount(amountRaw, decimals) {
  if (!Number.isFinite(decimals)) return 0;
  const divisor = 10 ** decimals;
  if (!Number.isFinite(divisor) || divisor === 0) return 0;
  return Number(amountRaw) / divisor;
}

function parseParsedTokenAccount(account, fallbackDecimals, vault) {
  if (!account) {
    throw new Error('Token account not found.');
  }
  const tokenAmount =
    account && account.data && account.data.parsed && account.data.parsed.info
      ? account.data.parsed.info.tokenAmount
      : null;

  if (!tokenAmount) {
    throw new Error('Account is not a parsed SPL token account.');
  }

  const amountStr = tokenAmount.amount ?? '0';
  let amountRaw;
  try {
    amountRaw = BigInt(amountStr);
  } catch (err) {
    throw new Error(`Invalid token amount for vault ${vault || 'unknown'}.`);
  }

  const decimals = Number.isFinite(tokenAmount.decimals)
    ? tokenAmount.decimals
    : fallbackDecimals;
  if (!Number.isFinite(decimals)) {
    throw new Error(`Missing token decimals for vault ${vault || 'unknown'}.`);
  }

  let ui = null;
  if (tokenAmount.uiAmountString !== undefined && tokenAmount.uiAmountString !== null) {
    ui = Number(tokenAmount.uiAmountString);
  } else if (tokenAmount.uiAmount !== undefined && tokenAmount.uiAmount !== null) {
    ui = Number(tokenAmount.uiAmount);
  }

  if (!Number.isFinite(ui)) {
    ui = toUiAmount(amountRaw, decimals);
  }

  return { amountRaw, decimals, ui };
}

function getParsedAccountMint(account) {
  return account && account.data && account.data.parsed && account.data.parsed.info
    ? account.data.parsed.info.mint
    : null;
}

async function resolveParsedFallbackDecimals({
  rpc,
  addressFn,
  mint,
  account,
  commitment,
  fallbackDecimals,
  debugLabel,
}) {
  if (Number.isFinite(fallbackDecimals)) return fallbackDecimals;
  const mintAddress = mint || getParsedAccountMint(account);
  if (!mintAddress || !rpc || !addressFn) return null;
  return resolveMintDecimals({
    rpc,
    addressFn,
    mint: mintAddress,
    commitment,
    fallbackDecimals: null,
    debugLabel,
  });
}

function parseRawTokenAccount(account, decimals, vault) {
  const buffer = getAccountDataBuffer(account);
  if (!buffer) {
    throw new Error(`Missing raw account data for vault ${vault || 'unknown'}.`);
  }
  const amountRaw = decodeTokenAccountAmount(buffer);
  const ui = toUiAmount(amountRaw, decimals);
  return { amountRaw, decimals, ui };
}

async function fetchVaultBalanceSnapshot({
  rpc,
  addressFn,
  vault,
  commitment = 'confirmed',
  encodingMode = 'raw',
  decimals,
  mint,
  debugLabel,
}) {
  if (!rpc) {
    throw new Error('RPC client is required to fetch vault balance snapshot.');
  }
  const normalizedEncoding = normalizeEncodingMode(encodingMode);
  const encoding = normalizedEncoding === 'parsed' ? 'jsonParsed' : 'base64';
  const address = addressFn ? addressFn(vault) : vault;

  const response = await rpc
    .getAccountInfo(address, { commitment, encoding })
    .send();

  if (debugLabel && shouldDebugRpc()) {
    logger.debug(`rpc:getAccountInfo response (${debugLabel})`, { response });
  }

  const info = response.value;
  if (!info) {
    throw new Error(`Vault account not found for ${vault}.`);
  }

  const slot = normalizeSlot(response.context && response.context.slot);

  if (normalizedEncoding === 'parsed') {
    const fallbackDecimals = await resolveParsedFallbackDecimals({
      rpc,
      addressFn,
      mint,
      account: info,
      commitment,
      fallbackDecimals: decimals,
      debugLabel,
    });
    const parsed = parseParsedTokenAccount(info, fallbackDecimals, vault);
    return {
      vault,
      amountRaw: parsed.amountRaw,
      decimals: parsed.decimals,
      ui: parsed.ui,
      slot,
      encoding: 'parsed',
    };
  }

  const resolvedDecimals = await resolveMintDecimals({
    rpc,
    addressFn,
    mint,
    commitment,
    fallbackDecimals: decimals,
    debugLabel,
  });

  const raw = parseRawTokenAccount(info, resolvedDecimals, vault);
  return {
    vault,
    amountRaw: raw.amountRaw,
    decimals: raw.decimals,
    ui: raw.ui,
    slot,
    encoding: 'raw',
  };
}

async function subscribeVaultBalances({
  rpcSubscriptions,
  addressFn,
  vault,
  commitment = 'confirmed',
  encodingMode = 'raw',
  abortSignal,
  decimals,
  mint,
  rpc,
}) {
  if (!rpcSubscriptions) {
    throw new Error('RPC subscriptions client is required for vault streaming.');
  }

  const normalizedEncoding = normalizeEncodingMode(encodingMode);
  const encoding = normalizedEncoding === 'parsed' ? 'jsonParsed' : 'base64';
  const address = addressFn ? addressFn(vault) : vault;

  const resolvedDecimals =
    normalizedEncoding === 'raw'
      ? await resolveMintDecimals({
          rpc,
          addressFn,
          mint,
          commitment,
          fallbackDecimals: decimals,
          debugLabel: `vault ${vault} mint decimals`,
        })
      : null;
  let parsedFallbackDecimals =
    normalizedEncoding === 'parsed'
      ? await resolveParsedFallbackDecimals({
          rpc,
          addressFn,
          mint,
          account: null,
          commitment,
          fallbackDecimals: decimals,
          debugLabel: `vault ${vault} parsed decimals`,
        })
      : null;

  const stream = await rpcSubscriptions
    .accountNotifications(address, { commitment, encoding })
    .subscribe({ abortSignal });

  async function* iterator() {
    for await (const notification of stream) {
      const payload = extractAccountNotification(notification);
      if (!payload) continue;

      try {
        if (normalizedEncoding === 'parsed') {
          let fallbackDecimals = parsedFallbackDecimals;
          if (!Number.isFinite(fallbackDecimals)) {
            fallbackDecimals = await resolveParsedFallbackDecimals({
              rpc,
              addressFn,
              mint,
              account: payload.account,
              commitment,
              fallbackDecimals,
              debugLabel: `vault ${vault} parsed decimals`,
            });
          }
          if (Number.isFinite(fallbackDecimals)) {
            parsedFallbackDecimals = fallbackDecimals;
          }
          const parsed = parseParsedTokenAccount(
            payload.account,
            fallbackDecimals,
            vault
          );
          yield {
            vault,
            amountRaw: parsed.amountRaw,
            decimals: parsed.decimals,
            ui: parsed.ui,
            slot: payload.slot,
            encoding: 'parsed',
          };
        } else {
          const raw = parseRawTokenAccount(payload.account, resolvedDecimals, vault);
          yield {
            vault,
            amountRaw: raw.amountRaw,
            decimals: raw.decimals,
            ui: raw.ui,
            slot: payload.slot,
            encoding: 'raw',
          };
        }
      } catch (err) {
        const errorInfo =
          err instanceof Error
            ? { errorMessage: err.message, errorStack: err.stack }
            : { error: err };
        logger.warn('Failed to parse vault update', {
          vault,
          slot: payload && payload.slot !== undefined ? payload.slot : null,
          ...describeAccountData(payload && payload.account),
          ...errorInfo,
        });
      }
    }
  }

  return iterator();
}

module.exports = {
  subscribeVaultBalances,
  fetchVaultBalanceSnapshot,
};
