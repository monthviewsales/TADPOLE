const logger = require('./logger');

let clientsPromise = null;

function toWsUrl(url) {
  if (!url) return url;
  if (url.startsWith('ws://') || url.startsWith('wss://')) return url;
  if (url.startsWith('https://')) return url.replace('https://', 'wss://');
  if (url.startsWith('http://')) return url.replace('http://', 'ws://');
  return url;
}

async function loadSolanaKit() {
  try {
    return require('@solana/kit');
  } catch (err) {
    const mod = await import('@solana/kit');
    return mod;
  }
}

async function createRpcClients() {
  if (clientsPromise) return clientsPromise;

  clientsPromise = (async () => {
    const RPC_URL = process.env.RPC_URL;
    if (!RPC_URL) {
      throw new Error('Missing RPC_URL. Set it in .env or your shell environment.');
    }

    const kit = await loadSolanaKit();
    const {
      address,
      createDefaultRpcTransport,
      createSolanaRpcFromTransport,
      createDefaultRpcSubscriptionsTransport,
      createDefaultSolanaRpcSubscriptionsChannelCreator,
      createSolanaRpcSubscriptionsFromTransport,
    } = kit;

    const httpTransport = createDefaultRpcTransport({ url: RPC_URL });
    const loggedHttpTransport = async (...args) => {
      const payload = args[0] && args[0].payload;
      const method = payload && payload.method;
      logger.debug({ method }, 'rpc:http request');
      try {
        const result = await httpTransport(...args);
        logger.debug({ method }, 'rpc:http response');
        return result;
      } catch (error) {
        logger.error({ error, method }, 'rpc:http error');
        throw error;
      }
    };

    const rpc = createSolanaRpcFromTransport(loggedHttpTransport);

    const wsUrl = toWsUrl(RPC_URL);
    const wsTransport = createDefaultRpcSubscriptionsTransport({
      createChannel: createDefaultSolanaRpcSubscriptionsChannelCreator({
        url: wsUrl,
      }),
    });

    const loggedWsTransport = async (...args) => {
      const payload = args[0] && args[0].payload;
      const method = payload && payload.method;
      logger.debug({ method }, 'rpc:wss request');
      try {
        const result = await wsTransport(...args);
        logger.debug({ method }, 'rpc:wss response');
        return result;
      } catch (error) {
        logger.error({ error, method }, 'rpc:wss error');
        throw error;
      }
    };

    const rpcSubscriptions = createSolanaRpcSubscriptionsFromTransport(
      loggedWsTransport
    );

    return { rpc, rpcSubscriptions, address };
  })();

  return clientsPromise;
}

module.exports = {
  createRpcClients,
};
