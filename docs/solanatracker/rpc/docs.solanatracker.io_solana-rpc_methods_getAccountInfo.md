---
url: "https://docs.solanatracker.io/solana-rpc/methods/getAccountInfo"
title: "getAccountInfo"
---

[Solana RPC](https://docs.solanatracker.io/solana-rpc)/Methods

# [getAccountInfo RPC Method](https://docs.solanatracker.io/solana-rpc/methods/getAccountInfo\#getaccountinfo-rpc-method)

## [Description](https://docs.solanatracker.io/solana-rpc/methods/getAccountInfo\#description)

Returns all information associated with the account of provided Pubkey.

## [Parameters](https://docs.solanatracker.io/solana-rpc/methods/getAccountInfo\#parameters)

1. `address` (string) - The Pubkey of the account to query, encoded as a base-58 string. Required.
2. `object` (array) - The configuration object with the following fields:
   - `commitment` (string, optional) - The level of commitment required for the query. Options:
     - `finalized` \- The node will query the most recent block confirmed by the supermajority of the cluster as having reached maximum lockout, meaning the cluster has recognized this block as finalized.
     - `confirmed` \- The node will query the most recent block that has been voted on by the supermajority of the cluster.
     - `processed` \- The node will query its most recent block. Note that the block may not be complete.
   - `encoding` (string, optional) - The encoding format for account data. Options: `base58` (slow), `base64`, `base64+zstd`, or `jsonParsed`.
   - `dataSlice` (object, optional) - Limits the returned account data using `offset` (usize) and `length` (usize) fields; only available for `base58`, `base64`, or `base64+zstd` encodings.
   - `minContextSlot` (integer, optional) - The minimum slot at which the request can be evaluated.

## [Returns](https://docs.solanatracker.io/solana-rpc/methods/getAccountInfo\#returns)

- `result` \- `null` if the account doesn’t exist; otherwise, an RpcResponse JSON object with the following fields:
  - `context` \- Metadata about the current state of the Solana network at the time of processing:
    - `apiVersion` \- The version number.
    - `slot` \- The current slot in the Solana cluster when the request was processed.
  - `value` \- Information about the requested account:
    - `lamports` \- The number of lamports assigned to this account, as a u64 (64-bit unsigned integer).
    - `owner` \- The base-58 encoded Pubkey of the program this account is assigned to.
    - `data` \- The data associated with the account, either as encoded binary data or JSON format `{program: state}`, depending on the `encoding` parameter.
    - `executable` \- A boolean indicating if the account contains a program (and is strictly read-only).
    - `rentEpoch` \- The epoch at which this account will next owe rent, as a u64 (64-bit unsigned integer).
    - `space` \- The amount of storage space required to store the account data.

## [Code Examples](https://docs.solanatracker.io/solana-rpc/methods/getAccountInfo\#code-examples)

CURLNode.js (web3.js)Node.js (web3.js v2)PythonRubyRust

```
curl "https://rpc-mainnet.solanatracker.io/?api_key=YOUR_API_KEY_HERE" \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"jsonrpc": "2.0","id": 1,"method": "getAccountInfo","params": ["7cVfgArCheMR6Cs4t6vz5rfnqd56vZq4ndaBrY5xkxXy",{"encoding": "base58"}]}'
```

[Credits and Rate Limits\\
\\
Credits and Rate Limits for all Solana RPC plans.](https://docs.solanatracker.io/solana-rpc/credits) [getBalance\\
\\
Returns the balance of the account of provided Pubkey.](https://docs.solanatracker.io/solana-rpc/methods/getBalance)

### On this page

[getAccountInfo RPC Method](https://docs.solanatracker.io/solana-rpc/methods/getAccountInfo#getaccountinfo-rpc-method) [Description](https://docs.solanatracker.io/solana-rpc/methods/getAccountInfo#description) [Parameters](https://docs.solanatracker.io/solana-rpc/methods/getAccountInfo#parameters) [Returns](https://docs.solanatracker.io/solana-rpc/methods/getAccountInfo#returns) [Code Examples](https://docs.solanatracker.io/solana-rpc/methods/getAccountInfo#code-examples)