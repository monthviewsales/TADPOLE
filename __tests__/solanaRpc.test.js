jest.mock('../lib/logger', () => ({
  debug: jest.fn(),
  error: jest.fn(),
}));

jest.mock('@solana/kit', () => {
  const mockKit = {
    address: jest.fn((value) => ({ value, toString: () => value })),
    createDefaultRpcTransport: jest.fn(() => async () => ({ ok: true })),
    createSolanaRpcFromTransport: jest.fn((transport) => ({ transport })),
    createDefaultRpcSubscriptionsTransport: jest.fn(() => async () => ({ ok: true })),
    createDefaultSolanaRpcSubscriptionsChannelCreator: jest.fn(() => ({ channel: true })),
    createSolanaRpcSubscriptionsFromTransport: jest.fn((transport) => ({ transport })),
    getProgramDerivedAddress: jest.fn(async () => ['pda', 255]),
    getAddressEncoder: jest.fn(() => ({ encode: jest.fn(() => Buffer.from('')) })),
  };
  return mockKit;
});

describe('createRpcClients', () => {
  beforeEach(() => {
    jest.resetModules();
    delete process.env.RPC_URL;
  });

  test('throws when RPC_URL is missing', async () => {
    const { createRpcClients } = require('../lib/solanaRpc');
    await expect(createRpcClients()).rejects.toThrow('Missing RPC_URL');
  });

  test('creates rpc clients and converts ws url', async () => {
    process.env.RPC_URL = 'https://rpc.example.com';
    const kit = require('@solana/kit');
    const { createRpcClients } = require('../lib/solanaRpc');

    const clients = await createRpcClients();

    expect(clients.rpc).toBeDefined();
    expect(clients.rpcSubscriptions).toBeDefined();
    expect(clients.address).toBeDefined();
    expect(clients.getProgramDerivedAddress).toBeDefined();
    expect(clients.getAddressEncoder).toBeDefined();
    expect(kit.createDefaultSolanaRpcSubscriptionsChannelCreator).toHaveBeenCalledWith({
      url: 'wss://rpc.example.com',
    });
  });

  test('uses ws url when RPC_URL is http', async () => {
    process.env.RPC_URL = 'http://localhost:8899';
    const kit = require('@solana/kit');
    const { createRpcClients } = require('../lib/solanaRpc');

    await createRpcClients();

    expect(kit.createDefaultSolanaRpcSubscriptionsChannelCreator).toHaveBeenCalledWith({
      url: 'ws://localhost:8899',
    });
  });
});
