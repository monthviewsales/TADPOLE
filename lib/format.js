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
