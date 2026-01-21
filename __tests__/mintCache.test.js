const { resolveMintDecimals } = require('../lib/mintCache');

function createRpcWithMint(decimals, mintId = 'mint') {
  const buffer = Buffer.alloc(82);
  buffer.writeUInt8(decimals, 44);
  const base64 = buffer.toString('base64');

  const getAccountInfo = jest.fn((address) => {
    if (address !== mintId) {
      return { send: async () => ({ value: null }) };
    }
    return {
      send: async () => ({
        value: {
          data: [base64, 'base64'],
        },
      }),
    };
  });

  return { rpc: { getAccountInfo }, getAccountInfo };
}

describe('mintCache', () => {
  test('returns fallback decimals without RPC', async () => {
    const { rpc, getAccountInfo } = createRpcWithMint(6, 'mint-fallback');
    const decimals = await resolveMintDecimals({
      rpc,
      addressFn: (value) => value,
      mint: 'mint-fallback',
      fallbackDecimals: 7,
    });

    expect(decimals).toBe(7);
    expect(getAccountInfo).not.toHaveBeenCalled();
  });

  test('fetches and caches decimals from mint', async () => {
    const { rpc, getAccountInfo } = createRpcWithMint(5, 'mint-fetch');
    const addressFn = (value) => value;

    const first = await resolveMintDecimals({
      rpc,
      addressFn,
      mint: 'mint-fetch',
    });
    const second = await resolveMintDecimals({
      rpc,
      addressFn,
      mint: 'mint-fetch',
    });

    expect(first).toBe(5);
    expect(second).toBe(5);
    expect(getAccountInfo).toHaveBeenCalledTimes(1);
  });

  test('throws when mint is missing and no fallback provided', async () => {
    await expect(
      resolveMintDecimals({
        rpc: { getAccountInfo: jest.fn() },
        addressFn: (value) => value,
        mint: '',
      })
    ).rejects.toThrow('Missing mint address');
  });
});
