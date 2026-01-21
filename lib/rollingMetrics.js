const WINDOW_10S_MS = 10_000;
const WINDOW_60S_MS = 60_000;
const WINDOW_300S_MS = 300_000;
const MAX_WINDOW_MS = WINDOW_300S_MS;

function emptyMetrics() {
  return {
    netQuoteFlow_10s: null,
    netQuoteFlow_60s: null,
    netQuoteFlow_300s: null,
    flowVol_10s: null,
    flowVol_60s: null,
    depthScore: null,
  };
}

function computeWindowMetrics(samples, nowMs, windowMs) {
  const windowStart = nowMs - windowMs;
  let startIndex = 0;
  while (startIndex < samples.length && samples[startIndex].tsMs < windowStart) {
    startIndex += 1;
  }

  if (startIndex >= samples.length) {
    return { netQuoteFlow: null, flowVol: null };
  }

  if (samples[startIndex].tsMs > windowStart) {
    return { netQuoteFlow: null, flowVol: null };
  }

  if (samples.length - startIndex < 2) {
    return { netQuoteFlow: null, flowVol: null };
  }

  const first = samples[startIndex];
  const last = samples[samples.length - 1];
  let flowVol = 0;

  for (let i = startIndex + 1; i < samples.length; i += 1) {
    const prev = samples[i - 1];
    const curr = samples[i];
    flowVol += Math.abs(curr.quoteReserveUi - prev.quoteReserveUi);
    if (Number.isFinite(prev.baseReserveUi) && Number.isFinite(curr.baseReserveUi)) {
      flowVol += Math.abs(curr.baseReserveUi - prev.baseReserveUi);
    }
  }

  return {
    netQuoteFlow: last.quoteReserveUi - first.quoteReserveUi,
    flowVol,
  };
}

function createRollingMetrics() {
  const state = new Map();

  function update({ poolId, tsMs, quoteReserveUi, baseReserveUi }) {
    const metrics = emptyMetrics();
    if (!poolId || !Number.isFinite(tsMs) || !Number.isFinite(quoteReserveUi)) {
      return metrics;
    }

    const sample = {
      tsMs,
      quoteReserveUi,
      baseReserveUi: Number.isFinite(baseReserveUi) ? baseReserveUi : null,
    };

    const entry = state.get(poolId) || { samples: [] };
    entry.samples.push(sample);

    const cutoff = tsMs - MAX_WINDOW_MS;
    while (entry.samples.length && entry.samples[0].tsMs < cutoff) {
      entry.samples.shift();
    }

    state.set(poolId, entry);

    metrics.depthScore = Math.log1p(quoteReserveUi);

    const metrics10 = computeWindowMetrics(entry.samples, tsMs, WINDOW_10S_MS);
    const metrics60 = computeWindowMetrics(entry.samples, tsMs, WINDOW_60S_MS);
    const metrics300 = computeWindowMetrics(entry.samples, tsMs, WINDOW_300S_MS);

    metrics.netQuoteFlow_10s = metrics10.netQuoteFlow;
    metrics.netQuoteFlow_60s = metrics60.netQuoteFlow;
    metrics.netQuoteFlow_300s = metrics300.netQuoteFlow;
    metrics.flowVol_10s = metrics10.flowVol;
    metrics.flowVol_60s = metrics60.flowVol;
    metrics.depthScore = Number.isFinite(metrics.depthScore)
      ? metrics.depthScore
      : null;

    return metrics;
  }

  return {
    update,
  };
}

module.exports = {
  createRollingMetrics,
};
