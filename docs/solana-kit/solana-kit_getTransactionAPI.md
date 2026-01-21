# GetTransactionApi

```
type GetTransactionApi = object;
```

## [Methods](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#methods)

### [getTransaction()](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#gettransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#call-signature)

```
getTransaction<TMaxSupportedTransactionVersion>(signature, config):
  | null
  | Readonly<{
  blockTime: UnixTimestamp | null;
  slot: Slot;
}> & TMaxSupportedTransactionVersion extends void ? Record<string, never> : object & object;
```

Returns details of the confirmed transaction identified by the given signature.

##### [Type Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#type-parameters)

| Type Parameter | Default type |
| --- | --- |
| `TMaxSupportedTransactionVersion` _extends_ `void` \| `TransactionVersion` | `void` |

##### [Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#parameters)

| Parameter | Type | Description |
| --- | --- | --- |
| `signature` | `Signature` | A 64 byte Ed25519 signature, encoded as a base-58 string, that uniquely identifies a transaction by virtue of being the first or only signature in its list of signatures. Materializes the transaction as structured TransactionJson which the server will attempt to further process using account parsers and parsers specific to the transaction instructions' owning program. Whenever an instruction parser is successful, instruction will consist of parsed data as JSON. Otherwise, the instruction will materialize as a list of accounts, a program address, and base64-encoded instruction data. |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `encoding`: `"base58"` \| `"base64"` \| `"json"` \| `"jsonParsed"`; `maxSupportedTransactionVersion?`: `TMaxSupportedTransactionVersion`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `encoding`: `"jsonParsed"`; }> | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#returns)

