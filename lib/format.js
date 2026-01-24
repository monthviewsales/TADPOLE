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

function formatDelta(prev, next, decimals) {
  if (prev === null || prev === undefined) {
    return { diff: 'n/a', pct: 'n/a', direction: null };
  }

  const diff = next - prev;
  let diffRounded = diff;
  let diffStr;
  if (Number.isFinite(decimals)) {
    const fixed = diff.toFixed(decimals);
    diffStr = `${diff >= 0 ? '+' : ''}${fixed}`;
    diffRounded = Number(fixed);
  } else {
    diffStr = `${diff >= 0 ? '+' : ''}${formatPrice(diff)}`;
  }

  if (Object.is(diffRounded, -0)) diffRounded = 0;
  const direction = diffRounded === 0 ? 'zero' : diffRounded > 0 ? 'pos' : 'neg';

  if (!prev) return { diff: diffStr, pct: 'n/a', direction };
  const pct = (diff / prev) * 100;
  const pctStr = `${pct >= 0 ? '+' : ''}${pct.toFixed(2)}%`;
  return { diff: diffStr, pct: pctStr, direction };
}

function normalizeSlot(slot) {
  if (slot === null || slot === undefined) return null;
  try {
    return typeof slot === 'bigint' ? slot : BigInt(slot);
  } catch (err) {
    return null;
  }
}

function renderLiveLine({
  price,
  prevPrice,
  quoteMint,
  tokenMint,
  slot,
  quoteDecimals,
}) {
  const quoteShort = abbreviate(quoteMint || '');
  const tokenShort = abbreviate(tokenMint || '');
  const { diff, pct, direction } = formatDelta(
    prevPrice,
    price,
    quoteDecimals
  );
  const ts = new Date().toISOString();
  const slotPart =
    slot !== undefined && slot !== null ? `slot ${slot.toString()} | ` : '';
  const deltaSymbol = colorizeDeltaSymbol('Δ', direction);
  return `[${ts}] ${slotPart}price per ${tokenShort}: ${formatPrice(
    price
  )} ${quoteShort} | ${deltaSymbol} ${diff} (${pct})`;
}

function colorizeDeltaSymbol(symbol, direction) {
  if (!process.stdout.isTTY) return symbol;
  if (process.env.NO_COLOR) return symbol;
  if (!direction) return symbol;

  const reset = '\x1b[0m';
  const color =
    direction === 'pos'
      ? '\x1b[32m'
      : direction === 'neg'
        ? '\x1b[31m'
        : direction === 'zero'
          ? '\x1b[37m'
          : '';
  if (!color) return symbol;
  return `${color}${symbol}${reset}`;
}

function formatRatio(buys, sells) {
  if (!sells) return buys ? 'inf' : '0';
  return (buys / sells).toFixed(2);
}

module.exports = {
  abbreviate,
  formatNumber,
  formatPrice,
  formatDelta,
  normalizeSlot,
  renderLiveLine,
  formatRatio,
};
