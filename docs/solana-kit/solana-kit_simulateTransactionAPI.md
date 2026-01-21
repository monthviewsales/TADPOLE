# SimulateTransactionApi

```
type SimulateTransactionApi = object;
```

## [Methods](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#methods)

### [simulateTransaction()](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature)

```
simulateTransaction(base58EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedData> & SimulateTransactionApiResponseWithInnerInstructions & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding?`: `"base64"`; }; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedData` \> & `SimulateTransactionApiResponseWithInnerInstructions` & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-1)

```
simulateTransaction(base58EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedData> & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-1)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding?`: `"base64"`; }; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-1)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedData` \> & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-1)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-2)

```
simulateTransaction(base58EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedZStdCompressedData> & SimulateTransactionApiResponseWithInnerInstructions & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-2)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding`: `"base64+zstd"`; }; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-2)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedZStdCompressedData` \> & `SimulateTransactionApiResponseWithInnerInstructions` & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-2)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-3)

```
simulateTransaction(base58EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedZStdCompressedData> & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-3)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding`: `"base64+zstd"`; }; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-3)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedZStdCompressedData` \> & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-3)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-4)

```
simulateTransaction(base58EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithJsonData> & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-4)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding`: `"jsonParsed"`; }; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-4)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithJsonData` \> & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-4)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-5)

```
simulateTransaction(base58EncodedWireTransaction, config?): SolanaRpcResponse<Readonly<{
  accounts: null;
}> & SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithInnerInstructions & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-5)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config?` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-5)

`SolanaRpcResponse` < [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{
`accounts`: `null`;
}\> & `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithInnerInstructions` & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-5)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-6)

```
simulateTransaction(base58EncodedWireTransaction, config?): SolanaRpcResponse<Readonly<{
  accounts: null;
}> & SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-6)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config?` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-6)

`SolanaRpcResponse` < [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{
`accounts`: `null`;
}\> & `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-6)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-7)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedData> & SimulateTransactionApiResponseWithInnerInstructions & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

Simulate sending a transaction, fetch a list of accounts in their post-simulation state,
obtain the list of inner instructions run, if any, and replace the transaction's blockhash
with the most recent one.

If the listed accounts have data, it will be returned in the response as a tuple whose first
element is a base64-encoded string.

The replacement blockhash and the blockheight until which it is valid will be returned in the
response.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-7)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding?`: `"base64"`; }; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-7)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedData` \> & `SimulateTransactionApiResponseWithInnerInstructions` & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-8)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedData> & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

Simulate sending a transaction, fetch a list of accounts in their post-simulation state, and
replace the transaction's blockhash with the most recent one.

If the listed accounts have data, it will be returned in the response as a tuple whose first
element is a base64-encoded string.

The replacement blockhash and the blockheight until which it is valid will be returned in the
response.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-8)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding?`: `"base64"`; }; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-8)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedData` \> & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-1)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-9)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedZStdCompressedData> & SimulateTransactionApiResponseWithInnerInstructions & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

Simulate sending a transaction, fetch a list of accounts in their post-simulation state,
obtain the list of inner instructions run, if any, and replace the transaction's blockhash
with the most recent one.

If the listed accounts have data, it will first be compressed using
[ZStandard](https://facebook.github.io/zstd/) and the result will be returned in the response
as a tuple whose first element is a base64-encoded string.

The replacement blockhash and the blockheight until which it is valid will be returned in the
response.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-9)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding`: `"base64+zstd"`; }; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-9)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedZStdCompressedData` \> & `SimulateTransactionApiResponseWithInnerInstructions` & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-2)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-10)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedZStdCompressedData> & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

Simulate sending a transaction, fetch a list of accounts in their post-simulation state, and
replace the transaction's blockhash with the most recent one.

If the listed accounts have data, it will first be compressed using
[ZStandard](https://facebook.github.io/zstd/) and the result will be returned in the response
as a tuple whose first element is a base64-encoded string.

The replacement blockhash and the blockheight until which it is valid will be returned in the
response.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-10)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding`: `"base64+zstd"`; }; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-10)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedZStdCompressedData` \> & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-3)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-11)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithJsonData> & SimulateTransactionApiResponseWithInnerInstructions & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

