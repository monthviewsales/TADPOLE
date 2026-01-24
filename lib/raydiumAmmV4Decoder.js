let decoderPromise = null;

async function loadSolanaKit() {
  try {
    return require('@solana/kit');
  } catch (err) {
    const mod = await import('@solana/kit');
    return mod;
  }
}

async function getRaydiumAmmV4Decoder() {
  if (decoderPromise) return decoderPromise;

  decoderPromise = (async () => {
    const kit = await loadSolanaKit();
    const {
      getStructDecoder,
      getU64Decoder,
      getU128Decoder,
      getArrayDecoder,
      getAddressDecoder,
    } = kit;

    const u64 = getU64Decoder();
    const u128 = getU128Decoder();
    const address = getAddressDecoder();
    const u64Array = (size) => getArrayDecoder(u64, { size });

    const feesDecoder = getStructDecoder([
      ['minSeparateNumerator', u64],
      ['minSeparateDenominator', u64],
      ['tradeFeeNumerator', u64],
      ['tradeFeeDenominator', u64],
      ['pnlNumerator', u64],
      ['pnlDenominator', u64],
      ['swapFeeNumerator', u64],
      ['swapFeeDenominator', u64],
    ]);

    const outPutDataDecoder = getStructDecoder([
      ['needTakePnlCoin', u64],
      ['needTakePnlPc', u64],
      ['totalPnlPc', u64],
      ['totalPnlCoin', u64],
      ['poolOpenTime', u64],
      ['punishPcAmount', u64],
      ['punishCoinAmount', u64],
      ['orderbookToInitTime', u64],
      ['swapCoinInAmount', u128],
      ['swapPcOutAmount', u128],
      ['swapTakePcFee', u64],
      ['swapPcInAmount', u128],
      ['swapCoinOutAmount', u128],
      ['swapTakeCoinFee', u64],
    ]);

    return getStructDecoder([
      ['status', u64],
      ['nonce', u64],
      ['orderNum', u64],
      ['depth', u64],
      ['coinDecimals', u64],
      ['pcDecimals', u64],
      ['state', u64],
      ['resetFlag', u64],
      ['minSize', u64],
      ['volMaxCutRatio', u64],
      ['amountWave', u64],
      ['coinLotSize', u64],
      ['pcLotSize', u64],
      ['minPriceMultiplier', u64],
      ['maxPriceMultiplier', u64],
      ['sysDecimalValue', u64],
      ['fees', feesDecoder],
      ['outPut', outPutDataDecoder],
      ['tokenCoin', address],
      ['tokenPc', address],
      ['coinMint', address],
      ['pcMint', address],
      ['lpMint', address],
      ['openOrders', address],
      ['market', address],
      ['serumDex', address],
      ['targetOrders', address],
      ['withdrawQueue', address],
      ['tokenTempLp', address],
      ['ammOwner', address],
      ['lpAmount', u64],
      ['clientOrderId', u64],
      ['padding', u64Array(2)],
    ]);
  })();

  return decoderPromise;
}

async function decodeRaydiumAmmV4Account(dataBuffer) {
  const decoder = await getRaydiumAmmV4Decoder();
  const expectedSize = decoder.fixedSize;

  if (!dataBuffer || dataBuffer.length < expectedSize) {
    throw new Error(
      `Raydium AMM v4 account data too small (${dataBuffer ? dataBuffer.length : 0} < ${expectedSize}).`
    );
  }

  const view =
    dataBuffer.length === expectedSize
      ? dataBuffer
      : dataBuffer.subarray(0, expectedSize);

  return decoder.decode(view);
}

module.exports = {
  decodeRaydiumAmmV4Account,
  getRaydiumAmmV4Decoder,
};
