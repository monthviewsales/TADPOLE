const logger = require('./logger');
const { decodeMintDecimals } = require('./splLayouts');

const DECIMALS_CACHE = new Map();

function shouldDebugRpc() {
  return process.env.NODE_ENV === 'development';
}

function normalizeMint(mint) {
  if (!mint) return '';
  return String(mint).trim();
}

async function resolveMintDecimals({
  rpc,
  addressFn,
  mint,
  commitment = 'confirmed',
  fallbackDecimals,
  debugLabel,
}) {
  const mintKey = normalizeMint(mint);

  if (Number.isFinite(fallbackDecimals)) {
    if (mintKey && !DECIMALS_CACHE.has(mintKey)) {
      DECIMALS_CACHE.set(mintKey, fallbackDecimals);
    }
    return fallbackDecimals;
  }

  if (mintKey && DECIMALS_CACHE.has(mintKey)) {
    return DECIMALS_CACHE.get(mintKey);
  }

  if (!mintKey) {
    throw new Error('Missing mint address for decimals resolution.');
  }
  if (!rpc || !addressFn) {
    throw new Error(`Missing rpc/addressFn to resolve decimals for mint ${mintKey}.`);
  }

  const response = await rpc
    .getAccountInfo(addressFn(mintKey), { commitment, encoding: 'base64' })
    .send();
  if (debugLabel && shouldDebugRpc()) {
    logger.debug(`rpc:getAccountInfo response (${debugLabel})`, { response });
  }

  const info = response.value;
  if (!info) {
    throw new Error(`Mint account not found for ${mintKey}.`);
  }

  const rawData = Array.isArray(info.data) ? info.data[0] : info.data;
  const buffer = Buffer.from(rawData, 'base64');
  const decimals = decodeMintDecimals(buffer);
  DECIMALS_CACHE.set(mintKey, decimals);
  return decimals;
}

module.exports = {
  resolveMintDecimals,
};