Simulate sending a transaction, fetch a list of accounts in their post-simulation state,
obtain the list of inner instructions run, if any, and replace the transaction's blockhash
with the most recent one.

If the listed accounts have data, the server will attempt to process it using a parser
specific to each account's owning program. If successful, the parsed data will be returned in
the response as JSON. Otherwise, the raw account data will be returned in the response as a
tuple whose first element is a base64-encoded string.

The replacement blockhash and the blockheight until which it is valid will be returned in the
response.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-11)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding`: `"jsonParsed"`; }; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-11)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithJsonData` \> & `SimulateTransactionApiResponseWithInnerInstructions` & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-4)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-12)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithJsonData> & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

Simulate sending a transaction, fetch a list of accounts in their post-simulation state, and
replace the transaction's blockhash with the most recent one.

If the listed accounts have data, the server will attempt to process it using a parser
specific to each account's owning program. If successful, the parsed data will be returned in
the response as JSON. Otherwise, the raw account data will be returned in the response as a
tuple whose first element is a base64-encoded string.

The replacement blockhash and the blockheight until which it is valid will be returned in the
response.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-12)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding`: `"jsonParsed"`; }; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-12)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithJsonData` \> & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-5)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-13)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<Readonly<{
  accounts: null;
}> & SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithInnerInstructions & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

Simulate sending a transaction, obtain the list of inner instructions run, if any, and
replace the transaction's blockhash with the most recent one.

The replacement blockhash and the blockheight until which it is valid will be returned in the
response.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-13)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-13)

`SolanaRpcResponse` < [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{
`accounts`: `null`;
}\> & `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithInnerInstructions` & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-6)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-14)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<Readonly<{
  accounts: null;
}> & SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithReplacementBlockhash>;
```

Simulate sending a transaction, and replace the transaction's blockhash with the most recent
one.

The replacement blockhash and the blockheight until which it is valid will be returned in the
response.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-14)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash`: `true`; `sigVerify?`: `false`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-14)

`SolanaRpcResponse` < [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{
`accounts`: `null`;
}\> & `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithReplacementBlockhash` >

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-7)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-15)

```
simulateTransaction(base58EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedData> & SimulateTransactionApiResponseWithInnerInstructions>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-15)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config` | Readonly<{ accounts: { addresses: Address\[\]; encoding?: "base64" \| undefined; }; }> & (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<...>) & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-15)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedData` \> & `SimulateTransactionApiResponseWithInnerInstructions` >

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-7)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-16)

```
simulateTransaction(base58EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedData>>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-16)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding?`: `"base64"`; }; }\> & (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<{ replaceRecentBlockhash?: false \| undefined; sigVerify: true; }>) & Readonly<...> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-16)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedData` >>

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-8)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-17)

```
simulateTransaction(base58EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedZStdCompressedData> & SimulateTransactionApiResponseWithInnerInstructions>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-17)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config` | Readonly<{ accounts: { addresses: Address\[\]; encoding: "base64+zstd"; }; }> & (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<...>) & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-17)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedZStdCompressedData` \> & `SimulateTransactionApiResponseWithInnerInstructions` >

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-9)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-18)

```
simulateTransaction(base58EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedZStdCompressedData>>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-18)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding`: `"base64+zstd"`; }; }\> & (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<{ replaceRecentBlockhash?: false \| undefined; sigVerify: true; }>) & Readonly<...> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-18)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedZStdCompressedData` >>

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-10)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-19)

