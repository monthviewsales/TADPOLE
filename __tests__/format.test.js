const {
  abbreviate,
  formatNumber,
  formatPrice,
  formatDelta,
  normalizeSlot,
  renderLiveLine,
  formatRatio,
} = require('../lib/format');

describe('format helpers', () => {
  test('abbreviate returns full value when short', () => {
    expect(abbreviate('abcd')).toBe('abcd');
  });

  test('abbreviate shortens long values', () => {
    const value = 'So11111111111111111111111111111111111111112';
    expect(abbreviate(value)).toBe('So11...1112');
  });

  test('formatNumber handles null and large values', () => {
    expect(formatNumber(null)).toBe('0');
    expect(formatNumber(64105)).toBe('64,105');
  });

  test('formatPrice adapts precision', () => {
    expect(formatPrice(0)).toBe('0');
    expect(formatPrice(1.234567)).toBe('1.2346');
    expect(formatPrice(0.001)).toBe('0.001');
    expect(formatPrice(0.000021168462)).toBe('0.000021168462');
  });

  test('formatDelta handles missing previous', () => {
    expect(formatDelta(null, 1)).toEqual({ diff: 'n/a', pct: 'n/a' });
    expect(formatDelta(0, 2)).toEqual({ diff: '+2', pct: 'n/a' });
  });

  test('formatRatio handles zero sells', () => {
    expect(formatRatio(0, 0)).toBe('0');
    expect(formatRatio(1, 0)).toBe('inf');
    expect(formatRatio(2, 1)).toBe('2.00');
  });

  test('normalizeSlot converts to bigint', () => {
    expect(normalizeSlot('123')).toBe(123n);
    expect(normalizeSlot(456)).toBe(456n);
    expect(normalizeSlot('not-a-number')).toBeNull();
  });

  test('renderLiveLine formats output', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2026-01-21T00:00:00.000Z'));

    const line = renderLiveLine({
      price: 0.000021168462,
      prevPrice: 0.000021168,
      quoteMint: 'So11111111111111111111111111111111111111112',
      tokenMint: '8TuHxxxxxxxxxxxxxxxxxxxxxxxxxxxxpump',
      slot: 123n,
    });

    expect(line).toContain('[2026-01-21T00:00:00.000Z] slot 123 | price per');
    expect(line).toContain('8TuH...pump');
    expect(line).toContain('So11...1112');
    expect(line).toContain('Δ +0.000000000462');

    jest.useRealTimers();
  });
});
