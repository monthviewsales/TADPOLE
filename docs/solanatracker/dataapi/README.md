# SolanaTracker Data API SDK (Fundamentals)

Source: https://www.npmjs.com/package/@solana-tracker/data-api

This page captures the core usage patterns from the SDK README so we can work offline.

## Install

```bash
npm install @solana-tracker/data-api
```

## Client setup

```js
import { Client } from '@solana-tracker/data-api';

const client = new Client({
  apiKey: 'YOUR_API_KEY',
});
```

## Common REST calls (examples)

```js
// Token info
const tokenInfo = await client.getTokenInfo(
  '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R'
);

// Token price (optionally include price changes)
const tokenPrice = await client.getPrice('tokenAddress', true);

// Multiple prices
const multiplePrices = await client.getMultiplePrices([
  'So11111111111111111111111111111111111111112',
  '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
]);
```

## Error handling

```js
import {
  Client,
  DataApiError,
  RateLimitError,
  ValidationError,
} from '@solana-tracker/data-api';

try {
  await client.getTokenInfo('invalid-address');
} catch (error) {
  if (error instanceof RateLimitError) {
    console.error('Retry after seconds:', error.retryAfter);
  } else if (error instanceof ValidationError) {
    console.error('Validation error:', error.message);
  } else if (error instanceof DataApiError) {
    console.error('API error:', error.message, 'Status:', error.status);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Notes
- This project does not use WebSocket/Datastream features; stick to REST-style client calls.
- The SDK supports a large set of endpoints (prices, wallets, trades, charts, PnL, search).
