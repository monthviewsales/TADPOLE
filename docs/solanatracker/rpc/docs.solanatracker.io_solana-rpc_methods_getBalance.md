---
url: "https://docs.solanatracker.io/solana-rpc/methods/getBalance"
title: "getBalance"
---

[Solana RPC](https://docs.solanatracker.io/solana-rpc)/Methods

# [getBalance RPC Method](https://docs.solanatracker.io/solana-rpc/methods/getBalance\#getbalance-rpc-method)

## [Description](https://docs.solanatracker.io/solana-rpc/methods/getBalance\#description)

Returns the balance of the account of provided Pubkey.

## [Parameters](https://docs.solanatracker.io/solana-rpc/methods/getBalance\#parameters)

1. `address` (string) - The Pubkey of the account to query, encoded as a base-58 string. Required.
2. `object` (array) - The configuration object with the following fields:
   - `commitment` (string, optional) - The level of commitment required for the query. Options:
     - `finalized` \- The node will query the most recent block confirmed by the supermajority of the cluster as having reached maximum lockout, meaning the cluster has recognized this block as finalized.
     - `confirmed` \- The node will query the most recent block that has been voted on by the supermajority of the cluster.
     - `processed` \- The node will query its most recent block. Note that the block may not be complete.
   - `minContextSlot` (integer, optional) - The minimum slot at which the request can be evaluated.

## [Returns](https://docs.solanatracker.io/solana-rpc/methods/getBalance\#returns)

- `result` \- `null` if the account doesn’t exist; otherwise, an RpcResponse JSON object with the following fields:
  - `context` \- Metadata about the current state of the Solana network at the time of processing:
    - `apiVersion` \- The version number.
    - `slot` \- The current slot in the Solana cluster when the request was processed.
  - `value` \- The balance of the account in lamports, as a u64 (64-bit unsigned integer).

## [Code Examples](https://docs.solanatracker.io/solana-rpc/methods/getBalance\#code-examples)

CURLNode.js (web3.js)Node.js (web3.js v2)PythonRubyRust

```
curl "https://rpc-mainnet.solanatracker.io/?api_key=YOUR_API_KEY_HERE" \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0", "id":1, "method":"getBalance", "params":["7cVfgArCheMR6Cs4t6vz5rfnqd56vZq4ndaBrY5xkxXy"]}'
```

[getAccountInfo\\
\\
Returns all information associated with the account of provided Pubkey.](https://docs.solanatracker.io/solana-rpc/methods/getAccountInfo) [getBlock\\
\\
Returns identity and transaction information about a confirmed block in the ledger.](https://docs.solanatracker.io/solana-rpc/methods/getBlock)

### On this page

[getBalance RPC Method](https://docs.solanatracker.io/solana-rpc/methods/getBalance#getbalance-rpc-method) [Description](https://docs.solanatracker.io/solana-rpc/methods/getBalance#description) [Parameters](https://docs.solanatracker.io/solana-rpc/methods/getBalance#parameters) [Returns](https://docs.solanatracker.io/solana-rpc/methods/getBalance#returns) [Code Examples](https://docs.solanatracker.io/solana-rpc/methods/getBalance#code-examples)