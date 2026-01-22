const {
  fetchVaultBalanceSnapshot,
  subscribeVaultBalances,
} = require('../lib/vaultStreamAdapter');

function makeTokenAccountBuffer(amount) {
  const buffer = Buffer.alloc(165);
  buffer.writeBigUInt64LE(BigInt(amount), 64);
  return buffer;
}

describe('vaultStreamAdapter', () => {
  test('fetchVaultBalanceSnapshot parses jsonParsed with fallback decimals', async () => {
    const rpc = {
      getAccountInfo: jest.fn(() => ({
        send: async () => ({
          value: {
            data: {
              parsed: {
                info: {
                  tokenAmount: {
                    amount: '1000',
                    uiAmountString: '0.001',
                  },
                },
              },
            },
          },
        }),
      })),
    };

    const result = await fetchVaultBalanceSnapshot({
      rpc,
      addressFn: (value) => value,
      vault: 'vault',
      commitment: 'confirmed',
      encodingMode: 'parsed',
      decimals: 6,
    });

    expect(result.amountRaw).toBe(1000n);
    expect(result.decimals).toBe(6);
    expect(result.ui).toBe(0.001);
    expect(result.encoding).toBe('parsed');
  });

  test('fetchVaultBalanceSnapshot resolves decimals from mint in parsed mode', async () => {
    const mintBuffer = Buffer.alloc(82);
    mintBuffer.writeUInt8(9, 44);
    const mintBase64 = mintBuffer.toString('base64');

    const rpc = {
      getAccountInfo: jest.fn((address) => {
        if (address === 'vault') {
          return {
            send: async () => ({
              value: {
                data: {
                  parsed: {
                    info: {
                      tokenAmount: {
                        amount: '500',
                      },
                    },
                  },
                },
              },
            }),
          };
        }
        if (address === 'mint') {
          return {
            send: async () => ({
              value: {
                data: [mintBase64, 'base64'],
              },
            }),
          };
        }
        return { send: async () => ({ value: null }) };
      }),
    };

    const result = await fetchVaultBalanceSnapshot({
      rpc,
      addressFn: (value) => value,
      vault: 'vault',
      commitment: 'confirmed',
      encodingMode: 'parsed',
      decimals: null,
      mint: 'mint',
    });

    expect(result.decimals).toBe(9);
    expect(result.amountRaw).toBe(500n);
    expect(result.encoding).toBe('parsed');
  });

  test('fetchVaultBalanceSnapshot parses raw base64 token accounts', async () => {
    const buffer = makeTokenAccountBuffer(5000n);
    const base64 = buffer.toString('base64');

    const rpc = {
      getAccountInfo: jest.fn(() => ({
        send: async () => ({
          value: {
            data: [base64, 'base64'],
          },
        }),
      })),
    };

    const result = await fetchVaultBalanceSnapshot({
      rpc,
      addressFn: (value) => value,
      vault: 'vault',
      commitment: 'confirmed',
      encodingMode: 'raw',
      decimals: 6,
      mint: 'mint',
    });

    expect(result.amountRaw).toBe(5000n);
    expect(result.decimals).toBe(6);
    expect(result.ui).toBe(0.005);
    expect(result.encoding).toBe('raw');
  });

  test('subscribeVaultBalances yields parsed updates with fallback decimals', async () => {
    const rpcSubscriptions = {
      accountNotifications: jest.fn(() => ({
        subscribe: () =>
          (async function* generator() {
            yield {
              value: {
                data: {
                  parsed: {
                    info: {
                      tokenAmount: {
                        amount: '1000',
                        uiAmountString: '0.001',
                      },
                    },
                  },
                },
              },
              context: { slot: 5 },
            };
          })(),
      })),
    };

    const iterator = await subscribeVaultBalances({
      rpcSubscriptions,
      addressFn: (value) => value,
      vault: 'vault',
      commitment: 'confirmed',
      encodingMode: 'parsed',
      decimals: 6,
      rpc: { getAccountInfo: jest.fn() },
    });

    const updates = [];
    for await (const update of iterator) {
      updates.push(update);
      if (updates.length === 1) break;
    }

    expect(updates).toHaveLength(1);
    expect(updates[0].amountRaw).toBe(1000n);
    expect(updates[0].decimals).toBe(6);
    expect(updates[0].slot).toBe(5n);
    expect(updates[0].encoding).toBe('parsed');
  });

  test('subscribeVaultBalances yields raw updates', async () => {
    const buffer = makeTokenAccountBuffer(2000n);
    const base64 = buffer.toString('base64');

    const rpcSubscriptions = {
      accountNotifications: jest.fn(() => ({
        subscribe: () =>
          (async function* generator() {
            yield {
              value: {
                data: [base64, 'base64'],
              },
              context: { slot: 7 },
            };
          })(),
      })),
    };

    const iterator = await subscribeVaultBalances({
      rpcSubscriptions,
      addressFn: (value) => value,
      vault: 'vault',
      commitment: 'confirmed',
      encodingMode: 'raw',
      decimals: 6,
      mint: 'mint',
      rpc: { getAccountInfo: jest.fn() },
    });

    const updates = [];
    for await (const update of iterator) {
      updates.push(update);
      if (updates.length === 1) break;
    }

    expect(updates).toHaveLength(1);
    expect(updates[0].amountRaw).toBe(2000n);
    expect(updates[0].decimals).toBe(6);
    expect(updates[0].ui).toBe(0.002);
    expect(updates[0].slot).toBe(7n);
    expect(updates[0].encoding).toBe('raw');
  });
});
