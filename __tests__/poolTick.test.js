const { createPoolTickBase, makePoolTick } = require('../lib/poolTick');

const emptyMetrics = {
  netQuoteFlow_10s: null,
  netQuoteFlow_60s: null,
  netQuoteFlow_300s: null,
  flowVol_10s: null,
  flowVol_60s: null,
  depthScore: null,
};

describe('poolTick', () => {
  test('creates identity and builds a tick', () => {
    const identity = createPoolTickBase({
      market: 'raydium-cpmm',
      poolId: 'pool',
      baseMint: 'base',
      quoteMint: 'quote',
    });

    const tick = makePoolTick({
      identity,
      tsMs: 123,
      slot: undefined,
      priceQuotePerBase: 1.23,
      baseReserveUi: 10,
      quoteReserveUi: 12,
      reserveSource: 'vault',
      stalenessMs: 0,
      metrics: emptyMetrics,
    });

    expect(tick.market).toBe('raydium-cpmm');
    expect(tick.poolId).toBe('pool');
    expect(tick.baseMint).toBe('base');
    expect(tick.quoteMint).toBe('quote');
    expect(tick.slot).toBeNull();
    expect(tick.priceQuotePerBase).toBe(1.23);
    expect(tick.reserveSource).toBe('vault');
  });
});