```
simulateTransaction(base58EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithJsonData> & SimulateTransactionApiResponseWithInnerInstructions>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-19)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config` | Readonly<{ accounts: { addresses: Address\[\]; encoding: "jsonParsed"; }; }> & (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<...>) & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-19)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithJsonData` \> & `SimulateTransactionApiResponseWithInnerInstructions` >

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-11)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-20)

```
simulateTransaction(base58EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithJsonData>>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-20)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `accounts`: { `addresses`: `Address`\[\]; `encoding`: `"jsonParsed"`; }; }\> & (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<{ replaceRecentBlockhash?: false \| undefined; sigVerify: true; }>) & Readonly<...> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-20)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithJsonData` >>

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-12)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-21)

```
simulateTransaction(base58EncodedWireTransaction, config?): SolanaRpcResponse<Readonly<{
  accounts: null;
}> & SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithInnerInstructions>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-21)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config?` | (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<{ replaceRecentBlockhash?: false \| undefined; sigVerify: true; }>) & Readonly<...> & Readonly<...> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-21)

`SolanaRpcResponse` < [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{
`accounts`: `null`;
}\> & `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithInnerInstructions` >

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-13)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-22)

```
simulateTransaction(base58EncodedWireTransaction, config?): SolanaRpcResponse<Readonly<{
  accounts: null;
}> & SimulateTransactionApiResponseBase>;
```

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-22)

| Parameter | Type |
| --- | --- |
| `base58EncodedWireTransaction` | `Base58EncodedBytes` |
| `config?` | (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<{ replaceRecentBlockhash?: false \| undefined; sigVerify: true; }>) & Readonly<...> |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-22)

`SolanaRpcResponse` < [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{
`accounts`: `null`;
}\> & `SimulateTransactionApiResponseBase` >

##### [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#deprecated-14)

Set `encoding` to `'base64'` when calling this method

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-23)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedData> & SimulateTransactionApiResponseWithInnerInstructions>;
```

Simulate sending a transaction, fetch a list of accounts in their post-simulation state, and
obtain the list of inner instructions run, if any.

If the listed accounts have data, it will be returned in the response as a tuple whose first
element is a base64-encoded string.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-23)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | Readonly<{ accounts: { addresses: Address\[\]; encoding?: "base64" \| undefined; }; }> & (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<...>) & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-23)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedData` \> & `SimulateTransactionApiResponseWithInnerInstructions` >

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-8)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-24)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedData>>;
```

Simulate sending a transaction, fetch a list of accounts in their post-simulation state.

If the listed accounts have data, it will be returned in the response as a tuple whose first
element is a base64-encoded string.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-24)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | Readonly<{ accounts: { addresses: Address\[\]; encoding?: "base64" \| undefined; }; }> & (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<...>) & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-24)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedData` >>

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-9)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-25)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedZStdCompressedData> & SimulateTransactionApiResponseWithInnerInstructions>;
```

Simulate sending a transaction, fetch a list of accounts in their post-simulation state, and
obtain the list of inner instructions run, if any.

If the listed accounts have data, it will first be compressed using
[ZStandard](https://facebook.github.io/zstd/) and the result will be returned in the response
as a tuple whose first element is a base64-encoded string.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-25)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | Readonly<{ accounts: { addresses: Address\[\]; encoding: "base64+zstd"; }; }> & (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<...>) & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-25)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedZStdCompressedData` \> & `SimulateTransactionApiResponseWithInnerInstructions` >

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-10)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-26)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithBase64EncodedZStdCompressedData>>;
```

Simulate sending a transaction, fetch a list of accounts in their post-simulation state.

If the listed accounts have data, it will first be compressed using
[ZStandard](https://facebook.github.io/zstd/) and the result will be returned in the response
as a tuple whose first element is a base64-encoded string.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-26)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | Readonly<{ accounts: { addresses: Address\[\]; encoding: "base64+zstd"; }; }> & (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<...>) & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-26)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithBase64EncodedZStdCompressedData` >>

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-11)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-27)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithJsonData> & SimulateTransactionApiResponseWithInnerInstructions>;
```

Simulate sending a transaction, fetch a list of accounts in their post-simulation state, and
obtain the list of inner instructions run, if any.

If the listed accounts have data, the server will attempt to process it using a parser
specific to each account's owning program. If successful, the parsed data will be returned in
the response as JSON. Otherwise, the raw account data will be returned in the response as a
tuple whose first element is a base64-encoded string.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-27)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | Readonly<{ accounts: { addresses: Address\[\]; encoding: "jsonParsed"; }; }> & (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<...>) & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-27)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithJsonData` \> & `SimulateTransactionApiResponseWithInnerInstructions` >

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-12)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-28)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithAccounts<AccountInfoBase & AccountInfoWithJsonData>>;
```

