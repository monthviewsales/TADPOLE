// SPL Token account layout base (Tokenkeg / Token-2022), extensions may add bytes.
const TOKEN_ACCOUNT_MIN_SIZE = 165;
const TOKEN_ACCOUNT_AMOUNT_OFFSET = 64; // u64 little-endian
// SPL Mint layout base (Tokenkeg / Token-2022), extensions may add bytes.
const MINT_MIN_SIZE = 82;
const MINT_DECIMALS_OFFSET = 44; // u8

function coerceBuffer(value) {
  if (Buffer.isBuffer(value)) return value;
  if (value instanceof Uint8Array) return Buffer.from(value);
  throw new Error('Expected account data buffer.');
}

function decodeTokenAccountAmount(input) {
  const buffer = coerceBuffer(input);
  if (buffer.length < TOKEN_ACCOUNT_MIN_SIZE) {
    throw new Error(
      `Token account data too short. Expected >= ${TOKEN_ACCOUNT_MIN_SIZE} bytes, got ${buffer.length}.`
    );
  }
  return buffer.readBigUInt64LE(TOKEN_ACCOUNT_AMOUNT_OFFSET);
}

function decodeMintDecimals(input) {
  const buffer = coerceBuffer(input);
  if (buffer.length < MINT_MIN_SIZE) {
    throw new Error(
      `Mint data too short. Expected >= ${MINT_MIN_SIZE} bytes, got ${buffer.length}.`
    );
  }
  return buffer.readUInt8(MINT_DECIMALS_OFFSET);
}

module.exports = {
  decodeTokenAccountAmount,
  decodeMintDecimals,
};
