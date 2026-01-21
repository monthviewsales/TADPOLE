const { createRollingMetrics } = require('../lib/rollingMetrics');

const emptyMetrics = {
  netQuoteFlow_10s: null,
  netQuoteFlow_60s: null,
  netQuoteFlow_300s: null,
  flowVol_10s: null,
  flowVol_60s: null,
  depthScore: null,
};

describe('rollingMetrics', () => {
  test('returns null metrics when quoteReserveUi is missing', () => {
    const metrics = createRollingMetrics().update({
      poolId: 'pool',
      tsMs: 0,
      quoteReserveUi: null,
      baseReserveUi: 1,
    });

    expect(metrics).toEqual(emptyMetrics);
  });

  test('computes 10s flow metrics with consecutive deltas', () => {
    const rolling = createRollingMetrics();

    rolling.update({ poolId: 'pool', tsMs: 0, quoteReserveUi: 10, baseReserveUi: 5 });
    rolling.update({
      poolId: 'pool',
      tsMs: 5000,
      quoteReserveUi: 15,
      baseReserveUi: 6,
    });
    const metrics = rolling.update({
      poolId: 'pool',
      tsMs: 10000,
      quoteReserveUi: 25,
      baseReserveUi: 7,
    });

    expect(metrics.netQuoteFlow_10s).toBe(15);
    expect(metrics.flowVol_10s).toBe(17);
    expect(metrics.netQuoteFlow_60s).toBeNull();
    expect(metrics.flowVol_60s).toBeNull();
    expect(metrics.depthScore).toBeCloseTo(Math.log1p(25));
  });

  test('uses quote-only flow volume when base reserve is null', () => {
    const rolling = createRollingMetrics();
    rolling.update({ poolId: 'pool', tsMs: 0, quoteReserveUi: 10, baseReserveUi: null });
    const metrics = rolling.update({
      poolId: 'pool',
      tsMs: 10000,
      quoteReserveUi: 20,
      baseReserveUi: null,
    });

    expect(metrics.netQuoteFlow_10s).toBe(10);
    expect(metrics.flowVol_10s).toBe(10);
  });
});
