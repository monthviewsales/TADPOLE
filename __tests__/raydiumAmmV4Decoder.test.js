const {
  decodeRaydiumAmmV4Account,
} = require('../lib/raydiumAmmV4Decoder');

const { PublicKey } = require('@solana/web3.js');

function buildAmmInfoBuffer(overrides = {}) {
  const buffer = Buffer.alloc(752);
  let offset = 0;

  const writeU64 = (value) => {
    buffer.writeBigUInt64LE(BigInt(value), offset);
    offset += 8;
  };

  const writeU128 = (value) => {
    const v = BigInt(value);
    const low = v & ((1n << 64n) - 1n);
    const high = v >> 64n;
    buffer.writeBigUInt64LE(low, offset);
    buffer.writeBigUInt64LE(high, offset + 8);
    offset += 16;
  };

  const writePubkey = (value) => {
    const bytes = new PublicKey(value).toBuffer();
    bytes.copy(buffer, offset);
    offset += 32;
  };

  const base = {
    status: 1n,
    nonce: 2n,
    orderNum: 3n,
    depth: 4n,
    coinDecimals: 6n,
    pcDecimals: 9n,
    state: 7n,
    resetFlag: 0n,
    minSize: 10n,
    volMaxCutRatio: 11n,
    amountWave: 12n,
    coinLotSize: 13n,
    pcLotSize: 14n,
    minPriceMultiplier: 15n,
    maxPriceMultiplier: 16n,
    sysDecimalValue: 17n,
    fees: {
      minSeparateNumerator: 1n,
      minSeparateDenominator: 2n,
      tradeFeeNumerator: 3n,
      tradeFeeDenominator: 4n,
      pnlNumerator: 5n,
      pnlDenominator: 6n,
      swapFeeNumerator: 7n,
      swapFeeDenominator: 8n,
    },
    outPut: {
      needTakePnlCoin: 9n,
      needTakePnlPc: 10n,
      totalPnlPc: 11n,
      totalPnlCoin: 12n,
      poolOpenTime: 13n,
      punishPcAmount: 14n,
      punishCoinAmount: 15n,
      orderbookToInitTime: 16n,
      swapCoinInAmount: 17n,
      swapPcOutAmount: 18n,
      swapTakePcFee: 19n,
      swapPcInAmount: 20n,
      swapCoinOutAmount: 21n,
      swapTakeCoinFee: 22n,
    },
    tokenCoin: 'So11111111111111111111111111111111111111112',
    tokenPc: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    coinMint: 'So11111111111111111111111111111111111111112',
    pcMint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    lpMint: '9wFFmPiYQZ8b9B8L3ts1kG6gWZ7rEG7pdYJzJ7pCz1DJ',
    openOrders: '5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1',
    market: '9wFFmPiYQZ8b9B8L3ts1kG6gWZ7rEG7pdYJzJ7pCz1DJ',
    serumDex: 'srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX',
    targetOrders: '3ZzY6J1z9o1wDkh8g1qQbky6h8vH1E9X9rm89V5z8n7w',
    withdrawQueue: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    tokenTempLp: 'H8XWvVKz8L8Go9f52B3P7g5kYhL3n9pXWpcT16AEcN6B',
    ammOwner: '8hQTKsqWqXVoYV4o8peT1q1WBXH3XTBNEfFok8N8cV4Q',
    lpAmount: 123n,
    clientOrderId: 456n,
    padding: [0n, 0n],
  };

  const payload = { ...base, ...overrides };

  writeU64(payload.status);
  writeU64(payload.nonce);
  writeU64(payload.orderNum);
  writeU64(payload.depth);
  writeU64(payload.coinDecimals);
  writeU64(payload.pcDecimals);
  writeU64(payload.state);
  writeU64(payload.resetFlag);
  writeU64(payload.minSize);
  writeU64(payload.volMaxCutRatio);
  writeU64(payload.amountWave);
  writeU64(payload.coinLotSize);
  writeU64(payload.pcLotSize);
  writeU64(payload.minPriceMultiplier);
  writeU64(payload.maxPriceMultiplier);
  writeU64(payload.sysDecimalValue);

  writeU64(payload.fees.minSeparateNumerator);
  writeU64(payload.fees.minSeparateDenominator);
  writeU64(payload.fees.tradeFeeNumerator);
  writeU64(payload.fees.tradeFeeDenominator);
  writeU64(payload.fees.pnlNumerator);
  writeU64(payload.fees.pnlDenominator);
  writeU64(payload.fees.swapFeeNumerator);
  writeU64(payload.fees.swapFeeDenominator);

  writeU64(payload.outPut.needTakePnlCoin);
  writeU64(payload.outPut.needTakePnlPc);
  writeU64(payload.outPut.totalPnlPc);
  writeU64(payload.outPut.totalPnlCoin);
  writeU64(payload.outPut.poolOpenTime);
  writeU64(payload.outPut.punishPcAmount);
  writeU64(payload.outPut.punishCoinAmount);
  writeU64(payload.outPut.orderbookToInitTime);
  writeU128(payload.outPut.swapCoinInAmount);
  writeU128(payload.outPut.swapPcOutAmount);
  writeU64(payload.outPut.swapTakePcFee);
  writeU128(payload.outPut.swapPcInAmount);
  writeU128(payload.outPut.swapCoinOutAmount);
  writeU64(payload.outPut.swapTakeCoinFee);

  writePubkey(payload.tokenCoin);
  writePubkey(payload.tokenPc);
  writePubkey(payload.coinMint);
  writePubkey(payload.pcMint);
  writePubkey(payload.lpMint);
  writePubkey(payload.openOrders);
  writePubkey(payload.market);
  writePubkey(payload.serumDex);
  writePubkey(payload.targetOrders);
  writePubkey(payload.withdrawQueue);
  writePubkey(payload.tokenTempLp);
  writePubkey(payload.ammOwner);
  writeU64(payload.lpAmount);
  writeU64(payload.clientOrderId);
  writeU64(payload.padding[0]);
  writeU64(payload.padding[1]);

  return buffer;
}

describe('raydium amm v4 decoder', () => {
  test('decodes AmmInfo without discriminator', async () => {
    const buffer = buildAmmInfoBuffer();
    const decoded = await decodeRaydiumAmmV4Account(buffer);

    expect(decoded.status).toBe(1n);
    expect(decoded.coinDecimals).toBe(6n);
    expect(decoded.pcDecimals).toBe(9n);
    expect(decoded.tokenCoin).toBe('So11111111111111111111111111111111111111112');
    expect(decoded.tokenPc).toBe('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
    expect(decoded.fees.tradeFeeNumerator).toBe(3n);
    expect(decoded.outPut.swapPcOutAmount).toBe(18n);
    expect(decoded.lpAmount).toBe(123n);
    expect(decoded.padding).toEqual([0n, 0n]);
  });

  test('ignores trailing bytes', async () => {
    const buffer = buildAmmInfoBuffer();
    const extra = Buffer.alloc(12, 7);
    const decoded = await decodeRaydiumAmmV4Account(
      Buffer.concat([buffer, extra])
    );
    expect(decoded.clientOrderId).toBe(456n);
  });

  test('throws on short buffers', async () => {
    await expect(decodeRaydiumAmmV4Account(Buffer.alloc(12))).rejects.toThrow(
      'Raydium AMM v4 account data too small'
    );
  });
});
