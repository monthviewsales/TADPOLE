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
  const windowSamples = samples.filter((sample) => sample.tsMs >= windowStart);
  if (windowSamples.length < 2) {
    return { netQuoteFlow: null, flowVol: null };
  }

  const first = windowSamples[0];
  const last = windowSamples[windowSamples.length - 1];
  let flowVol = 0;

  for (let i = 1; i < windowSamples.length; i += 1) {
    const prev = windowSamples[i - 1];
    const curr = windowSamples[i];
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

    const entry = state.get(poolId) || { samples: [], firstTsMs: tsMs };
    if (!Number.isFinite(entry.firstTsMs)) {
      entry.firstTsMs = tsMs;
    }
    entry.samples.push(sample);

    const cutoff = tsMs - MAX_WINDOW_MS;
    while (entry.samples.length && entry.samples[0].tsMs < cutoff) {
      entry.samples.shift();
    }

    state.set(poolId, entry);

    metrics.depthScore = Math.log1p(quoteReserveUi);

    const computeIfReady = (windowMs) => {
      if (tsMs - entry.firstTsMs < windowMs) {
        return { netQuoteFlow: null, flowVol: null };
      }
      return computeWindowMetrics(entry.samples, tsMs, windowMs);
    };

    const metrics10 = computeIfReady(WINDOW_10S_MS);
    const metrics60 = computeIfReady(WINDOW_60S_MS);
    const metrics300 = computeIfReady(WINDOW_300S_MS);

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