\| `null`
\| [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{
`blockTime`: `UnixTimestamp` \| `null`;
`slot`: `Slot`;
}\> & `TMaxSupportedTransactionVersion` _extends_ `void` ? [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) < `string`, `never` \> : `object` & `object`

##### [See](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#see)

[https://solana.com/docs/rpc/http/gettransaction](https://solana.com/docs/rpc/http/gettransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#call-signature-1)

```
getTransaction<TMaxSupportedTransactionVersion>(signature, config):
  | null
  | Readonly<{
  blockTime: UnixTimestamp | null;
  slot: Slot;
}> & TMaxSupportedTransactionVersion extends void ? Record<string, never> : object & object;
```

Returns details of the confirmed transaction identified by the given signature.

##### [Type Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#type-parameters-1)

| Type Parameter | Default type |
| --- | --- |
| `TMaxSupportedTransactionVersion` _extends_ `void` \| `TransactionVersion` | `void` |

##### [Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#parameters-1)

| Parameter | Type | Description |
| --- | --- | --- |
| `signature` | `Signature` | A 64 byte Ed25519 signature, encoded as a base-58 string, that uniquely identifies a transaction by virtue of being the first or only signature in its list of signatures. Materializes the transaction as a tuple whose first element is the bytes of the wire transaction as a base64-encoded string. |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `encoding`: `"base58"` \| `"base64"` \| `"json"` \| `"jsonParsed"`; `maxSupportedTransactionVersion?`: `TMaxSupportedTransactionVersion`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `encoding`: `"base64"`; }> | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#returns-1)

\| `null`
\| [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{
`blockTime`: `UnixTimestamp` \| `null`;
`slot`: `Slot`;
}\> & `TMaxSupportedTransactionVersion` _extends_ `void` ? [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) < `string`, `never` \> : `object` & `object`

##### [See](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#see-1)

[https://solana.com/docs/rpc/http/gettransaction](https://solana.com/docs/rpc/http/gettransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#call-signature-2)

```
getTransaction<TMaxSupportedTransactionVersion>(signature, config):
  | null
  | Readonly<{
  blockTime: UnixTimestamp | null;
  slot: Slot;
}> & TMaxSupportedTransactionVersion extends void ? Record<string, never> : object & object;
```

Returns details of the confirmed transaction identified by the given signature.

##### [Type Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#type-parameters-2)

| Type Parameter | Default type |
| --- | --- |
| `TMaxSupportedTransactionVersion` _extends_ `void` \| `TransactionVersion` | `void` |

##### [Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#parameters-2)

| Parameter | Type | Description |
| --- | --- | --- |
| `signature` | `Signature` | A 64 byte Ed25519 signature, encoded as a base-58 string, that uniquely identifies a transaction by virtue of being the first or only signature in its list of signatures. Materializes the transaction as a tuple whose first element is the bytes of the wire transaction as a base58-encoded string. |
| `config` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `encoding`: `"base58"` \| `"base64"` \| `"json"` \| `"jsonParsed"`; `maxSupportedTransactionVersion?`: `TMaxSupportedTransactionVersion`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `encoding`: `"base58"`; }> | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#returns-2)

\| `null`
\| [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{
`blockTime`: `UnixTimestamp` \| `null`;
`slot`: `Slot`;
}\> & `TMaxSupportedTransactionVersion` _extends_ `void` ? [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) < `string`, `never` \> : `object` & `object`

##### [See](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#see-2)

[https://solana.com/docs/rpc/http/gettransaction](https://solana.com/docs/rpc/http/gettransaction)

#### [Call Signature](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#call-signature-3)

```
getTransaction<TMaxSupportedTransactionVersion>(signature, config?):
  | null
  | Readonly<{
  blockTime: UnixTimestamp | null;
  slot: Slot;
}> & TMaxSupportedTransactionVersion extends void ? Record<string, never> : object & object;
```

Returns details of the confirmed transaction identified by the given signature.

##### [Type Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#type-parameters-3)

| Type Parameter | Default type |
| --- | --- |
| `TMaxSupportedTransactionVersion` _extends_ `void` \| `TransactionVersion` | `void` |

##### [Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#parameters-3)

| Parameter | Type | Description |
| --- | --- | --- |
| `signature` | `Signature` | A 64 byte Ed25519 signature, encoded as a base-58 string, that uniquely identifies a transaction by virtue of being the first or only signature in its list of signatures. Materializes the transaction as structured TransactionJson. |
| `config?` | [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `commitment?`: `Commitment`; `encoding`: `"base58"` \| `"base64"` \| `"json"` \| `"jsonParsed"`; `maxSupportedTransactionVersion?`: `TMaxSupportedTransactionVersion`; }\> & [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{ `encoding?`: `"json"`; }> | - |

##### [Returns](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#returns-3)

\| `null`
\| [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype) <{
`blockTime`: `UnixTimestamp` \| `null`;
`slot`: `Slot`;
}\> & `TMaxSupportedTransactionVersion` _extends_ `void` ? [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type) < `string`, `never` \> : `object` & `object`

##### [See](https://www.solanakit.com/api/type-aliases/GetTransactionApi\#see-3)

[https://solana.com/docs/rpc/http/gettransaction](https://solana.com/docs/rpc/http/gettransaction)

### On this page

[Methods](https://www.solanakit.com/api/type-aliases/GetTransactionApi#methods) [getTransaction()](https://www.solanakit.com/api/type-aliases/GetTransactionApi#gettransaction) [Call Signature](https://www.solanakit.com/api/type-aliases/GetTransactionApi#call-signature) [Type Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi#type-parameters) [Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi#parameters) [Returns](https://www.solanakit.com/api/type-aliases/GetTransactionApi#returns) [See](https://www.solanakit.com/api/type-aliases/GetTransactionApi#see) [Call Signature](https://www.solanakit.com/api/type-aliases/GetTransactionApi#call-signature-1) [Type Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi#type-parameters-1) [Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi#parameters-1) [Returns](https://www.solanakit.com/api/type-aliases/GetTransactionApi#returns-1) [See](https://www.solanakit.com/api/type-aliases/GetTransactionApi#see-1) [Call Signature](https://www.solanakit.com/api/type-aliases/GetTransactionApi#call-signature-2) [Type Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi#type-parameters-2) [Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi#parameters-2) [Returns](https://www.solanakit.com/api/type-aliases/GetTransactionApi#returns-2) [See](https://www.solanakit.com/api/type-aliases/GetTransactionApi#see-2) [Call Signature](https://www.solanakit.com/api/type-aliases/GetTransactionApi#call-signature-3) [Type Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi#type-parameters-3) [Parameters](https://www.solanakit.com/api/type-aliases/GetTransactionApi#parameters-3) [Returns](https://www.solanakit.com/api/type-aliases/GetTransactionApi#returns-3) [See](https://www.solanakit.com/api/type-aliases/GetTransactionApi#see-3)