Simulate sending a transaction, fetch a list of accounts in their post-simulation state.

If the listed accounts have data, the server will attempt to process it using a parser
specific to each account's owning program. If successful, the parsed data will be returned in
the response as JSON. Otherwise, the raw account data will be returned in the response as a
tuple whose first element is a base64-encoded string.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-28)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | Readonly<{ accounts: { addresses: Address\[\]; encoding: "jsonParsed"; }; }> & (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<...>) & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-28)

`SolanaRpcResponse` < `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithAccounts` < `AccountInfoBase` & `AccountInfoWithJsonData` >>

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-13)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-29)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<Readonly<{
  accounts: null;
}> & SimulateTransactionApiResponseBase & SimulateTransactionApiResponseWithInnerInstructions>;
```

Simulate sending a transaction, and obtain the list of inner instructions run, if any.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-29)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | (Readonly<{ replaceRecentBlockhash?: boolean \| undefined; sigVerify?: false \| undefined; }> \| Readonly<{ replaceRecentBlockhash?: false \| undefined; sigVerify: true; }>) & Readonly<...> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `innerInstructions`: `true`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-29)

`SolanaRpcResponse` < [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{
`accounts`: `null`;
}\> & `SimulateTransactionApiResponseBase` & `SimulateTransactionApiResponseWithInnerInstructions` >

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-14)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#call-signature-30)

```
simulateTransaction(base64EncodedWireTransaction, config): SolanaRpcResponse<Readonly<{
  accounts: null;
}> & SimulateTransactionApiResponseBase>;
```

Simulate sending a transaction.

##### [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#parameters-30)

| Parameter | Type | Description |
| --- | --- | --- |
| `base64EncodedWireTransaction` | `Base64EncodedWireTransaction` | A fully signed transaction in wire format, as a base-64 encoded string. Use getBase64EncodedWireTransaction to obtain this. |
| `config` | \| [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash?`: `boolean`; `sigVerify?`: `false`; }\> \| [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `replaceRecentBlockhash?`: `false`; `sigVerify`: `true`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `innerInstructions?`: `boolean`; `minContextSlot?`: `Slot`; }\> & `object` | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#returns-30)

`SolanaRpcResponse` < [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{
`accounts`: `null`;
}\> & `SimulateTransactionApiResponseBase` >

##### [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi\#see-15)

[https://solana.com/docs/rpc/http/simulatetransaction](https://solana.com/docs/rpc/http/simulatetransaction)

### On this page

[Methods](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#methods) [simulateTransaction()](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#simulatetransaction) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-1) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-1) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-1) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-1) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-2) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-2) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-2) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-2) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-3) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-3) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-3) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-3) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-4) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-4) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-4) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-4) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-5) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-5) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-5) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-5) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-6) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-6) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-6) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-6) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-7) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-7) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-7) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-8) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-8) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-8) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-1) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-9) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-9) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-9) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-2) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-10) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-10) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-10) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-3) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-11) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-11) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-11) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-4) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-12) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-12) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-12) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-5) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-13) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-13) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-13) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-6) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-14) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-14) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-14) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-7) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-15) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-15) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-15) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-7) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-16) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-16) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-16) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-8) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-17) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-17) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-17) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-9) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-18) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-18) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-18) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-10) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-19) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-19) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-19) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-11) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-20) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-20) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-20) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-12) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-21) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-21) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-21) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-13) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-22) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-22) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-22) [Deprecated](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#deprecated-14) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-23) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-23) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-23) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-8) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-24) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-24) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-24) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-9) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-25) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-25) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-25) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-10) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-26) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-26) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-26) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-11) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-27) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-27) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-27) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-12) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-28) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-28) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-28) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-13) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-29) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-29) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-29) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-14) [Call Signature](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#call-signature-30) [Parameters](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#parameters-30) [Returns](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#returns-30) [See](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi#see-15)