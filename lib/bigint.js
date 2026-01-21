function pow10BigInt(decimals) {
  let result = 1n;
  for (let i = 0; i < decimals; i += 1) {
    result *= 10n;
  }
  return result;
}

function toBigInt(value) {
  if (typeof value === 'bigint') return value;
  if (typeof value === 'number' && Number.isFinite(value)) return BigInt(value);
  if (value && typeof value === 'object' && typeof value.toString === 'function') {
    return BigInt(value.toString());
  }
  throw new Error('Unable to convert value to bigint.');
}

function getDecodedField(decoded, field) {
  if (!decoded || !field) return undefined;
  if (Array.isArray(field)) {
    for (const name of field) {
      if (Object.prototype.hasOwnProperty.call(decoded, name)) {
        return decoded[name];
      }
    }
    return undefined;
  }
  return decoded[field];
}

module.exports = {
  pow10BigInt,
  toBigInt,
  getDecodedField,
};
