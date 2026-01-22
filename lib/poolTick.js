function createPoolTickBase({ market, poolId, baseMint, quoteMint }) {
  return {
    market: String(market || ''),
    poolId: String(poolId || ''),
    baseMint: String(baseMint || ''),
    quoteMint: String(quoteMint || ''),
  };
}

function makePoolTick({
  identity,
  tsMs,
  slot,
  priceQuotePerBase,
  baseReserveUi,
  quoteReserveUi,
  reserveSource,
  stalenessMs,
  metrics,
}) {
  return {
    tsMs,
    slot: slot === undefined ? null : slot,
    market: identity.market,
    poolId: identity.poolId,
    baseMint: identity.baseMint,
    quoteMint: identity.quoteMint,
    priceQuotePerBase,
    baseReserveUi: baseReserveUi === undefined ? null : baseReserveUi,
    quoteReserveUi: quoteReserveUi === undefined ? null : quoteReserveUi,
    reserveSource,
    stalenessMs,
    metrics,
  };
}

module.exports = {
  createPoolTickBase,
  makePoolTick,
};
