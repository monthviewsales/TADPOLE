const { pow10BigInt, toBigInt, getDecodedField } = require('../lib/bigint');

describe('bigint helpers', () => {
  test('pow10BigInt computes powers of ten', () => {
    expect(pow10BigInt(0)).toBe(1n);
    expect(pow10BigInt(3)).toBe(1000n);
  });

  test('toBigInt converts values', () => {
    expect(toBigInt(42)).toBe(42n);
    expect(toBigInt(7n)).toBe(7n);
    expect(toBigInt({ toString: () => '99' })).toBe(99n);
  });

  test('toBigInt throws on invalid input', () => {
    expect(() => toBigInt(null)).toThrow('Unable to convert value to bigint.');
  });

  test('getDecodedField handles arrays and missing fields', () => {
    const decoded = { a: 1, b: 2 };
    expect(getDecodedField(decoded, 'a')).toBe(1);
    expect(getDecodedField(decoded, ['x', 'b'])).toBe(2);
    expect(getDecodedField(decoded, ['x', 'y'])).toBeUndefined();
  });
});
