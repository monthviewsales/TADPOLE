const { decodeTokenAccountAmount, decodeMintDecimals } = require('../lib/splLayouts');

describe('splLayouts', () => {
  test('decodeTokenAccountAmount reads the amount at offset 64', () => {
    const buffer = Buffer.alloc(165);
    buffer.writeBigUInt64LE(123456789n, 64);
    expect(decodeTokenAccountAmount(buffer)).toBe(123456789n);
  });

  test('decodeTokenAccountAmount throws on short buffers', () => {
    expect(() => decodeTokenAccountAmount(Buffer.alloc(10))).toThrow(
      'Token account data too short'
    );
  });

  test('decodeMintDecimals reads decimals at offset 44', () => {
    const buffer = Buffer.alloc(82);
    buffer.writeUInt8(9, 44);
    expect(decodeMintDecimals(buffer)).toBe(9);
  });

  test('decodeMintDecimals throws on short buffers', () => {
    expect(() => decodeMintDecimals(Buffer.alloc(10))).toThrow(
      'Mint data too short'
    );
  });
});
