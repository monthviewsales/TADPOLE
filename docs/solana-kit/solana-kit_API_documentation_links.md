# Solana Kit API Reference

Explore packages, functions, types, and more

Welcome to the Solana Kit API Reference! It covers a total of **39 packages** most of which are available via the main `@solana/kit` package.  If you have questions about @solana/kit you can use the links below for more context on the APIs.  Do not load all of these into context or you will run out.  Search for the specific link you need and go to its specific web page.

## [Need Help?](https://www.solanakit.com/api\#need-help)

- Check out our [Getting Started guide](https://www.solanakit.com/docs/getting-started).
- Learn about key concepts in our [Core Concept guides](https://www.solanakit.com/docs/concepts).

## [All Packages](https://www.solanakit.com/api\#all-packages)

### [`@solana/kit`](https://www.solanakit.com/api\#solanakit)

Packages (25)

[@solana/accounts](https://www.solanakit.com/api#solanaaccounts)

[@solana/addresses](https://www.solanakit.com/api#solanaaddresses)

[@solana/codecs-core](https://www.solanakit.com/api#solanacodecs-core)

[@solana/codecs-data-structures](https://www.solanakit.com/api#solanacodecs-data-structures)

[@solana/codecs-numbers](https://www.solanakit.com/api#solanacodecs-numbers)

[@solana/codecs-strings](https://www.solanakit.com/api#solanacodecs-strings)

[@solana/errors](https://www.solanakit.com/api#solanaerrors)

[@solana/functional](https://www.solanakit.com/api#solanafunctional)

[@solana/instruction-plans](https://www.solanakit.com/api#solanainstruction-plans)

[@solana/instructions](https://www.solanakit.com/api#solanainstructions)

[@solana/keys](https://www.solanakit.com/api#solanakeys)

[@solana/options](https://www.solanakit.com/api#solanaoptions)

[@solana/programs](https://www.solanakit.com/api#solanaprograms)

[@solana/rpc](https://www.solanakit.com/api#solanarpc)

[@solana/rpc-api](https://www.solanakit.com/api#solanarpc-api)

[@solana/rpc-parsed-types](https://www.solanakit.com/api#solanarpc-parsed-types)

[@solana/rpc-spec](https://www.solanakit.com/api#solanarpc-spec)

[@solana/rpc-spec-types](https://www.solanakit.com/api#solanarpc-spec-types)

[@solana/rpc-subscriptions](https://www.solanakit.com/api#solanarpc-subscriptions)

[@solana/rpc-subscriptions-api](https://www.solanakit.com/api#solanarpc-subscriptions-api)

[@solana/rpc-subscriptions-spec](https://www.solanakit.com/api#solanarpc-subscriptions-spec)

[@solana/rpc-types](https://www.solanakit.com/api#solanarpc-types)

[@solana/signers](https://www.solanakit.com/api#solanasigners)

[@solana/transaction-messages](https://www.solanakit.com/api#solanatransaction-messages)

[@solana/transactions](https://www.solanakit.com/api#solanatransactions)

Functions (6)

[airdropFactory](https://www.solanakit.com/api/functions/airdropFactory)

[decompileTransactionMessageFetchingLookupTables](https://www.solanakit.com/api/functions/decompileTransactionMessageFetchingLookupTables)

[fetchAddressesForLookupTables](https://www.solanakit.com/api/functions/fetchAddressesForLookupTables)

[sendAndConfirmDurableNonceTransactionFactory](https://www.solanakit.com/api/functions/sendAndConfirmDurableNonceTransactionFactory)

[sendAndConfirmTransactionFactory](https://www.solanakit.com/api/functions/sendAndConfirmTransactionFactory)

[sendTransactionWithoutConfirmingFactory](https://www.solanakit.com/api/functions/sendTransactionWithoutConfirmingFactory)

### [`@solana/accounts`](https://www.solanakit.com/api\#solanaaccounts)

Types (7)

[Account](https://www.solanakit.com/api/interfaces/Account)

[BaseAccount](https://www.solanakit.com/api/interfaces/BaseAccount)

[EncodedAccount](https://www.solanakit.com/api/interfaces/EncodedAccount)

[FetchAccountConfig](https://www.solanakit.com/api/interfaces/FetchAccountConfig)

[FetchAccountsConfig](https://www.solanakit.com/api/interfaces/FetchAccountsConfig)

[MaybeAccount](https://www.solanakit.com/api/type-aliases/MaybeAccount)

[MaybeEncodedAccount](https://www.solanakit.com/api/type-aliases/MaybeEncodedAccount)

Functions (12)

[assertAccountDecoded](https://www.solanakit.com/api/functions/assertAccountDecoded)

[assertAccountExists](https://www.solanakit.com/api/functions/assertAccountExists)

[assertAccountsDecoded](https://www.solanakit.com/api/functions/assertAccountsDecoded)

[assertAccountsExist](https://www.solanakit.com/api/functions/assertAccountsExist)

[decodeAccount](https://www.solanakit.com/api/functions/decodeAccount)

[fetchEncodedAccount](https://www.solanakit.com/api/functions/fetchEncodedAccount)

[fetchEncodedAccounts](https://www.solanakit.com/api/functions/fetchEncodedAccounts)

[fetchJsonParsedAccount](https://www.solanakit.com/api/functions/fetchJsonParsedAccount)

[fetchJsonParsedAccounts](https://www.solanakit.com/api/functions/fetchJsonParsedAccounts)

[parseBase58RpcAccount](https://www.solanakit.com/api/functions/parseBase58RpcAccount)

[parseBase64RpcAccount](https://www.solanakit.com/api/functions/parseBase64RpcAccount)

[parseJsonRpcAccount](https://www.solanakit.com/api/functions/parseJsonRpcAccount)

Variables (1)

[BASE\_ACCOUNT\_SIZE](https://www.solanakit.com/api/variables/BASE_ACCOUNT_SIZE)

### [`@solana/addresses`](https://www.solanakit.com/api\#solanaaddresses)

Types (4)

[Address](https://www.solanakit.com/api/type-aliases/Address)

[OffCurveAddress](https://www.solanakit.com/api/type-aliases/OffCurveAddress)

[ProgramDerivedAddress](https://www.solanakit.com/api/type-aliases/ProgramDerivedAddress)

[ProgramDerivedAddressBump](https://www.solanakit.com/api/type-aliases/ProgramDerivedAddressBump)

Functions (16)

[address](https://www.solanakit.com/api/functions/address)

[assertIsAddress](https://www.solanakit.com/api/functions/assertIsAddress)

[assertIsOffCurveAddress](https://www.solanakit.com/api/functions/assertIsOffCurveAddress)

[assertIsProgramDerivedAddress](https://www.solanakit.com/api/functions/assertIsProgramDerivedAddress)

[createAddressWithSeed](https://www.solanakit.com/api/functions/createAddressWithSeed)

[getAddressCodec](https://www.solanakit.com/api/functions/getAddressCodec)

[getAddressComparator](https://www.solanakit.com/api/functions/getAddressComparator)

[getAddressDecoder](https://www.solanakit.com/api/functions/getAddressDecoder)

[getAddressEncoder](https://www.solanakit.com/api/functions/getAddressEncoder)

[getAddressFromPublicKey](https://www.solanakit.com/api/functions/getAddressFromPublicKey)

[getProgramDerivedAddress](https://www.solanakit.com/api/functions/getProgramDerivedAddress)

[getPublicKeyFromAddress](https://www.solanakit.com/api/functions/getPublicKeyFromAddress)

[isAddress](https://www.solanakit.com/api/functions/isAddress)

[isOffCurveAddress](https://www.solanakit.com/api/functions/isOffCurveAddress)

[isProgramDerivedAddress](https://www.solanakit.com/api/functions/isProgramDerivedAddress)

[offCurveAddress](https://www.solanakit.com/api/functions/offCurveAddress)

### [`@solana/assertions`](https://www.solanakit.com/api\#solanaassertions)

Functions (6)

[assertDigestCapabilityIsAvailable](https://www.solanakit.com/api/functions/assertDigestCapabilityIsAvailable)

[assertKeyExporterIsAvailable](https://www.solanakit.com/api/functions/assertKeyExporterIsAvailable)

[assertKeyGenerationIsAvailable](https://www.solanakit.com/api/functions/assertKeyGenerationIsAvailable)

[assertPRNGIsAvailable](https://www.solanakit.com/api/functions/assertPRNGIsAvailable)

[assertSigningCapabilityIsAvailable](https://www.solanakit.com/api/functions/assertSigningCapabilityIsAvailable)

[assertVerificationCapabilityIsAvailable](https://www.solanakit.com/api/functions/assertVerificationCapabilityIsAvailable)

### [`@solana/codecs`](https://www.solanakit.com/api\#solanacodecs)

Packages (5)

[@solana/codecs-core](https://www.solanakit.com/api#solanacodecs-core)

[@solana/codecs-data-structures](https://www.solanakit.com/api#solanacodecs-data-structures)

[@solana/codecs-numbers](https://www.solanakit.com/api#solanacodecs-numbers)

[@solana/codecs-strings](https://www.solanakit.com/api#solanacodecs-strings)

[@solana/options](https://www.solanakit.com/api#solanaoptions)

### [`@solana/codecs-core`](https://www.solanakit.com/api\#solanacodecs-core)

Types (11)

[Codec](https://www.solanakit.com/api/type-aliases/Codec)

[Decoder](https://www.solanakit.com/api/type-aliases/Decoder)

[Encoder](https://www.solanakit.com/api/type-aliases/Encoder)

[FixedSizeCodec](https://www.solanakit.com/api/interfaces/FixedSizeCodec)

[FixedSizeDecoder](https://www.solanakit.com/api/interfaces/FixedSizeDecoder)

[FixedSizeEncoder](https://www.solanakit.com/api/interfaces/FixedSizeEncoder)

[Offset](https://www.solanakit.com/api/type-aliases/Offset)

[ReadonlyUint8Array](https://www.solanakit.com/api/interfaces/ReadonlyUint8Array)

[VariableSizeCodec](https://www.solanakit.com/api/interfaces/VariableSizeCodec)

[VariableSizeDecoder](https://www.solanakit.com/api/interfaces/VariableSizeDecoder)

[VariableSizeEncoder](https://www.solanakit.com/api/interfaces/VariableSizeEncoder)

Functions (43)

[addCodecSentinel](https://www.solanakit.com/api/functions/addCodecSentinel)

[addCodecSizePrefix](https://www.solanakit.com/api/functions/addCodecSizePrefix)

[addDecoderSentinel](https://www.solanakit.com/api/functions/addDecoderSentinel)

[addDecoderSizePrefix](https://www.solanakit.com/api/functions/addDecoderSizePrefix)

[addEncoderSentinel](https://www.solanakit.com/api/functions/addEncoderSentinel)

[addEncoderSizePrefix](https://www.solanakit.com/api/functions/addEncoderSizePrefix)

[assertByteArrayHasEnoughBytesForCodec](https://www.solanakit.com/api/functions/assertByteArrayHasEnoughBytesForCodec)

[assertByteArrayIsNotEmptyForCodec](https://www.solanakit.com/api/functions/assertByteArrayIsNotEmptyForCodec)

[assertByteArrayOffsetIsNotOutOfRange](https://www.solanakit.com/api/functions/assertByteArrayOffsetIsNotOutOfRange)

[assertIsFixedSize](https://www.solanakit.com/api/functions/assertIsFixedSize)

[assertIsVariableSize](https://www.solanakit.com/api/functions/assertIsVariableSize)

[combineCodec](https://www.solanakit.com/api/functions/combineCodec)

[containsBytes](https://www.solanakit.com/api/functions/containsBytes)

[createCodec](https://www.solanakit.com/api/functions/createCodec)

[createDecoder](https://www.solanakit.com/api/functions/createDecoder)

[createEncoder](https://www.solanakit.com/api/functions/createEncoder)

[fixBytes](https://www.solanakit.com/api/functions/fixBytes)

[fixCodecSize](https://www.solanakit.com/api/functions/fixCodecSize)

[fixDecoderSize](https://www.solanakit.com/api/functions/fixDecoderSize)

[fixEncoderSize](https://www.solanakit.com/api/functions/fixEncoderSize)

[getEncodedSize](https://www.solanakit.com/api/functions/getEncodedSize)

[isFixedSize](https://www.solanakit.com/api/functions/isFixedSize)

[isVariableSize](https://www.solanakit.com/api/functions/isVariableSize)

[mergeBytes](https://www.solanakit.com/api/functions/mergeBytes)

[offsetCodec](https://www.solanakit.com/api/functions/offsetCodec)

[offsetDecoder](https://www.solanakit.com/api/functions/offsetDecoder)

[offsetEncoder](https://www.solanakit.com/api/functions/offsetEncoder)

[padBytes](https://www.solanakit.com/api/functions/padBytes)

[padLeftCodec](https://www.solanakit.com/api/functions/padLeftCodec)

[padLeftDecoder](https://www.solanakit.com/api/functions/padLeftDecoder)

[padLeftEncoder](https://www.solanakit.com/api/functions/padLeftEncoder)

[padRightCodec](https://www.solanakit.com/api/functions/padRightCodec)

[padRightDecoder](https://www.solanakit.com/api/functions/padRightDecoder)

[padRightEncoder](https://www.solanakit.com/api/functions/padRightEncoder)

[resizeCodec](https://www.solanakit.com/api/functions/resizeCodec)

[resizeDecoder](https://www.solanakit.com/api/functions/resizeDecoder)

[resizeEncoder](https://www.solanakit.com/api/functions/resizeEncoder)

[reverseCodec](https://www.solanakit.com/api/functions/reverseCodec)

[reverseDecoder](https://www.solanakit.com/api/functions/reverseDecoder)

[reverseEncoder](https://www.solanakit.com/api/functions/reverseEncoder)

[transformCodec](https://www.solanakit.com/api/functions/transformCodec)

[transformDecoder](https://www.solanakit.com/api/functions/transformDecoder)

[transformEncoder](https://www.solanakit.com/api/functions/transformEncoder)

### [`@solana/codecs-data-structures`](https://www.solanakit.com/api\#solanacodecs-data-structures)

Types (13)

[ArrayCodecConfig](https://www.solanakit.com/api/type-aliases/ArrayCodecConfig)

[ArrayLikeCodecSize](https://www.solanakit.com/api/type-aliases/ArrayLikeCodecSize)

[BitArrayCodecConfig](https://www.solanakit.com/api/type-aliases/BitArrayCodecConfig)

[BooleanCodecConfig](https://www.solanakit.com/api/type-aliases/BooleanCodecConfig)

[DiscriminatedUnion](https://www.solanakit.com/api/type-aliases/DiscriminatedUnion)

[DiscriminatedUnionCodecConfig](https://www.solanakit.com/api/type-aliases/DiscriminatedUnionCodecConfig)

[EnumCodecConfig](https://www.solanakit.com/api/type-aliases/EnumCodecConfig)

[GetDiscriminatedUnionVariant](https://www.solanakit.com/api/type-aliases/GetDiscriminatedUnionVariant)

[GetDiscriminatedUnionVariantContent](https://www.solanakit.com/api/type-aliases/GetDiscriminatedUnionVariantContent)

[LiteralUnionCodecConfig](https://www.solanakit.com/api/type-aliases/LiteralUnionCodecConfig)

[MapCodecConfig](https://www.solanakit.com/api/type-aliases/MapCodecConfig)

[NullableCodecConfig](https://www.solanakit.com/api/type-aliases/NullableCodecConfig)

[SetCodecConfig](https://www.solanakit.com/api/type-aliases/SetCodecConfig)

Functions (52)

[assertValidNumberOfItemsForCodec](https://www.solanakit.com/api/functions/assertValidNumberOfItemsForCodec)

[getArrayCodec](https://www.solanakit.com/api/functions/getArrayCodec)

[getArrayDecoder](https://www.solanakit.com/api/functions/getArrayDecoder)

[getArrayEncoder](https://www.solanakit.com/api/functions/getArrayEncoder)

[getBitArrayCodec](https://www.solanakit.com/api/functions/getBitArrayCodec)

[getBitArrayDecoder](https://www.solanakit.com/api/functions/getBitArrayDecoder)

[getBitArrayEncoder](https://www.solanakit.com/api/functions/getBitArrayEncoder)

[getBooleanCodec](https://www.solanakit.com/api/functions/getBooleanCodec)

[getBooleanDecoder](https://www.solanakit.com/api/functions/getBooleanDecoder)

[getBooleanEncoder](https://www.solanakit.com/api/functions/getBooleanEncoder)

[getBytesCodec](https://www.solanakit.com/api/functions/getBytesCodec)

[getBytesDecoder](https://www.solanakit.com/api/functions/getBytesDecoder)

[getBytesEncoder](https://www.solanakit.com/api/functions/getBytesEncoder)

[getConstantCodec](https://www.solanakit.com/api/functions/getConstantCodec)

[getConstantDecoder](https://www.solanakit.com/api/functions/getConstantDecoder)

[getConstantEncoder](https://www.solanakit.com/api/functions/getConstantEncoder)

[getDiscriminatedUnionCodec](https://www.solanakit.com/api/functions/getDiscriminatedUnionCodec)

[getDiscriminatedUnionDecoder](https://www.solanakit.com/api/functions/getDiscriminatedUnionDecoder)

[getDiscriminatedUnionEncoder](https://www.solanakit.com/api/functions/getDiscriminatedUnionEncoder)

[getEnumCodec](https://www.solanakit.com/api/functions/getEnumCodec)

[getEnumDecoder](https://www.solanakit.com/api/functions/getEnumDecoder)

[getEnumEncoder](https://www.solanakit.com/api/functions/getEnumEncoder)

[getHiddenPrefixCodec](https://www.solanakit.com/api/functions/getHiddenPrefixCodec)

[getHiddenPrefixDecoder](https://www.solanakit.com/api/functions/getHiddenPrefixDecoder)

[getHiddenPrefixEncoder](https://www.solanakit.com/api/functions/getHiddenPrefixEncoder)

[getHiddenSuffixCodec](https://www.solanakit.com/api/functions/getHiddenSuffixCodec)

[getHiddenSuffixDecoder](https://www.solanakit.com/api/functions/getHiddenSuffixDecoder)

[getHiddenSuffixEncoder](https://www.solanakit.com/api/functions/getHiddenSuffixEncoder)

[getLiteralUnionCodec](https://www.solanakit.com/api/functions/getLiteralUnionCodec)

[getLiteralUnionDecoder](https://www.solanakit.com/api/functions/getLiteralUnionDecoder)

[getLiteralUnionEncoder](https://www.solanakit.com/api/functions/getLiteralUnionEncoder)

[getMapCodec](https://www.solanakit.com/api/functions/getMapCodec)

[getMapDecoder](https://www.solanakit.com/api/functions/getMapDecoder)

[getMapEncoder](https://www.solanakit.com/api/functions/getMapEncoder)

[getNullableCodec](https://www.solanakit.com/api/functions/getNullableCodec)

[getNullableDecoder](https://www.solanakit.com/api/functions/getNullableDecoder)

[getNullableEncoder](https://www.solanakit.com/api/functions/getNullableEncoder)

[getSetCodec](https://www.solanakit.com/api/functions/getSetCodec)

[getSetDecoder](https://www.solanakit.com/api/functions/getSetDecoder)

[getSetEncoder](https://www.solanakit.com/api/functions/getSetEncoder)

[getStructCodec](https://www.solanakit.com/api/functions/getStructCodec)

[getStructDecoder](https://www.solanakit.com/api/functions/getStructDecoder)

[getStructEncoder](https://www.solanakit.com/api/functions/getStructEncoder)

[getTupleCodec](https://www.solanakit.com/api/functions/getTupleCodec)

[getTupleDecoder](https://www.solanakit.com/api/functions/getTupleDecoder)

[getTupleEncoder](https://www.solanakit.com/api/functions/getTupleEncoder)

[getUnionCodec](https://www.solanakit.com/api/functions/getUnionCodec)

[getUnionDecoder](https://www.solanakit.com/api/functions/getUnionDecoder)

[getUnionEncoder](https://www.solanakit.com/api/functions/getUnionEncoder)

[getUnitCodec](https://www.solanakit.com/api/functions/getUnitCodec)

[getUnitDecoder](https://www.solanakit.com/api/functions/getUnitDecoder)

[getUnitEncoder](https://www.solanakit.com/api/functions/getUnitEncoder)

### [`@solana/codecs-numbers`](https://www.solanakit.com/api\#solanacodecs-numbers)

Enums (1)

[Endian](https://www.solanakit.com/api/enumerations/Endian)

Types (7)

[FixedSizeNumberCodec](https://www.solanakit.com/api/type-aliases/FixedSizeNumberCodec)

[FixedSizeNumberDecoder](https://www.solanakit.com/api/type-aliases/FixedSizeNumberDecoder)

[FixedSizeNumberEncoder](https://www.solanakit.com/api/type-aliases/FixedSizeNumberEncoder)

[NumberCodec](https://www.solanakit.com/api/type-aliases/NumberCodec)

[NumberCodecConfig](https://www.solanakit.com/api/type-aliases/NumberCodecConfig)

[NumberDecoder](https://www.solanakit.com/api/type-aliases/NumberDecoder)

[NumberEncoder](https://www.solanakit.com/api/type-aliases/NumberEncoder)

Functions (40)

[assertNumberIsBetweenForCodec](https://www.solanakit.com/api/functions/assertNumberIsBetweenForCodec)

[getF32Codec](https://www.solanakit.com/api/functions/getF32Codec)

[getF32Decoder](https://www.solanakit.com/api/functions/getF32Decoder)

[getF32Encoder](https://www.solanakit.com/api/functions/getF32Encoder)

[getF64Codec](https://www.solanakit.com/api/functions/getF64Codec)

[getF64Decoder](https://www.solanakit.com/api/functions/getF64Decoder)

[getF64Encoder](https://www.solanakit.com/api/functions/getF64Encoder)

[getI128Codec](https://www.solanakit.com/api/functions/getI128Codec)

[getI128Decoder](https://www.solanakit.com/api/functions/getI128Decoder)

[getI128Encoder](https://www.solanakit.com/api/functions/getI128Encoder)

[getI16Codec](https://www.solanakit.com/api/functions/getI16Codec)

[getI16Decoder](https://www.solanakit.com/api/functions/getI16Decoder)

[getI16Encoder](https://www.solanakit.com/api/functions/getI16Encoder)

[getI32Codec](https://www.solanakit.com/api/functions/getI32Codec)

[getI32Decoder](https://www.solanakit.com/api/functions/getI32Decoder)

[getI32Encoder](https://www.solanakit.com/api/functions/getI32Encoder)

[getI64Codec](https://www.solanakit.com/api/functions/getI64Codec)

[getI64Decoder](https://www.solanakit.com/api/functions/getI64Decoder)

[getI64Encoder](https://www.solanakit.com/api/functions/getI64Encoder)

[getI8Codec](https://www.solanakit.com/api/functions/getI8Codec)

[getI8Decoder](https://www.solanakit.com/api/functions/getI8Decoder)

[getI8Encoder](https://www.solanakit.com/api/functions/getI8Encoder)

[getShortU16Codec](https://www.solanakit.com/api/functions/getShortU16Codec)

[getShortU16Decoder](https://www.solanakit.com/api/functions/getShortU16Decoder)

[getShortU16Encoder](https://www.solanakit.com/api/functions/getShortU16Encoder)

[getU128Codec](https://www.solanakit.com/api/functions/getU128Codec)

[getU128Decoder](https://www.solanakit.com/api/functions/getU128Decoder)

[getU128Encoder](https://www.solanakit.com/api/functions/getU128Encoder)

[getU16Codec](https://www.solanakit.com/api/functions/getU16Codec)

[getU16Decoder](https://www.solanakit.com/api/functions/getU16Decoder)

[getU16Encoder](https://www.solanakit.com/api/functions/getU16Encoder)

[getU32Codec](https://www.solanakit.com/api/functions/getU32Codec)

[getU32Decoder](https://www.solanakit.com/api/functions/getU32Decoder)

[getU32Encoder](https://www.solanakit.com/api/functions/getU32Encoder)

[getU64Codec](https://www.solanakit.com/api/functions/getU64Codec)

[getU64Decoder](https://www.solanakit.com/api/functions/getU64Decoder)

[getU64Encoder](https://www.solanakit.com/api/functions/getU64Encoder)

[getU8Codec](https://www.solanakit.com/api/functions/getU8Codec)

[getU8Decoder](https://www.solanakit.com/api/functions/getU8Decoder)

[getU8Encoder](https://www.solanakit.com/api/functions/getU8Encoder)

### [`@solana/codecs-strings`](https://www.solanakit.com/api\#solanacodecs-strings)

Functions (24)

[assertValidBaseString](https://www.solanakit.com/api/functions/assertValidBaseString)

[getBase10Codec](https://www.solanakit.com/api/functions/getBase10Codec)

[getBase10Decoder](https://www.solanakit.com/api/functions/getBase10Decoder)

[getBase10Encoder](https://www.solanakit.com/api/functions/getBase10Encoder)

[getBase16Codec](https://www.solanakit.com/api/functions/getBase16Codec)

[getBase16Decoder](https://www.solanakit.com/api/functions/getBase16Decoder)

[getBase16Encoder](https://www.solanakit.com/api/functions/getBase16Encoder)

[getBase58Codec](https://www.solanakit.com/api/functions/getBase58Codec)

[getBase58Decoder](https://www.solanakit.com/api/functions/getBase58Decoder)

[getBase58Encoder](https://www.solanakit.com/api/functions/getBase58Encoder)

[getBase64Codec](https://www.solanakit.com/api/functions/getBase64Codec)

[getBase64Decoder](https://www.solanakit.com/api/functions/getBase64Decoder)

[getBase64Encoder](https://www.solanakit.com/api/functions/getBase64Encoder)

[getBaseXCodec](https://www.solanakit.com/api/functions/getBaseXCodec)

[getBaseXDecoder](https://www.solanakit.com/api/functions/getBaseXDecoder)

[getBaseXEncoder](https://www.solanakit.com/api/functions/getBaseXEncoder)

[getBaseXResliceCodec](https://www.solanakit.com/api/functions/getBaseXResliceCodec)

[getBaseXResliceDecoder](https://www.solanakit.com/api/functions/getBaseXResliceDecoder)

[getBaseXResliceEncoder](https://www.solanakit.com/api/functions/getBaseXResliceEncoder)

[getUtf8Codec](https://www.solanakit.com/api/functions/getUtf8Codec)

[getUtf8Decoder](https://www.solanakit.com/api/functions/getUtf8Decoder)

[getUtf8Encoder](https://www.solanakit.com/api/functions/getUtf8Encoder)

[padNullCharacters](https://www.solanakit.com/api/functions/padNullCharacters)

[removeNullCharacters](https://www.solanakit.com/api/functions/removeNullCharacters)

### [`@solana/compat`](https://www.solanakit.com/api\#solanacompat)

Functions (4)

[fromLegacyKeypair](https://www.solanakit.com/api/functions/fromLegacyKeypair)

[fromLegacyPublicKey](https://www.solanakit.com/api/functions/fromLegacyPublicKey)

[fromLegacyTransactionInstruction](https://www.solanakit.com/api/functions/fromLegacyTransactionInstruction)

[fromVersionedTransaction](https://www.solanakit.com/api/functions/fromVersionedTransaction)

### [`@solana/errors`](https://www.solanakit.com/api\#solanaerrors)

Classes (1)

[SolanaError](https://www.solanakit.com/api/classes/SolanaError)

Types (2)

[SolanaErrorCode](https://www.solanakit.com/api/type-aliases/SolanaErrorCode)

[SolanaErrorCodeWithCause](https://www.solanakit.com/api/type-aliases/SolanaErrorCodeWithCause)

Functions (5)

[getSolanaErrorFromInstructionError](https://www.solanakit.com/api/functions/getSolanaErrorFromInstructionError)

[getSolanaErrorFromJsonRpcError](https://www.solanakit.com/api/functions/getSolanaErrorFromJsonRpcError)

[getSolanaErrorFromTransactionError](https://www.solanakit.com/api/functions/getSolanaErrorFromTransactionError)

[isSolanaError](https://www.solanakit.com/api/functions/isSolanaError)

[safeCaptureStackTrace](https://www.solanakit.com/api/functions/safeCaptureStackTrace)

Variables (236)

[SOLANA\_ERROR\_\_ACCOUNTS\_\_ACCOUNT\_NOT\_FOUND](https://www.solanakit.com/api/variables/SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND)

[SOLANA\_ERROR\_\_ACCOUNTS\_\_EXPECTED\_ALL\_ACCOUNTS\_TO\_BE\_DECODED](https://www.solanakit.com/api/variables/SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED)

[SOLANA\_ERROR\_\_ACCOUNTS\_\_EXPECTED\_DECODED\_ACCOUNT](https://www.solanakit.com/api/variables/SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT)

[SOLANA\_ERROR\_\_ACCOUNTS\_\_FAILED\_TO\_DECODE\_ACCOUNT](https://www.solanakit.com/api/variables/SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT)

[SOLANA\_ERROR\_\_ACCOUNTS\_\_ONE\_OR\_MORE\_ACCOUNTS\_NOT\_FOUND](https://www.solanakit.com/api/variables/SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND)

[SOLANA\_ERROR\_\_ADDRESSES\_\_FAILED\_TO\_FIND\_VIABLE\_PDA\_BUMP\_SEED](https://www.solanakit.com/api/variables/SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED)

[SOLANA\_ERROR\_\_ADDRESSES\_\_INVALID\_BASE58\_ENCODED\_ADDRESS](https://www.solanakit.com/api/variables/SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS)

[SOLANA\_ERROR\_\_ADDRESSES\_\_INVALID\_BYTE\_LENGTH](https://www.solanakit.com/api/variables/SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH)

[SOLANA\_ERROR\_\_ADDRESSES\_\_INVALID\_ED25519\_PUBLIC\_KEY](https://www.solanakit.com/api/variables/SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY)

[SOLANA\_ERROR\_\_ADDRESSES\_\_INVALID\_OFF\_CURVE\_ADDRESS](https://www.solanakit.com/api/variables/SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS)

[SOLANA\_ERROR\_\_ADDRESSES\_\_INVALID\_SEEDS\_POINT\_ON\_CURVE](https://www.solanakit.com/api/variables/SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE)

[SOLANA\_ERROR\_\_ADDRESSES\_\_MALFORMED\_PDA](https://www.solanakit.com/api/variables/SOLANA_ERROR__ADDRESSES__MALFORMED_PDA)

[SOLANA\_ERROR\_\_ADDRESSES\_\_MAX\_NUMBER\_OF\_PDA\_SEEDS\_EXCEEDED](https://www.solanakit.com/api/variables/SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED)

[SOLANA\_ERROR\_\_ADDRESSES\_\_MAX\_PDA\_SEED\_LENGTH\_EXCEEDED](https://www.solanakit.com/api/variables/SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED)

[SOLANA\_ERROR\_\_ADDRESSES\_\_PDA\_BUMP\_SEED\_OUT\_OF\_RANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE)

[SOLANA\_ERROR\_\_ADDRESSES\_\_PDA\_ENDS\_WITH\_PDA\_MARKER](https://www.solanakit.com/api/variables/SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER)

[SOLANA\_ERROR\_\_ADDRESSES\_\_STRING\_LENGTH\_OUT\_OF\_RANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE)

[SOLANA\_ERROR\_\_BLOCK\_HEIGHT\_EXCEEDED](https://www.solanakit.com/api/variables/SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED)

[SOLANA\_ERROR\_\_BLOCKHASH\_STRING\_LENGTH\_OUT\_OF\_RANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE)

[SOLANA\_ERROR\_\_CODECS\_\_CANNOT\_DECODE\_EMPTY\_BYTE\_ARRAY](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY)

[SOLANA\_ERROR\_\_CODECS\_\_CANNOT\_USE\_LEXICAL\_VALUES\_AS\_ENUM\_DISCRIMINATORS](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS)

[SOLANA\_ERROR\_\_CODECS\_\_ENCODED\_BYTES\_MUST\_NOT\_INCLUDE\_SENTINEL](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL)

[SOLANA\_ERROR\_\_CODECS\_\_ENCODER\_DECODER\_FIXED\_SIZE\_MISMATCH](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH)

[SOLANA\_ERROR\_\_CODECS\_\_ENCODER\_DECODER\_MAX\_SIZE\_MISMATCH](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH)

[SOLANA\_ERROR\_\_CODECS\_\_ENCODER\_DECODER\_SIZE\_COMPATIBILITY\_MISMATCH](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH)

[SOLANA\_ERROR\_\_CODECS\_\_ENUM\_DISCRIMINATOR\_OUT\_OF\_RANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE)

[SOLANA\_ERROR\_\_CODECS\_\_EXPECTED\_FIXED\_LENGTH](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH)

[SOLANA\_ERROR\_\_CODECS\_\_EXPECTED\_POSITIVE\_BYTE\_LENGTH](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH)

[SOLANA\_ERROR\_\_CODECS\_\_EXPECTED\_VARIABLE\_LENGTH](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH)

[SOLANA\_ERROR\_\_CODECS\_\_EXPECTED\_ZERO\_VALUE\_TO\_MATCH\_ITEM\_FIXED\_SIZE](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__EXPECTED_ZERO_VALUE_TO_MATCH_ITEM_FIXED_SIZE)

[SOLANA\_ERROR\_\_CODECS\_\_INVALID\_BYTE\_LENGTH](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH)

[SOLANA\_ERROR\_\_CODECS\_\_INVALID\_CONSTANT](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__INVALID_CONSTANT)

[SOLANA\_ERROR\_\_CODECS\_\_INVALID\_DISCRIMINATED\_UNION\_VARIANT](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT)

[SOLANA\_ERROR\_\_CODECS\_\_INVALID\_ENUM\_VARIANT](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT)

[SOLANA\_ERROR\_\_CODECS\_\_INVALID\_LITERAL\_UNION\_VARIANT](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT)

[SOLANA\_ERROR\_\_CODECS\_\_INVALID\_NUMBER\_OF\_ITEMS](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS)

[SOLANA\_ERROR\_\_CODECS\_\_INVALID\_STRING\_FOR\_BASE](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE)

[SOLANA\_ERROR\_\_CODECS\_\_LITERAL\_UNION\_DISCRIMINATOR\_OUT\_OF\_RANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE)

[SOLANA\_ERROR\_\_CODECS\_\_NUMBER\_OUT\_OF\_RANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE)

[SOLANA\_ERROR\_\_CODECS\_\_OFFSET\_OUT\_OF\_RANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE)

[SOLANA\_ERROR\_\_CODECS\_\_SENTINEL\_MISSING\_IN\_DECODED\_BYTES](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES)

[SOLANA\_ERROR\_\_CODECS\_\_UNION\_VARIANT\_OUT\_OF\_RANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE)

[SOLANA\_ERROR\_\_CRYPTO\_\_RANDOM\_VALUES\_FUNCTION\_UNIMPLEMENTED](https://www.solanakit.com/api/variables/SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED)

[SOLANA\_ERROR\_\_INSTRUCTION\_\_EXPECTED\_TO\_HAVE\_ACCOUNTS](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS)

[SOLANA\_ERROR\_\_INSTRUCTION\_\_EXPECTED\_TO\_HAVE\_DATA](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA)

[SOLANA\_ERROR\_\_INSTRUCTION\_\_PROGRAM\_ID\_MISMATCH](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_ACCOUNT\_ALREADY\_INITIALIZED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_ACCOUNT\_BORROW\_FAILED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_ACCOUNT\_BORROW\_OUTSTANDING](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_ACCOUNT\_DATA\_SIZE\_CHANGED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_ACCOUNT\_DATA\_TOO\_SMALL](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_ACCOUNT\_NOT\_EXECUTABLE](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_ACCOUNT\_NOT\_RENT\_EXEMPT](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_ARITHMETIC\_OVERFLOW](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_BORSH\_IO\_ERROR](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_BUILTIN\_PROGRAMS\_MUST\_CONSUME\_COMPUTE\_UNITS](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_CALL\_DEPTH](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_COMPUTATIONAL\_BUDGET\_EXCEEDED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_CUSTOM](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_DUPLICATE\_ACCOUNT\_INDEX](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_DUPLICATE\_ACCOUNT\_OUT\_OF\_SYNC](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_EXECUTABLE\_ACCOUNT\_NOT\_RENT\_EXEMPT](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_EXECUTABLE\_DATA\_MODIFIED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_EXECUTABLE\_LAMPORT\_CHANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_EXECUTABLE\_MODIFIED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_EXTERNAL\_ACCOUNT\_DATA\_MODIFIED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_EXTERNAL\_ACCOUNT\_LAMPORT\_SPEND](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_GENERIC\_ERROR](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_ILLEGAL\_OWNER](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_IMMUTABLE](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_INCORRECT\_AUTHORITY](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_INCORRECT\_PROGRAM\_ID](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_INSUFFICIENT\_FUNDS](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_INVALID\_ACCOUNT\_DATA](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_INVALID\_ACCOUNT\_OWNER](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_INVALID\_ARGUMENT](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_INVALID\_ERROR](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_INVALID\_INSTRUCTION\_DATA](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_INVALID\_REALLOC](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_INVALID\_SEEDS](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_MAX\_ACCOUNTS\_DATA\_ALLOCATIONS\_EXCEEDED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_MAX\_ACCOUNTS\_EXCEEDED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_MAX\_INSTRUCTION\_TRACE\_LENGTH\_EXCEEDED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_MAX\_SEED\_LENGTH\_EXCEEDED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_MISSING\_ACCOUNT](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_MISSING\_REQUIRED\_SIGNATURE](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_MODIFIED\_PROGRAM\_ID](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_NOT\_ENOUGH\_ACCOUNT\_KEYS](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_PRIVILEGE\_ESCALATION](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_PROGRAM\_ENVIRONMENT\_SETUP\_FAILURE](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_PROGRAM\_FAILED\_TO\_COMPILE](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_PROGRAM\_FAILED\_TO\_COMPLETE](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_READONLY\_DATA\_MODIFIED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_READONLY\_LAMPORT\_CHANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_REENTRANCY\_NOT\_ALLOWED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_RENT\_EPOCH\_MODIFIED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_UNBALANCED\_INSTRUCTION](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_UNINITIALIZED\_ACCOUNT](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_UNKNOWN](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_UNSUPPORTED\_PROGRAM\_ID](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID)

[SOLANA\_ERROR\_\_INSTRUCTION\_ERROR\_\_UNSUPPORTED\_SYSVAR](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR)

[SOLANA\_ERROR\_\_INSTRUCTION\_PLANS\_\_EMPTY\_INSTRUCTION\_PLAN](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_PLANS__EMPTY_INSTRUCTION_PLAN)

[SOLANA\_ERROR\_\_INSTRUCTION\_PLANS\_\_FAILED\_TO\_EXECUTE\_TRANSACTION\_PLAN](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_PLANS__FAILED_TO_EXECUTE_TRANSACTION_PLAN)

[SOLANA\_ERROR\_\_INSTRUCTION\_PLANS\_\_MESSAGE\_CANNOT\_ACCOMMODATE\_PLAN](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN)

[SOLANA\_ERROR\_\_INSTRUCTION\_PLANS\_\_MESSAGE\_PACKER\_ALREADY\_COMPLETE](https://www.solanakit.com/api/variables/SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_PACKER_ALREADY_COMPLETE)

[SOLANA\_ERROR\_\_INVALID\_BLOCKHASH\_BYTE\_LENGTH](https://www.solanakit.com/api/variables/SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH)

[SOLANA\_ERROR\_\_INVALID\_NONCE](https://www.solanakit.com/api/variables/SOLANA_ERROR__INVALID_NONCE)

[SOLANA\_ERROR\_\_INVARIANT\_VIOLATION\_\_CACHED\_ABORTABLE\_ITERABLE\_CACHE\_ENTRY\_MISSING](https://www.solanakit.com/api/variables/SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING)

[SOLANA\_ERROR\_\_INVARIANT\_VIOLATION\_\_DATA\_PUBLISHER\_CHANNEL\_UNIMPLEMENTED](https://www.solanakit.com/api/variables/SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED)

[SOLANA\_ERROR\_\_INVARIANT\_VIOLATION\_\_INVALID\_INSTRUCTION\_PLAN\_KIND](https://www.solanakit.com/api/variables/SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_INSTRUCTION_PLAN_KIND)

[SOLANA\_ERROR\_\_INVARIANT\_VIOLATION\_\_INVALID\_TRANSACTION\_PLAN\_KIND](https://www.solanakit.com/api/variables/SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_TRANSACTION_PLAN_KIND)

[SOLANA\_ERROR\_\_INVARIANT\_VIOLATION\_\_SUBSCRIPTION\_ITERATOR\_MUST\_NOT\_POLL\_BEFORE\_RESOLVING\_EXISTING\_MESSAGE\_PROMISE](https://www.solanakit.com/api/variables/SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE)

[SOLANA\_ERROR\_\_INVARIANT\_VIOLATION\_\_SUBSCRIPTION\_ITERATOR\_STATE\_MISSING](https://www.solanakit.com/api/variables/SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING)

[SOLANA\_ERROR\_\_INVARIANT\_VIOLATION\_\_SWITCH\_MUST\_BE\_EXHAUSTIVE](https://www.solanakit.com/api/variables/SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_INTERNAL\_ERROR](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_INVALID\_PARAMS](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__INVALID_PARAMS)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_INVALID\_REQUEST](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__INVALID_REQUEST)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_METHOD\_NOT\_FOUND](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_PARSE\_ERROR](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__PARSE_ERROR)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SCAN\_ERROR](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SCAN_ERROR)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_BLOCK\_CLEANED\_UP](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_BLOCK\_NOT\_AVAILABLE](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_BLOCK\_STATUS\_NOT\_AVAILABLE\_YET](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_EPOCH\_REWARDS\_PERIOD\_ACTIVE](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_EPOCH_REWARDS_PERIOD_ACTIVE)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_KEY\_EXCLUDED\_FROM\_SECONDARY\_INDEX](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_LONG\_TERM\_STORAGE\_SLOT\_SKIPPED](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_LONG\_TERM\_STORAGE\_UNREACHABLE](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_UNREACHABLE)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_MIN\_CONTEXT\_SLOT\_NOT\_REACHED](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_NO\_SNAPSHOT](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_NODE\_UNHEALTHY](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_SEND\_TRANSACTION\_PREFLIGHT\_FAILURE](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_SLOT\_NOT\_EPOCH\_BOUNDARY](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_NOT_EPOCH_BOUNDARY)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_SLOT\_SKIPPED](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_TRANSACTION\_HISTORY\_NOT\_AVAILABLE](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_TRANSACTION\_PRECOMPILE\_VERIFICATION\_FAILURE](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_TRANSACTION\_SIGNATURE\_LEN\_MISMATCH](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_TRANSACTION\_SIGNATURE\_VERIFICATION\_FAILURE](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE)

[SOLANA\_ERROR\_\_JSON\_RPC\_\_SERVER\_ERROR\_UNSUPPORTED\_TRANSACTION\_VERSION](https://www.solanakit.com/api/variables/SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION)

[SOLANA\_ERROR\_\_KEYS\_\_INVALID\_KEY\_PAIR\_BYTE\_LENGTH](https://www.solanakit.com/api/variables/SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH)

[SOLANA\_ERROR\_\_KEYS\_\_INVALID\_PRIVATE\_KEY\_BYTE\_LENGTH](https://www.solanakit.com/api/variables/SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH)

[SOLANA\_ERROR\_\_KEYS\_\_INVALID\_SIGNATURE\_BYTE\_LENGTH](https://www.solanakit.com/api/variables/SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH)

[SOLANA\_ERROR\_\_KEYS\_\_PUBLIC\_KEY\_MUST\_MATCH\_PRIVATE\_KEY](https://www.solanakit.com/api/variables/SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY)

[SOLANA\_ERROR\_\_KEYS\_\_SIGNATURE\_STRING\_LENGTH\_OUT\_OF\_RANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE)

[SOLANA\_ERROR\_\_LAMPORTS\_OUT\_OF\_RANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE)

[SOLANA\_ERROR\_\_MALFORMED\_BIGINT\_STRING](https://www.solanakit.com/api/variables/SOLANA_ERROR__MALFORMED_BIGINT_STRING)

[SOLANA\_ERROR\_\_MALFORMED\_JSON\_RPC\_ERROR](https://www.solanakit.com/api/variables/SOLANA_ERROR__MALFORMED_JSON_RPC_ERROR)

[SOLANA\_ERROR\_\_MALFORMED\_NUMBER\_STRING](https://www.solanakit.com/api/variables/SOLANA_ERROR__MALFORMED_NUMBER_STRING)

[SOLANA\_ERROR\_\_NONCE\_ACCOUNT\_NOT\_FOUND](https://www.solanakit.com/api/variables/SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND)

[SOLANA\_ERROR\_\_RPC\_\_API\_PLAN\_MISSING\_FOR\_RPC\_METHOD](https://www.solanakit.com/api/variables/SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD)

[SOLANA\_ERROR\_\_RPC\_\_INTEGER\_OVERFLOW](https://www.solanakit.com/api/variables/SOLANA_ERROR__RPC__INTEGER_OVERFLOW)

[SOLANA\_ERROR\_\_RPC\_\_TRANSPORT\_HTTP\_ERROR](https://www.solanakit.com/api/variables/SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR)

[SOLANA\_ERROR\_\_RPC\_\_TRANSPORT\_HTTP\_HEADER\_FORBIDDEN](https://www.solanakit.com/api/variables/SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN)

[SOLANA\_ERROR\_\_RPC\_SUBSCRIPTIONS\_\_CANNOT\_CREATE\_SUBSCRIPTION\_PLAN](https://www.solanakit.com/api/variables/SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN)

[SOLANA\_ERROR\_\_RPC\_SUBSCRIPTIONS\_\_CHANNEL\_CLOSED\_BEFORE\_MESSAGE\_BUFFERED](https://www.solanakit.com/api/variables/SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED)

[SOLANA\_ERROR\_\_RPC\_SUBSCRIPTIONS\_\_CHANNEL\_CONNECTION\_CLOSED](https://www.solanakit.com/api/variables/SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED)

[SOLANA\_ERROR\_\_RPC\_SUBSCRIPTIONS\_\_CHANNEL\_FAILED\_TO\_CONNECT](https://www.solanakit.com/api/variables/SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT)

[SOLANA\_ERROR\_\_RPC\_SUBSCRIPTIONS\_\_EXPECTED\_SERVER\_SUBSCRIPTION\_ID](https://www.solanakit.com/api/variables/SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID)

[SOLANA\_ERROR\_\_SIGNER\_\_ADDRESS\_CANNOT\_HAVE\_MULTIPLE\_SIGNERS](https://www.solanakit.com/api/variables/SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS)

[SOLANA\_ERROR\_\_SIGNER\_\_EXPECTED\_KEY\_PAIR\_SIGNER](https://www.solanakit.com/api/variables/SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER)

[SOLANA\_ERROR\_\_SIGNER\_\_EXPECTED\_MESSAGE\_MODIFYING\_SIGNER](https://www.solanakit.com/api/variables/SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER)

[SOLANA\_ERROR\_\_SIGNER\_\_EXPECTED\_MESSAGE\_PARTIAL\_SIGNER](https://www.solanakit.com/api/variables/SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER)

[SOLANA\_ERROR\_\_SIGNER\_\_EXPECTED\_MESSAGE\_SIGNER](https://www.solanakit.com/api/variables/SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER)

[SOLANA\_ERROR\_\_SIGNER\_\_EXPECTED\_TRANSACTION\_MODIFYING\_SIGNER](https://www.solanakit.com/api/variables/SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER)

[SOLANA\_ERROR\_\_SIGNER\_\_EXPECTED\_TRANSACTION\_PARTIAL\_SIGNER](https://www.solanakit.com/api/variables/SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER)

[SOLANA\_ERROR\_\_SIGNER\_\_EXPECTED\_TRANSACTION\_SENDING\_SIGNER](https://www.solanakit.com/api/variables/SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER)

[SOLANA\_ERROR\_\_SIGNER\_\_EXPECTED\_TRANSACTION\_SIGNER](https://www.solanakit.com/api/variables/SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER)

[SOLANA\_ERROR\_\_SIGNER\_\_TRANSACTION\_CANNOT\_HAVE\_MULTIPLE\_SENDING\_SIGNERS](https://www.solanakit.com/api/variables/SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS)

[SOLANA\_ERROR\_\_SIGNER\_\_TRANSACTION\_SENDING\_SIGNER\_MISSING](https://www.solanakit.com/api/variables/SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING)

[SOLANA\_ERROR\_\_SIGNER\_\_WALLET\_MULTISIGN\_UNIMPLEMENTED](https://www.solanakit.com/api/variables/SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED)

[SOLANA\_ERROR\_\_SUBTLE\_CRYPTO\_\_CANNOT\_EXPORT\_NON\_EXTRACTABLE\_KEY](https://www.solanakit.com/api/variables/SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY)

[SOLANA\_ERROR\_\_SUBTLE\_CRYPTO\_\_DIGEST\_UNIMPLEMENTED](https://www.solanakit.com/api/variables/SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED)

[SOLANA\_ERROR\_\_SUBTLE\_CRYPTO\_\_DISALLOWED\_IN\_INSECURE\_CONTEXT](https://www.solanakit.com/api/variables/SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT)

[SOLANA\_ERROR\_\_SUBTLE\_CRYPTO\_\_ED25519\_ALGORITHM\_UNIMPLEMENTED](https://www.solanakit.com/api/variables/SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED)

[SOLANA\_ERROR\_\_SUBTLE\_CRYPTO\_\_EXPORT\_FUNCTION\_UNIMPLEMENTED](https://www.solanakit.com/api/variables/SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED)

[SOLANA\_ERROR\_\_SUBTLE\_CRYPTO\_\_GENERATE\_FUNCTION\_UNIMPLEMENTED](https://www.solanakit.com/api/variables/SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED)

[SOLANA\_ERROR\_\_SUBTLE\_CRYPTO\_\_SIGN\_FUNCTION\_UNIMPLEMENTED](https://www.solanakit.com/api/variables/SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED)

[SOLANA\_ERROR\_\_SUBTLE\_CRYPTO\_\_VERIFY\_FUNCTION\_UNIMPLEMENTED](https://www.solanakit.com/api/variables/SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED)

[SOLANA\_ERROR\_\_TIMESTAMP\_OUT\_OF\_RANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE)

[SOLANA\_ERROR\_\_TRANSACTION\_\_ADDRESS\_MISSING](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING)

[SOLANA\_ERROR\_\_TRANSACTION\_\_ADDRESSES\_CANNOT\_SIGN\_TRANSACTION](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION)

[SOLANA\_ERROR\_\_TRANSACTION\_\_CANNOT\_ENCODE\_WITH\_EMPTY\_SIGNATURES](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES)

[SOLANA\_ERROR\_\_TRANSACTION\_\_EXCEEDS\_SIZE\_LIMIT](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT)

[SOLANA\_ERROR\_\_TRANSACTION\_\_EXPECTED\_BLOCKHASH\_LIFETIME](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME)

[SOLANA\_ERROR\_\_TRANSACTION\_\_EXPECTED\_NONCE\_LIFETIME](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME)

[SOLANA\_ERROR\_\_TRANSACTION\_\_FAILED\_TO\_DECOMPILE\_ADDRESS\_LOOKUP\_TABLE\_CONTENTS\_MISSING](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING)

[SOLANA\_ERROR\_\_TRANSACTION\_\_FAILED\_TO\_DECOMPILE\_ADDRESS\_LOOKUP\_TABLE\_INDEX\_OUT\_OF\_RANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE)

[SOLANA\_ERROR\_\_TRANSACTION\_\_FAILED\_TO\_DECOMPILE\_FEE\_PAYER\_MISSING](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING)

[SOLANA\_ERROR\_\_TRANSACTION\_\_FAILED\_TO\_DECOMPILE\_INSTRUCTION\_PROGRAM\_ADDRESS\_NOT\_FOUND](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND)

[SOLANA\_ERROR\_\_TRANSACTION\_\_FAILED\_TO\_ESTIMATE\_COMPUTE\_LIMIT](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT)

[SOLANA\_ERROR\_\_TRANSACTION\_\_FAILED\_WHEN\_SIMULATING\_TO\_ESTIMATE\_COMPUTE\_LIMIT](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT)

[SOLANA\_ERROR\_\_TRANSACTION\_\_FEE\_PAYER\_MISSING](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING)

[SOLANA\_ERROR\_\_TRANSACTION\_\_FEE\_PAYER\_SIGNATURE\_MISSING](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING)

[SOLANA\_ERROR\_\_TRANSACTION\_\_INVALID\_NONCE\_TRANSACTION\_FIRST\_INSTRUCTION\_MUST\_BE\_ADVANCE\_NONCE](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE)

[SOLANA\_ERROR\_\_TRANSACTION\_\_INVALID\_NONCE\_TRANSACTION\_INSTRUCTIONS\_MISSING](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING)

[SOLANA\_ERROR\_\_TRANSACTION\_\_INVOKED\_PROGRAMS\_CANNOT\_PAY\_FEES](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES)

[SOLANA\_ERROR\_\_TRANSACTION\_\_INVOKED\_PROGRAMS\_MUST\_NOT\_BE\_WRITABLE](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE)

[SOLANA\_ERROR\_\_TRANSACTION\_\_MESSAGE\_SIGNATURES\_MISMATCH](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH)

[SOLANA\_ERROR\_\_TRANSACTION\_\_SIGNATURES\_MISSING](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING)

[SOLANA\_ERROR\_\_TRANSACTION\_\_VERSION\_NUMBER\_OUT\_OF\_RANGE](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_ACCOUNT\_BORROW\_OUTSTANDING](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_ACCOUNT\_IN\_USE](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_ACCOUNT\_LOADED\_TWICE](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_ACCOUNT\_NOT\_FOUND](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_ADDRESS\_LOOKUP\_TABLE\_NOT\_FOUND](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_ALREADY\_PROCESSED](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_BLOCKHASH\_NOT\_FOUND](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_CALL\_CHAIN\_TOO\_DEEP](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_CLUSTER\_MAINTENANCE](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_DUPLICATE\_INSTRUCTION](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_INSUFFICIENT\_FUNDS\_FOR\_FEE](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_INSUFFICIENT\_FUNDS\_FOR\_RENT](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_INVALID\_ACCOUNT\_FOR\_FEE](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_INVALID\_ACCOUNT\_INDEX](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_INVALID\_ADDRESS\_LOOKUP\_TABLE\_DATA](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_INVALID\_ADDRESS\_LOOKUP\_TABLE\_INDEX](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_INVALID\_ADDRESS\_LOOKUP\_TABLE\_OWNER](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_INVALID\_LOADED\_ACCOUNTS\_DATA\_SIZE\_LIMIT](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_INVALID\_PROGRAM\_FOR\_EXECUTION](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_INVALID\_RENT\_PAYING\_ACCOUNT](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_INVALID\_WRITABLE\_ACCOUNT](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_MAX\_LOADED\_ACCOUNTS\_DATA\_SIZE\_EXCEEDED](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_MISSING\_SIGNATURE\_FOR\_FEE](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_PROGRAM\_ACCOUNT\_NOT\_FOUND](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_PROGRAM\_EXECUTION\_TEMPORARILY\_RESTRICTED](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_RESANITIZATION\_NEEDED](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_SANITIZE\_FAILURE](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_SIGNATURE\_FAILURE](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_TOO\_MANY\_ACCOUNT\_LOCKS](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_UNBALANCED\_TRANSACTION](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_UNKNOWN](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_UNSUPPORTED\_VERSION](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_WOULD\_EXCEED\_ACCOUNT\_DATA\_BLOCK\_LIMIT](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_WOULD\_EXCEED\_ACCOUNT\_DATA\_TOTAL\_LIMIT](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_WOULD\_EXCEED\_MAX\_ACCOUNT\_COST\_LIMIT](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_WOULD\_EXCEED\_MAX\_BLOCK\_COST\_LIMIT](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT)

[SOLANA\_ERROR\_\_TRANSACTION\_ERROR\_\_WOULD\_EXCEED\_MAX\_VOTE\_COST\_LIMIT](https://www.solanakit.com/api/variables/SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT)

### [`@solana/functional`](https://www.solanakit.com/api\#solanafunctional)

Functions (1)

[pipe](https://www.solanakit.com/api/functions/pipe)

### [`@solana/instruction-plans`](https://www.solanakit.com/api\#solanainstruction-plans)

Types (20)

[InstructionPlan](https://www.solanakit.com/api/type-aliases/InstructionPlan)

[MessagePacker](https://www.solanakit.com/api/type-aliases/MessagePacker)

[MessagePackerInstructionPlan](https://www.solanakit.com/api/type-aliases/MessagePackerInstructionPlan)

[ParallelInstructionPlan](https://www.solanakit.com/api/type-aliases/ParallelInstructionPlan)

[ParallelTransactionPlan](https://www.solanakit.com/api/type-aliases/ParallelTransactionPlan)

[ParallelTransactionPlanResult](https://www.solanakit.com/api/type-aliases/ParallelTransactionPlanResult)

[SequentialInstructionPlan](https://www.solanakit.com/api/type-aliases/SequentialInstructionPlan)

[SequentialTransactionPlan](https://www.solanakit.com/api/type-aliases/SequentialTransactionPlan)

[SequentialTransactionPlanResult](https://www.solanakit.com/api/type-aliases/SequentialTransactionPlanResult)

[SingleInstructionPlan](https://www.solanakit.com/api/type-aliases/SingleInstructionPlan)

[SingleTransactionPlan](https://www.solanakit.com/api/type-aliases/SingleTransactionPlan)

[SingleTransactionPlanResult](https://www.solanakit.com/api/type-aliases/SingleTransactionPlanResult)

[TransactionPlan](https://www.solanakit.com/api/type-aliases/TransactionPlan)

[TransactionPlanExecutor](https://www.solanakit.com/api/type-aliases/TransactionPlanExecutor)

[TransactionPlanExecutorConfig](https://www.solanakit.com/api/type-aliases/TransactionPlanExecutorConfig)

[TransactionPlanner](https://www.solanakit.com/api/type-aliases/TransactionPlanner)

[TransactionPlannerConfig](https://www.solanakit.com/api/type-aliases/TransactionPlannerConfig)

[TransactionPlanResult](https://www.solanakit.com/api/type-aliases/TransactionPlanResult)

[TransactionPlanResultContext](https://www.solanakit.com/api/type-aliases/TransactionPlanResultContext)

[TransactionPlanResultStatus](https://www.solanakit.com/api/type-aliases/TransactionPlanResultStatus)

Functions (20)

[canceledSingleTransactionPlanResult](https://www.solanakit.com/api/functions/canceledSingleTransactionPlanResult)

[createTransactionPlanExecutor](https://www.solanakit.com/api/functions/createTransactionPlanExecutor)

[createTransactionPlanner](https://www.solanakit.com/api/functions/createTransactionPlanner)

[failedSingleTransactionPlanResult](https://www.solanakit.com/api/functions/failedSingleTransactionPlanResult)

[getAllSingleTransactionPlans](https://www.solanakit.com/api/functions/getAllSingleTransactionPlans)

[getLinearMessagePackerInstructionPlan](https://www.solanakit.com/api/functions/getLinearMessagePackerInstructionPlan)

[getMessagePackerInstructionPlanFromInstructions](https://www.solanakit.com/api/functions/getMessagePackerInstructionPlanFromInstructions)

[getReallocMessagePackerInstructionPlan](https://www.solanakit.com/api/functions/getReallocMessagePackerInstructionPlan)

[nonDivisibleSequentialInstructionPlan](https://www.solanakit.com/api/functions/nonDivisibleSequentialInstructionPlan)

[nonDivisibleSequentialTransactionPlan](https://www.solanakit.com/api/functions/nonDivisibleSequentialTransactionPlan)

[nonDivisibleSequentialTransactionPlanResult](https://www.solanakit.com/api/functions/nonDivisibleSequentialTransactionPlanResult)

[parallelInstructionPlan](https://www.solanakit.com/api/functions/parallelInstructionPlan)

[parallelTransactionPlan](https://www.solanakit.com/api/functions/parallelTransactionPlan)

[parallelTransactionPlanResult](https://www.solanakit.com/api/functions/parallelTransactionPlanResult)

[sequentialInstructionPlan](https://www.solanakit.com/api/functions/sequentialInstructionPlan)

[sequentialTransactionPlan](https://www.solanakit.com/api/functions/sequentialTransactionPlan)

[sequentialTransactionPlanResult](https://www.solanakit.com/api/functions/sequentialTransactionPlanResult)

[singleInstructionPlan](https://www.solanakit.com/api/functions/singleInstructionPlan)

[singleTransactionPlan](https://www.solanakit.com/api/functions/singleTransactionPlan)

[successfulSingleTransactionPlanResult](https://www.solanakit.com/api/functions/successfulSingleTransactionPlanResult)

### [`@solana/instructions`](https://www.solanakit.com/api\#solanainstructions)

Enums (1)

[AccountRole](https://www.solanakit.com/api/enumerations/AccountRole)

Types (11)

[AccountLookupMeta](https://www.solanakit.com/api/interfaces/AccountLookupMeta)

[AccountMeta](https://www.solanakit.com/api/interfaces/AccountMeta)

[Instruction](https://www.solanakit.com/api/interfaces/Instruction)

[InstructionWithAccounts](https://www.solanakit.com/api/interfaces/InstructionWithAccounts)

[InstructionWithData](https://www.solanakit.com/api/interfaces/InstructionWithData)

[ReadonlyAccount](https://www.solanakit.com/api/type-aliases/ReadonlyAccount)

[ReadonlyAccountLookup](https://www.solanakit.com/api/type-aliases/ReadonlyAccountLookup)

[ReadonlySignerAccount](https://www.solanakit.com/api/type-aliases/ReadonlySignerAccount)

[WritableAccount](https://www.solanakit.com/api/type-aliases/WritableAccount)

[WritableAccountLookup](https://www.solanakit.com/api/type-aliases/WritableAccountLookup)

[WritableSignerAccount](https://www.solanakit.com/api/type-aliases/WritableSignerAccount)

Functions (13)

[assertIsInstructionForProgram](https://www.solanakit.com/api/functions/assertIsInstructionForProgram)

[assertIsInstructionWithAccounts](https://www.solanakit.com/api/functions/assertIsInstructionWithAccounts)

[assertIsInstructionWithData](https://www.solanakit.com/api/functions/assertIsInstructionWithData)

[downgradeRoleToNonSigner](https://www.solanakit.com/api/functions/downgradeRoleToNonSigner)

[downgradeRoleToReadonly](https://www.solanakit.com/api/functions/downgradeRoleToReadonly)

[isInstructionForProgram](https://www.solanakit.com/api/functions/isInstructionForProgram)

[isInstructionWithAccounts](https://www.solanakit.com/api/functions/isInstructionWithAccounts)

[isInstructionWithData](https://www.solanakit.com/api/functions/isInstructionWithData)

[isSignerRole](https://www.solanakit.com/api/functions/isSignerRole)

[isWritableRole](https://www.solanakit.com/api/functions/isWritableRole)

[mergeRoles](https://www.solanakit.com/api/functions/mergeRoles)

[upgradeRoleToSigner](https://www.solanakit.com/api/functions/upgradeRoleToSigner)

[upgradeRoleToWritable](https://www.solanakit.com/api/functions/upgradeRoleToWritable)

### [`@solana/keys`](https://www.solanakit.com/api\#solanakeys)

Types (2)

[Signature](https://www.solanakit.com/api/type-aliases/Signature)

[SignatureBytes](https://www.solanakit.com/api/type-aliases/SignatureBytes)

Functions (10)

[assertIsSignature](https://www.solanakit.com/api/functions/assertIsSignature)

[createKeyPairFromBytes](https://www.solanakit.com/api/functions/createKeyPairFromBytes)

[createKeyPairFromPrivateKeyBytes](https://www.solanakit.com/api/functions/createKeyPairFromPrivateKeyBytes)

[createPrivateKeyFromBytes](https://www.solanakit.com/api/functions/createPrivateKeyFromBytes)

[generateKeyPair](https://www.solanakit.com/api/functions/generateKeyPair)

[getPublicKeyFromPrivateKey](https://www.solanakit.com/api/functions/getPublicKeyFromPrivateKey)

[isSignature](https://www.solanakit.com/api/functions/isSignature)

[signature](https://www.solanakit.com/api/functions/signature)

[signBytes](https://www.solanakit.com/api/functions/signBytes)

[verifySignature](https://www.solanakit.com/api/functions/verifySignature)

### [`@solana/nominal-types`](https://www.solanakit.com/api\#solananominal-types)

Types (5)

[AffinePoint](https://www.solanakit.com/api/type-aliases/AffinePoint)

[Brand](https://www.solanakit.com/api/type-aliases/Brand)

[CompressedData](https://www.solanakit.com/api/type-aliases/CompressedData)

[EncodedString](https://www.solanakit.com/api/type-aliases/EncodedString)

[NominalType](https://www.solanakit.com/api/type-aliases/NominalType)

### [`@solana/options`](https://www.solanakit.com/api\#solanaoptions)

Types (6)

[None](https://www.solanakit.com/api/type-aliases/None)

[Option](https://www.solanakit.com/api/type-aliases/Option)

[OptionCodecConfig](https://www.solanakit.com/api/type-aliases/OptionCodecConfig)

[OptionOrNullable](https://www.solanakit.com/api/type-aliases/OptionOrNullable)

[Some](https://www.solanakit.com/api/type-aliases/Some)

[UnwrappedOption](https://www.solanakit.com/api/type-aliases/UnwrappedOption)

Functions (11)

[getOptionCodec](https://www.solanakit.com/api/functions/getOptionCodec)

[getOptionDecoder](https://www.solanakit.com/api/functions/getOptionDecoder)

[getOptionEncoder](https://www.solanakit.com/api/functions/getOptionEncoder)

[isNone](https://www.solanakit.com/api/functions/isNone)

[isOption](https://www.solanakit.com/api/functions/isOption)

[isSome](https://www.solanakit.com/api/functions/isSome)

[none](https://www.solanakit.com/api/functions/none)

[some](https://www.solanakit.com/api/functions/some)

[unwrapOption](https://www.solanakit.com/api/functions/unwrapOption)

[unwrapOptionRecursively](https://www.solanakit.com/api/functions/unwrapOptionRecursively)

[wrapNullable](https://www.solanakit.com/api/functions/wrapNullable)

### [`@solana/programs`](https://www.solanakit.com/api\#solanaprograms)

Functions (1)

[isProgramError](https://www.solanakit.com/api/functions/isProgramError)

### [`@solana/promises`](https://www.solanakit.com/api\#solanapromises)

Functions (2)

[getAbortablePromise](https://www.solanakit.com/api/functions/getAbortablePromise)

[safeRace](https://www.solanakit.com/api/functions/safeRace)

### [`@solana/react`](https://www.solanakit.com/api\#solanareact)

Functions (7)

[useSignAndSendTransaction](https://www.solanakit.com/api/functions/useSignAndSendTransaction)

[useSignIn](https://www.solanakit.com/api/functions/useSignIn)

[useSignMessage](https://www.solanakit.com/api/functions/useSignMessage)

[useSignTransaction](https://www.solanakit.com/api/functions/useSignTransaction)

[useWalletAccountMessageSigner](https://www.solanakit.com/api/functions/useWalletAccountMessageSigner)

[useWalletAccountTransactionSendingSigner](https://www.solanakit.com/api/functions/useWalletAccountTransactionSendingSigner)

[useWalletAccountTransactionSigner](https://www.solanakit.com/api/functions/useWalletAccountTransactionSigner)

### [`@solana/rpc`](https://www.solanakit.com/api\#solanarpc)

Packages (2)

[@solana/rpc-api](https://www.solanakit.com/api#solanarpc-api)

[@solana/rpc-spec](https://www.solanakit.com/api#solanarpc-spec)

Types (9)

[RpcDevnet](https://www.solanakit.com/api/type-aliases/RpcDevnet)

[RpcFromTransport](https://www.solanakit.com/api/type-aliases/RpcFromTransport)

[RpcMainnet](https://www.solanakit.com/api/type-aliases/RpcMainnet)

[RpcTestnet](https://www.solanakit.com/api/type-aliases/RpcTestnet)

[RpcTransportDevnet](https://www.solanakit.com/api/type-aliases/RpcTransportDevnet)

[RpcTransportFromClusterUrl](https://www.solanakit.com/api/type-aliases/RpcTransportFromClusterUrl)

[RpcTransportMainnet](https://www.solanakit.com/api/type-aliases/RpcTransportMainnet)

[RpcTransportTestnet](https://www.solanakit.com/api/type-aliases/RpcTransportTestnet)

[SolanaRpcApiFromTransport](https://www.solanakit.com/api/type-aliases/SolanaRpcApiFromTransport)

Functions (3)

[createDefaultRpcTransport](https://www.solanakit.com/api/functions/createDefaultRpcTransport)

[createSolanaRpc](https://www.solanakit.com/api/functions/createSolanaRpc)

[createSolanaRpcFromTransport](https://www.solanakit.com/api/functions/createSolanaRpcFromTransport)

Variables (1)

[DEFAULT\_RPC\_CONFIG](https://www.solanakit.com/api/variables/DEFAULT_RPC_CONFIG)

### [`@solana/rpc-api`](https://www.solanakit.com/api\#solanarpc-api)

Types (56)

[GetAccountInfoApi](https://www.solanakit.com/api/type-aliases/GetAccountInfoApi)

[GetBalanceApi](https://www.solanakit.com/api/type-aliases/GetBalanceApi)

[GetBlockApi](https://www.solanakit.com/api/type-aliases/GetBlockApi)

[GetBlockCommitmentApi](https://www.solanakit.com/api/type-aliases/GetBlockCommitmentApi)

[GetBlockHeightApi](https://www.solanakit.com/api/type-aliases/GetBlockHeightApi)

[GetBlockProductionApi](https://www.solanakit.com/api/type-aliases/GetBlockProductionApi)

[GetBlocksApi](https://www.solanakit.com/api/type-aliases/GetBlocksApi)

[GetBlocksWithLimitApi](https://www.solanakit.com/api/type-aliases/GetBlocksWithLimitApi)

[GetBlockTimeApi](https://www.solanakit.com/api/type-aliases/GetBlockTimeApi)

[GetClusterNodesApi](https://www.solanakit.com/api/type-aliases/GetClusterNodesApi)

[GetEpochInfoApi](https://www.solanakit.com/api/type-aliases/GetEpochInfoApi)

[GetEpochScheduleApi](https://www.solanakit.com/api/type-aliases/GetEpochScheduleApi)

[GetFeeForMessageApi](https://www.solanakit.com/api/type-aliases/GetFeeForMessageApi)

[GetFirstAvailableBlockApi](https://www.solanakit.com/api/type-aliases/GetFirstAvailableBlockApi)

[GetGenesisHashApi](https://www.solanakit.com/api/type-aliases/GetGenesisHashApi)

[GetHealthApi](https://www.solanakit.com/api/type-aliases/GetHealthApi)

[GetHighestSnapshotSlotApi](https://www.solanakit.com/api/type-aliases/GetHighestSnapshotSlotApi)

[GetIdentityApi](https://www.solanakit.com/api/type-aliases/GetIdentityApi)

[GetInflationGovernorApi](https://www.solanakit.com/api/type-aliases/GetInflationGovernorApi)

[GetInflationRateApi](https://www.solanakit.com/api/type-aliases/GetInflationRateApi)

[GetInflationRewardApi](https://www.solanakit.com/api/type-aliases/GetInflationRewardApi)

[GetLargestAccountsApi](https://www.solanakit.com/api/type-aliases/GetLargestAccountsApi)

[GetLatestBlockhashApi](https://www.solanakit.com/api/type-aliases/GetLatestBlockhashApi)

[GetLeaderScheduleApi](https://www.solanakit.com/api/type-aliases/GetLeaderScheduleApi)

[GetMaxRetransmitSlotApi](https://www.solanakit.com/api/type-aliases/GetMaxRetransmitSlotApi)

[GetMaxShredInsertSlotApi](https://www.solanakit.com/api/type-aliases/GetMaxShredInsertSlotApi)

[GetMinimumBalanceForRentExemptionApi](https://www.solanakit.com/api/type-aliases/GetMinimumBalanceForRentExemptionApi)

[GetMultipleAccountsApi](https://www.solanakit.com/api/type-aliases/GetMultipleAccountsApi)

[GetProgramAccountsApi](https://www.solanakit.com/api/type-aliases/GetProgramAccountsApi)

[GetRecentPerformanceSamplesApi](https://www.solanakit.com/api/type-aliases/GetRecentPerformanceSamplesApi)

[GetRecentPrioritizationFeesApi](https://www.solanakit.com/api/type-aliases/GetRecentPrioritizationFeesApi)

[GetSignaturesForAddressApi](https://www.solanakit.com/api/type-aliases/GetSignaturesForAddressApi)

[GetSignatureStatusesApi](https://www.solanakit.com/api/type-aliases/GetSignatureStatusesApi)

[GetSlotApi](https://www.solanakit.com/api/type-aliases/GetSlotApi)

[GetSlotLeaderApi](https://www.solanakit.com/api/type-aliases/GetSlotLeaderApi)

[GetSlotLeadersApi](https://www.solanakit.com/api/type-aliases/GetSlotLeadersApi)

[GetStakeMinimumDelegationApi](https://www.solanakit.com/api/type-aliases/GetStakeMinimumDelegationApi)

[GetSupplyApi](https://www.solanakit.com/api/type-aliases/GetSupplyApi)

[GetTokenAccountBalanceApi](https://www.solanakit.com/api/type-aliases/GetTokenAccountBalanceApi)

[GetTokenAccountsByDelegateApi](https://www.solanakit.com/api/type-aliases/GetTokenAccountsByDelegateApi)

[GetTokenAccountsByOwnerApi](https://www.solanakit.com/api/type-aliases/GetTokenAccountsByOwnerApi)

[GetTokenLargestAccountsApi](https://www.solanakit.com/api/type-aliases/GetTokenLargestAccountsApi)

[GetTokenSupplyApi](https://www.solanakit.com/api/type-aliases/GetTokenSupplyApi)

[GetTransactionApi](https://www.solanakit.com/api/type-aliases/GetTransactionApi)

[GetTransactionCountApi](https://www.solanakit.com/api/type-aliases/GetTransactionCountApi)

[GetVersionApi](https://www.solanakit.com/api/type-aliases/GetVersionApi)

[GetVoteAccountsApi](https://www.solanakit.com/api/type-aliases/GetVoteAccountsApi)

[IsBlockhashValidApi](https://www.solanakit.com/api/type-aliases/IsBlockhashValidApi)

[MinimumLedgerSlotApi](https://www.solanakit.com/api/type-aliases/MinimumLedgerSlotApi)

[RequestAirdropApi](https://www.solanakit.com/api/type-aliases/RequestAirdropApi)

[SendTransactionApi](https://www.solanakit.com/api/type-aliases/SendTransactionApi)

[SimulateTransactionApi](https://www.solanakit.com/api/type-aliases/SimulateTransactionApi)

[SolanaRpcApi](https://www.solanakit.com/api/type-aliases/SolanaRpcApi)

[SolanaRpcApiDevnet](https://www.solanakit.com/api/type-aliases/SolanaRpcApiDevnet)

[SolanaRpcApiMainnet](https://www.solanakit.com/api/type-aliases/SolanaRpcApiMainnet)

[SolanaRpcApiTestnet](https://www.solanakit.com/api/type-aliases/SolanaRpcApiTestnet)

Functions (1)

[createSolanaRpcApi](https://www.solanakit.com/api/functions/createSolanaRpcApi)

### [`@solana/rpc-parsed-types`](https://www.solanakit.com/api\#solanarpc-parsed-types)

Types (11)

[JsonParsedAddressLookupTableAccount](https://www.solanakit.com/api/type-aliases/JsonParsedAddressLookupTableAccount)

[JsonParsedBpfUpgradeableLoaderProgramAccount](https://www.solanakit.com/api/type-aliases/JsonParsedBpfUpgradeableLoaderProgramAccount)

[JsonParsedConfigProgramAccount](https://www.solanakit.com/api/type-aliases/JsonParsedConfigProgramAccount)

[JsonParsedNonceAccount](https://www.solanakit.com/api/type-aliases/JsonParsedNonceAccount)

[JsonParsedStakeProgramAccount](https://www.solanakit.com/api/type-aliases/JsonParsedStakeProgramAccount)

[JsonParsedSysvarAccount](https://www.solanakit.com/api/type-aliases/JsonParsedSysvarAccount)

[JsonParsedTokenAccount](https://www.solanakit.com/api/type-aliases/JsonParsedTokenAccount)

[JsonParsedTokenProgramAccount](https://www.solanakit.com/api/type-aliases/JsonParsedTokenProgramAccount)

[JsonParsedVoteAccount](https://www.solanakit.com/api/type-aliases/JsonParsedVoteAccount)

[RpcParsedInfo](https://www.solanakit.com/api/type-aliases/RpcParsedInfo)

[RpcParsedType](https://www.solanakit.com/api/type-aliases/RpcParsedType)

### [`@solana/rpc-spec`](https://www.solanakit.com/api\#solanarpc-spec)

Types (8)

[PendingRpcRequest](https://www.solanakit.com/api/type-aliases/PendingRpcRequest)

[Rpc](https://www.solanakit.com/api/type-aliases/Rpc)

[RpcApi](https://www.solanakit.com/api/type-aliases/RpcApi)

[RpcApiConfig](https://www.solanakit.com/api/type-aliases/RpcApiConfig)

[RpcConfig](https://www.solanakit.com/api/type-aliases/RpcConfig)

[RpcPlan](https://www.solanakit.com/api/type-aliases/RpcPlan)

[RpcSendOptions](https://www.solanakit.com/api/type-aliases/RpcSendOptions)

[RpcTransport](https://www.solanakit.com/api/type-aliases/RpcTransport)

Functions (3)

[createJsonRpcApi](https://www.solanakit.com/api/functions/createJsonRpcApi)

[createRpc](https://www.solanakit.com/api/functions/createRpc)

[isJsonRpcPayload](https://www.solanakit.com/api/functions/isJsonRpcPayload)

### [`@solana/rpc-spec-types`](https://www.solanakit.com/api\#solanarpc-spec-types)

Types (10)

[Callable](https://www.solanakit.com/api/type-aliases/Callable)

[Flatten](https://www.solanakit.com/api/type-aliases/Flatten)

[OverloadImplementations](https://www.solanakit.com/api/type-aliases/OverloadImplementations)

[Overloads](https://www.solanakit.com/api/type-aliases/Overloads)

[RpcRequest](https://www.solanakit.com/api/type-aliases/RpcRequest)

[RpcRequestTransformer](https://www.solanakit.com/api/type-aliases/RpcRequestTransformer)

[RpcResponse](https://www.solanakit.com/api/type-aliases/RpcResponse)

[RpcResponseData](https://www.solanakit.com/api/type-aliases/RpcResponseData)

[RpcResponseTransformer](https://www.solanakit.com/api/type-aliases/RpcResponseTransformer)

[UnionToIntersection](https://www.solanakit.com/api/type-aliases/UnionToIntersection)

Functions (3)

[createRpcMessage](https://www.solanakit.com/api/functions/createRpcMessage)

[parseJsonWithBigInts](https://www.solanakit.com/api/functions/parseJsonWithBigInts)

[stringifyJsonWithBigInts](https://www.solanakit.com/api/functions/stringifyJsonWithBigInts)

### [`@solana/rpc-subscriptions`](https://www.solanakit.com/api\#solanarpc-subscriptions)

Packages (2)

[@solana/rpc-subscriptions-api](https://www.solanakit.com/api#solanarpc-subscriptions-api)

[@solana/rpc-subscriptions-spec](https://www.solanakit.com/api#solanarpc-subscriptions-spec)

Types (21)

[DefaultRpcSubscriptionsChannelConfig](https://www.solanakit.com/api/type-aliases/DefaultRpcSubscriptionsChannelConfig)

[DefaultRpcSubscriptionsTransportConfig](https://www.solanakit.com/api/type-aliases/DefaultRpcSubscriptionsTransportConfig)

[RpcSubscriptionsChannelCreatorDevnet](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsChannelCreatorDevnet)

[RpcSubscriptionsChannelCreatorFromClusterUrl](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsChannelCreatorFromClusterUrl)

[RpcSubscriptionsChannelCreatorMainnet](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsChannelCreatorMainnet)

[RpcSubscriptionsChannelCreatorTestnet](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsChannelCreatorTestnet)

[RpcSubscriptionsChannelCreatorWithCluster](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsChannelCreatorWithCluster)

[RpcSubscriptionsChannelDevnet](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsChannelDevnet)

[RpcSubscriptionsChannelFromClusterUrl](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsChannelFromClusterUrl)

[RpcSubscriptionsChannelMainnet](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsChannelMainnet)

[RpcSubscriptionsChannelTestnet](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsChannelTestnet)

[RpcSubscriptionsChannelWithCluster](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsChannelWithCluster)

[RpcSubscriptionsDevnet](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsDevnet)

[RpcSubscriptionsFromTransport](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsFromTransport)

[RpcSubscriptionsMainnet](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsMainnet)

[RpcSubscriptionsTestnet](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsTestnet)

[RpcSubscriptionsTransportDevnet](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsTransportDevnet)

[RpcSubscriptionsTransportFromClusterUrl](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsTransportFromClusterUrl)

[RpcSubscriptionsTransportMainnet](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsTransportMainnet)

[RpcSubscriptionsTransportTestnet](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsTransportTestnet)

[RpcSubscriptionsTransportWithCluster](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsTransportWithCluster)

Functions (8)

[createDefaultRpcSubscriptionsChannelCreator](https://www.solanakit.com/api/functions/createDefaultRpcSubscriptionsChannelCreator)

[createDefaultRpcSubscriptionsTransport](https://www.solanakit.com/api/functions/createDefaultRpcSubscriptionsTransport)

[createDefaultSolanaRpcSubscriptionsChannelCreator](https://www.solanakit.com/api/functions/createDefaultSolanaRpcSubscriptionsChannelCreator)

[createRpcSubscriptionsTransportFromChannelCreator](https://www.solanakit.com/api/functions/createRpcSubscriptionsTransportFromChannelCreator)

[createSolanaRpcSubscriptions](https://www.solanakit.com/api/functions/createSolanaRpcSubscriptions)

[createSolanaRpcSubscriptions\_UNSTABLE](https://www.solanakit.com/api/functions/createSolanaRpcSubscriptions_UNSTABLE)

[createSolanaRpcSubscriptionsFromTransport](https://www.solanakit.com/api/functions/createSolanaRpcSubscriptionsFromTransport)

[getRpcSubscriptionsChannelWithJSONSerialization](https://www.solanakit.com/api/functions/getRpcSubscriptionsChannelWithJSONSerialization)

Variables (1)

[DEFAULT\_RPC\_SUBSCRIPTIONS\_CONFIG](https://www.solanakit.com/api/variables/DEFAULT_RPC_SUBSCRIPTIONS_CONFIG)

### [`@solana/rpc-subscriptions-api`](https://www.solanakit.com/api\#solanarpc-subscriptions-api)

Types (11)

[AccountNotificationsApi](https://www.solanakit.com/api/type-aliases/AccountNotificationsApi)

[BlockNotificationsApi](https://www.solanakit.com/api/type-aliases/BlockNotificationsApi)

[LogsNotificationsApi](https://www.solanakit.com/api/type-aliases/LogsNotificationsApi)

[ProgramNotificationsApi](https://www.solanakit.com/api/type-aliases/ProgramNotificationsApi)

[RootNotificationsApi](https://www.solanakit.com/api/type-aliases/RootNotificationsApi)

[SignatureNotificationsApi](https://www.solanakit.com/api/type-aliases/SignatureNotificationsApi)

[SlotNotificationsApi](https://www.solanakit.com/api/type-aliases/SlotNotificationsApi)

[SlotsUpdatesNotificationsApi](https://www.solanakit.com/api/type-aliases/SlotsUpdatesNotificationsApi)

[SolanaRpcSubscriptionsApi](https://www.solanakit.com/api/type-aliases/SolanaRpcSubscriptionsApi)

[SolanaRpcSubscriptionsApiUnstable](https://www.solanakit.com/api/type-aliases/SolanaRpcSubscriptionsApiUnstable)

[VoteNotificationsApi](https://www.solanakit.com/api/type-aliases/VoteNotificationsApi)

Functions (2)

[createSolanaRpcSubscriptionsApi](https://www.solanakit.com/api/functions/createSolanaRpcSubscriptionsApi)

[createSolanaRpcSubscriptionsApi\_UNSTABLE](https://www.solanakit.com/api/functions/createSolanaRpcSubscriptionsApi_UNSTABLE)

### [`@solana/rpc-subscriptions-channel-websocket`](https://www.solanakit.com/api\#solanarpc-subscriptions-channel-websocket)

Types (1)

[Config](https://www.solanakit.com/api/type-aliases/Config)

Functions (1)

[createWebSocketChannel](https://www.solanakit.com/api/functions/createWebSocketChannel)

### [`@solana/rpc-subscriptions-spec`](https://www.solanakit.com/api\#solanarpc-subscriptions-spec)

Types (13)

[PendingRpcSubscriptionsRequest](https://www.solanakit.com/api/type-aliases/PendingRpcSubscriptionsRequest)

[RpcSubscribeOptions](https://www.solanakit.com/api/type-aliases/RpcSubscribeOptions)

[RpcSubscriptionChannelEvents](https://www.solanakit.com/api/type-aliases/RpcSubscriptionChannelEvents)

[RpcSubscriptions](https://www.solanakit.com/api/type-aliases/RpcSubscriptions)

[RpcSubscriptionsApi](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsApi)

[RpcSubscriptionsApiConfig](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsApiConfig)

[RpcSubscriptionsApiMethods](https://www.solanakit.com/api/interfaces/RpcSubscriptionsApiMethods)

[RpcSubscriptionsChannel](https://www.solanakit.com/api/interfaces/RpcSubscriptionsChannel)

[RpcSubscriptionsChannelCreator](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsChannelCreator)

[RpcSubscriptionsConfig](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsConfig)

[RpcSubscriptionsPlan](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsPlan)

[RpcSubscriptionsTransport](https://www.solanakit.com/api/interfaces/RpcSubscriptionsTransport)

[RpcSubscriptionsTransportDataEvents](https://www.solanakit.com/api/type-aliases/RpcSubscriptionsTransportDataEvents)

Functions (5)

[createRpcSubscriptionsApi](https://www.solanakit.com/api/functions/createRpcSubscriptionsApi)

[createSubscriptionRpc](https://www.solanakit.com/api/functions/createSubscriptionRpc)

[executeRpcPubSubSubscriptionPlan](https://www.solanakit.com/api/functions/executeRpcPubSubSubscriptionPlan)

[transformChannelInboundMessages](https://www.solanakit.com/api/functions/transformChannelInboundMessages)

[transformChannelOutboundMessages](https://www.solanakit.com/api/functions/transformChannelOutboundMessages)

### [`@solana/rpc-transformers`](https://www.solanakit.com/api\#solanarpc-transformers)

Types (7)

[AllowedNumericKeypaths](https://www.solanakit.com/api/type-aliases/AllowedNumericKeypaths)

[IntegerOverflowHandler](https://www.solanakit.com/api/type-aliases/IntegerOverflowHandler)

[KeyPath](https://www.solanakit.com/api/type-aliases/KeyPath)

[KeyPathWildcard](https://www.solanakit.com/api/type-aliases/KeyPathWildcard)

[RequestTransformerConfig](https://www.solanakit.com/api/type-aliases/RequestTransformerConfig)

[ResponseTransformerConfig](https://www.solanakit.com/api/type-aliases/ResponseTransformerConfig)

[TraversalState](https://www.solanakit.com/api/type-aliases/TraversalState)

Functions (11)

[getBigIntDowncastRequestTransformer](https://www.solanakit.com/api/functions/getBigIntDowncastRequestTransformer)

[getBigIntUpcastResponseTransformer](https://www.solanakit.com/api/functions/getBigIntUpcastResponseTransformer)

[getDefaultCommitmentRequestTransformer](https://www.solanakit.com/api/functions/getDefaultCommitmentRequestTransformer)

[getDefaultRequestTransformerForSolanaRpc](https://www.solanakit.com/api/functions/getDefaultRequestTransformerForSolanaRpc)

[getDefaultResponseTransformerForSolanaRpc](https://www.solanakit.com/api/functions/getDefaultResponseTransformerForSolanaRpc)

[getDefaultResponseTransformerForSolanaRpcSubscriptions](https://www.solanakit.com/api/functions/getDefaultResponseTransformerForSolanaRpcSubscriptions)

[getIntegerOverflowRequestTransformer](https://www.solanakit.com/api/functions/getIntegerOverflowRequestTransformer)

[getResultResponseTransformer](https://www.solanakit.com/api/functions/getResultResponseTransformer)

[getThrowSolanaErrorResponseTransformer](https://www.solanakit.com/api/functions/getThrowSolanaErrorResponseTransformer)

[getTreeWalkerRequestTransformer](https://www.solanakit.com/api/functions/getTreeWalkerRequestTransformer)

[getTreeWalkerResponseTransformer](https://www.solanakit.com/api/functions/getTreeWalkerResponseTransformer)

Variables (5)

[innerInstructionsConfigs](https://www.solanakit.com/api/variables/innerInstructionsConfigs)

[jsonParsedAccountsConfigs](https://www.solanakit.com/api/variables/jsonParsedAccountsConfigs)

[jsonParsedTokenAccountsConfigs](https://www.solanakit.com/api/variables/jsonParsedTokenAccountsConfigs)

[KEYPATH\_WILDCARD](https://www.solanakit.com/api/variables/KEYPATH_WILDCARD)

[messageConfig](https://www.solanakit.com/api/variables/messageConfig)

### [`@solana/rpc-transport-http`](https://www.solanakit.com/api\#solanarpc-transport-http)

Functions (2)

[createHttpTransport](https://www.solanakit.com/api/functions/createHttpTransport)

[createHttpTransportForSolanaRpc](https://www.solanakit.com/api/functions/createHttpTransportForSolanaRpc)

### [`@solana/rpc-types`](https://www.solanakit.com/api\#solanarpc-types)

Types (44)

[AccountInfoBase](https://www.solanakit.com/api/type-aliases/AccountInfoBase)

[AccountInfoWithBase58Bytes](https://www.solanakit.com/api/type-aliases/AccountInfoWithBase58Bytes)

[AccountInfoWithBase58EncodedData](https://www.solanakit.com/api/type-aliases/AccountInfoWithBase58EncodedData)

[AccountInfoWithBase64EncodedData](https://www.solanakit.com/api/type-aliases/AccountInfoWithBase64EncodedData)

[AccountInfoWithBase64EncodedZStdCompressedData](https://www.solanakit.com/api/type-aliases/AccountInfoWithBase64EncodedZStdCompressedData)

[AccountInfoWithJsonData](https://www.solanakit.com/api/type-aliases/AccountInfoWithJsonData)

[AccountInfoWithPubkey](https://www.solanakit.com/api/type-aliases/AccountInfoWithPubkey)

[Base58EncodedBytes](https://www.solanakit.com/api/type-aliases/Base58EncodedBytes)

[Base58EncodedDataResponse](https://www.solanakit.com/api/type-aliases/Base58EncodedDataResponse)

[Base64EncodedBytes](https://www.solanakit.com/api/type-aliases/Base64EncodedBytes)

[Base64EncodedDataResponse](https://www.solanakit.com/api/type-aliases/Base64EncodedDataResponse)

[Base64EncodedZStdCompressedBytes](https://www.solanakit.com/api/type-aliases/Base64EncodedZStdCompressedBytes)

[Base64EncodedZStdCompressedDataResponse](https://www.solanakit.com/api/type-aliases/Base64EncodedZStdCompressedDataResponse)

[Blockhash](https://www.solanakit.com/api/type-aliases/Blockhash)

[ClusterUrl](https://www.solanakit.com/api/type-aliases/ClusterUrl)

[Commitment](https://www.solanakit.com/api/type-aliases/Commitment)

[DataSlice](https://www.solanakit.com/api/type-aliases/DataSlice)

[DevnetUrl](https://www.solanakit.com/api/type-aliases/DevnetUrl)

[Epoch](https://www.solanakit.com/api/type-aliases/Epoch)

[F64UnsafeSeeDocumentation](https://www.solanakit.com/api/type-aliases/F64UnsafeSeeDocumentation)

[GetProgramAccountsDatasizeFilter](https://www.solanakit.com/api/type-aliases/GetProgramAccountsDatasizeFilter)

[GetProgramAccountsMemcmpFilter](https://www.solanakit.com/api/type-aliases/GetProgramAccountsMemcmpFilter)

[Lamports](https://www.solanakit.com/api/type-aliases/Lamports)

[MainnetUrl](https://www.solanakit.com/api/type-aliases/MainnetUrl)

[MicroLamports](https://www.solanakit.com/api/type-aliases/MicroLamports)

[Reward](https://www.solanakit.com/api/type-aliases/Reward)

[SignedLamports](https://www.solanakit.com/api/type-aliases/SignedLamports)

[Slot](https://www.solanakit.com/api/type-aliases/Slot)

[SolanaRpcResponse](https://www.solanakit.com/api/type-aliases/SolanaRpcResponse)

[StringifiedBigInt](https://www.solanakit.com/api/type-aliases/StringifiedBigInt)

[StringifiedNumber](https://www.solanakit.com/api/type-aliases/StringifiedNumber)

[TestnetUrl](https://www.solanakit.com/api/type-aliases/TestnetUrl)

[TokenAmount](https://www.solanakit.com/api/type-aliases/TokenAmount)

[TokenBalance](https://www.solanakit.com/api/type-aliases/TokenBalance)

[TransactionError](https://www.solanakit.com/api/type-aliases/TransactionError)

[TransactionForAccounts](https://www.solanakit.com/api/type-aliases/TransactionForAccounts)

[TransactionForFullBase58](https://www.solanakit.com/api/type-aliases/TransactionForFullBase58)

[TransactionForFullBase64](https://www.solanakit.com/api/type-aliases/TransactionForFullBase64)

[TransactionForFullJson](https://www.solanakit.com/api/type-aliases/TransactionForFullJson)

[TransactionForFullJsonParsed](https://www.solanakit.com/api/type-aliases/TransactionForFullJsonParsed)

[TransactionForFullMetaInnerInstructionsParsed](https://www.solanakit.com/api/type-aliases/TransactionForFullMetaInnerInstructionsParsed)

[TransactionForFullMetaInnerInstructionsUnparsed](https://www.solanakit.com/api/type-aliases/TransactionForFullMetaInnerInstructionsUnparsed)

[TransactionStatus](https://www.solanakit.com/api/type-aliases/TransactionStatus)

[UnixTimestamp](https://www.solanakit.com/api/type-aliases/UnixTimestamp)

Functions (29)

[assertIsBlockhash](https://www.solanakit.com/api/functions/assertIsBlockhash)

[assertIsLamports](https://www.solanakit.com/api/functions/assertIsLamports)

[assertIsStringifiedBigInt](https://www.solanakit.com/api/functions/assertIsStringifiedBigInt)

[assertIsStringifiedNumber](https://www.solanakit.com/api/functions/assertIsStringifiedNumber)

[assertIsUnixTimestamp](https://www.solanakit.com/api/functions/assertIsUnixTimestamp)

[blockhash](https://www.solanakit.com/api/functions/blockhash)

[commitmentComparator](https://www.solanakit.com/api/functions/commitmentComparator)

[devnet](https://www.solanakit.com/api/functions/devnet)

[getBlockhashCodec](https://www.solanakit.com/api/functions/getBlockhashCodec)

[getBlockhashComparator](https://www.solanakit.com/api/functions/getBlockhashComparator)

[getBlockhashDecoder](https://www.solanakit.com/api/functions/getBlockhashDecoder)

[getBlockhashEncoder](https://www.solanakit.com/api/functions/getBlockhashEncoder)

[getDefaultLamportsCodec](https://www.solanakit.com/api/functions/getDefaultLamportsCodec)

[getDefaultLamportsDecoder](https://www.solanakit.com/api/functions/getDefaultLamportsDecoder)

[getDefaultLamportsEncoder](https://www.solanakit.com/api/functions/getDefaultLamportsEncoder)

[getLamportsCodec](https://www.solanakit.com/api/functions/getLamportsCodec)

[getLamportsDecoder](https://www.solanakit.com/api/functions/getLamportsDecoder)

[getLamportsEncoder](https://www.solanakit.com/api/functions/getLamportsEncoder)

[isBlockhash](https://www.solanakit.com/api/functions/isBlockhash)

[isLamports](https://www.solanakit.com/api/functions/isLamports)

[isStringifiedBigInt](https://www.solanakit.com/api/functions/isStringifiedBigInt)

[isStringifiedNumber](https://www.solanakit.com/api/functions/isStringifiedNumber)

[isUnixTimestamp](https://www.solanakit.com/api/functions/isUnixTimestamp)

[lamports](https://www.solanakit.com/api/functions/lamports)

[mainnet](https://www.solanakit.com/api/functions/mainnet)

[stringifiedBigInt](https://www.solanakit.com/api/functions/stringifiedBigInt)

[stringifiedNumber](https://www.solanakit.com/api/functions/stringifiedNumber)

[testnet](https://www.solanakit.com/api/functions/testnet)

[unixTimestamp](https://www.solanakit.com/api/functions/unixTimestamp)

### [`@solana/signers`](https://www.solanakit.com/api\#solanasigners)

Types (23)

[AccountSignerMeta](https://www.solanakit.com/api/interfaces/AccountSignerMeta)

[BaseSignerConfig](https://www.solanakit.com/api/type-aliases/BaseSignerConfig)

[BaseTransactionSignerConfig](https://www.solanakit.com/api/interfaces/BaseTransactionSignerConfig)

[InstructionWithSigners](https://www.solanakit.com/api/interfaces/InstructionWithSigners)

[KeyPairSigner](https://www.solanakit.com/api/type-aliases/KeyPairSigner)

[MessageModifyingSigner](https://www.solanakit.com/api/type-aliases/MessageModifyingSigner)

[MessageModifyingSignerConfig](https://www.solanakit.com/api/type-aliases/MessageModifyingSignerConfig)

[MessagePartialSigner](https://www.solanakit.com/api/type-aliases/MessagePartialSigner)

[MessagePartialSignerConfig](https://www.solanakit.com/api/type-aliases/MessagePartialSignerConfig)

[MessageSigner](https://www.solanakit.com/api/type-aliases/MessageSigner)

[NoopSigner](https://www.solanakit.com/api/type-aliases/NoopSigner)

[SignableMessage](https://www.solanakit.com/api/type-aliases/SignableMessage)

[SignatureDictionary](https://www.solanakit.com/api/type-aliases/SignatureDictionary)

[TransactionMessageWithFeePayerSigner](https://www.solanakit.com/api/interfaces/TransactionMessageWithFeePayerSigner)

[TransactionMessageWithSigners](https://www.solanakit.com/api/type-aliases/TransactionMessageWithSigners)

[TransactionMessageWithSingleSendingSigner](https://www.solanakit.com/api/type-aliases/TransactionMessageWithSingleSendingSigner)

[TransactionModifyingSigner](https://www.solanakit.com/api/type-aliases/TransactionModifyingSigner)

[TransactionModifyingSignerConfig](https://www.solanakit.com/api/type-aliases/TransactionModifyingSignerConfig)

[TransactionPartialSigner](https://www.solanakit.com/api/type-aliases/TransactionPartialSigner)

[TransactionPartialSignerConfig](https://www.solanakit.com/api/type-aliases/TransactionPartialSignerConfig)

[TransactionSendingSigner](https://www.solanakit.com/api/type-aliases/TransactionSendingSigner)

[TransactionSendingSignerConfig](https://www.solanakit.com/api/type-aliases/TransactionSendingSignerConfig)

[TransactionSigner](https://www.solanakit.com/api/type-aliases/TransactionSigner)

Functions (32)

[addSignersToInstruction](https://www.solanakit.com/api/functions/addSignersToInstruction)

[addSignersToTransactionMessage](https://www.solanakit.com/api/functions/addSignersToTransactionMessage)

[assertIsKeyPairSigner](https://www.solanakit.com/api/functions/assertIsKeyPairSigner)

[assertIsMessageModifyingSigner](https://www.solanakit.com/api/functions/assertIsMessageModifyingSigner)

[assertIsMessagePartialSigner](https://www.solanakit.com/api/functions/assertIsMessagePartialSigner)

[assertIsMessageSigner](https://www.solanakit.com/api/functions/assertIsMessageSigner)

[assertIsTransactionMessageWithSingleSendingSigner](https://www.solanakit.com/api/functions/assertIsTransactionMessageWithSingleSendingSigner)

[assertIsTransactionModifyingSigner](https://www.solanakit.com/api/functions/assertIsTransactionModifyingSigner)

[assertIsTransactionPartialSigner](https://www.solanakit.com/api/functions/assertIsTransactionPartialSigner)

[assertIsTransactionSendingSigner](https://www.solanakit.com/api/functions/assertIsTransactionSendingSigner)

[assertIsTransactionSigner](https://www.solanakit.com/api/functions/assertIsTransactionSigner)

[createKeyPairSignerFromBytes](https://www.solanakit.com/api/functions/createKeyPairSignerFromBytes)

[createKeyPairSignerFromPrivateKeyBytes](https://www.solanakit.com/api/functions/createKeyPairSignerFromPrivateKeyBytes)

[createNoopSigner](https://www.solanakit.com/api/functions/createNoopSigner)

[createSignableMessage](https://www.solanakit.com/api/functions/createSignableMessage)

[createSignerFromKeyPair](https://www.solanakit.com/api/functions/createSignerFromKeyPair)

[generateKeyPairSigner](https://www.solanakit.com/api/functions/generateKeyPairSigner)

[getSignersFromInstruction](https://www.solanakit.com/api/functions/getSignersFromInstruction)

[getSignersFromTransactionMessage](https://www.solanakit.com/api/functions/getSignersFromTransactionMessage)

[isKeyPairSigner](https://www.solanakit.com/api/functions/isKeyPairSigner)

[isMessageModifyingSigner](https://www.solanakit.com/api/functions/isMessageModifyingSigner)

[isMessagePartialSigner](https://www.solanakit.com/api/functions/isMessagePartialSigner)

[isMessageSigner](https://www.solanakit.com/api/functions/isMessageSigner)

[isTransactionMessageWithSingleSendingSigner](https://www.solanakit.com/api/functions/isTransactionMessageWithSingleSendingSigner)

[isTransactionModifyingSigner](https://www.solanakit.com/api/functions/isTransactionModifyingSigner)

[isTransactionPartialSigner](https://www.solanakit.com/api/functions/isTransactionPartialSigner)

[isTransactionSendingSigner](https://www.solanakit.com/api/functions/isTransactionSendingSigner)

[isTransactionSigner](https://www.solanakit.com/api/functions/isTransactionSigner)

[partiallySignTransactionMessageWithSigners](https://www.solanakit.com/api/functions/partiallySignTransactionMessageWithSigners)

[setTransactionMessageFeePayerSigner](https://www.solanakit.com/api/functions/setTransactionMessageFeePayerSigner)

[signAndSendTransactionMessageWithSigners](https://www.solanakit.com/api/functions/signAndSendTransactionMessageWithSigners)

[signTransactionMessageWithSigners](https://www.solanakit.com/api/functions/signTransactionMessageWithSigners)

### [`@solana/subscribable`](https://www.solanakit.com/api\#solanasubscribable)

Types (3)

[DataPublisher](https://www.solanakit.com/api/interfaces/DataPublisher)

[TypedEventEmitter](https://www.solanakit.com/api/interfaces/TypedEventEmitter)

[TypedEventTarget](https://www.solanakit.com/api/interfaces/TypedEventTarget)

Functions (3)

[createAsyncIterableFromDataPublisher](https://www.solanakit.com/api/functions/createAsyncIterableFromDataPublisher)

[demultiplexDataPublisher](https://www.solanakit.com/api/functions/demultiplexDataPublisher)

[getDataPublisherFromEventEmitter](https://www.solanakit.com/api/functions/getDataPublisherFromEventEmitter)

### [`@solana/sysvars`](https://www.solanakit.com/api\#solanasysvars)

Types (9)

[SysvarClock](https://www.solanakit.com/api/type-aliases/SysvarClock)

[SysvarEpochRewards](https://www.solanakit.com/api/type-aliases/SysvarEpochRewards)

[SysvarEpochSchedule](https://www.solanakit.com/api/type-aliases/SysvarEpochSchedule)

[SysvarLastRestartSlot](https://www.solanakit.com/api/type-aliases/SysvarLastRestartSlot)

[SysvarRecentBlockhashes](https://www.solanakit.com/api/type-aliases/SysvarRecentBlockhashes)

[SysvarRent](https://www.solanakit.com/api/type-aliases/SysvarRent)

[SysvarSlotHashes](https://www.solanakit.com/api/type-aliases/SysvarSlotHashes)

[SysvarSlotHistory](https://www.solanakit.com/api/type-aliases/SysvarSlotHistory)

[SysvarStakeHistory](https://www.solanakit.com/api/type-aliases/SysvarStakeHistory)

Functions (38)

[fetchEncodedSysvarAccount](https://www.solanakit.com/api/functions/fetchEncodedSysvarAccount)

[fetchJsonParsedSysvarAccount](https://www.solanakit.com/api/functions/fetchJsonParsedSysvarAccount)

[fetchSysvarClock](https://www.solanakit.com/api/functions/fetchSysvarClock)

[fetchSysvarEpochRewards](https://www.solanakit.com/api/functions/fetchSysvarEpochRewards)

[fetchSysvarEpochSchedule](https://www.solanakit.com/api/functions/fetchSysvarEpochSchedule)

[fetchSysvarLastRestartSlot](https://www.solanakit.com/api/functions/fetchSysvarLastRestartSlot)

[fetchSysvarRecentBlockhashes](https://www.solanakit.com/api/functions/fetchSysvarRecentBlockhashes)

[fetchSysvarRent](https://www.solanakit.com/api/functions/fetchSysvarRent)

[fetchSysvarSlotHashes](https://www.solanakit.com/api/functions/fetchSysvarSlotHashes)

[fetchSysvarSlotHistory](https://www.solanakit.com/api/functions/fetchSysvarSlotHistory)

[fetchSysvarStakeHistory](https://www.solanakit.com/api/functions/fetchSysvarStakeHistory)

[getSysvarClockCodec](https://www.solanakit.com/api/functions/getSysvarClockCodec)

[getSysvarClockDecoder](https://www.solanakit.com/api/functions/getSysvarClockDecoder)

[getSysvarClockEncoder](https://www.solanakit.com/api/functions/getSysvarClockEncoder)

[getSysvarEpochRewardsCodec](https://www.solanakit.com/api/functions/getSysvarEpochRewardsCodec)

[getSysvarEpochRewardsDecoder](https://www.solanakit.com/api/functions/getSysvarEpochRewardsDecoder)

[getSysvarEpochRewardsEncoder](https://www.solanakit.com/api/functions/getSysvarEpochRewardsEncoder)

[getSysvarEpochScheduleCodec](https://www.solanakit.com/api/functions/getSysvarEpochScheduleCodec)

[getSysvarEpochScheduleDecoder](https://www.solanakit.com/api/functions/getSysvarEpochScheduleDecoder)

[getSysvarEpochScheduleEncoder](https://www.solanakit.com/api/functions/getSysvarEpochScheduleEncoder)

[getSysvarLastRestartSlotCodec](https://www.solanakit.com/api/functions/getSysvarLastRestartSlotCodec)

[getSysvarLastRestartSlotDecoder](https://www.solanakit.com/api/functions/getSysvarLastRestartSlotDecoder)

[getSysvarLastRestartSlotEncoder](https://www.solanakit.com/api/functions/getSysvarLastRestartSlotEncoder)

[getSysvarRecentBlockhashesCodec](https://www.solanakit.com/api/functions/getSysvarRecentBlockhashesCodec)

[getSysvarRecentBlockhashesDecoder](https://www.solanakit.com/api/functions/getSysvarRecentBlockhashesDecoder)

[getSysvarRecentBlockhashesEncoder](https://www.solanakit.com/api/functions/getSysvarRecentBlockhashesEncoder)

[getSysvarRentCodec](https://www.solanakit.com/api/functions/getSysvarRentCodec)

[getSysvarRentDecoder](https://www.solanakit.com/api/functions/getSysvarRentDecoder)

[getSysvarRentEncoder](https://www.solanakit.com/api/functions/getSysvarRentEncoder)

[getSysvarSlotHashesCodec](https://www.solanakit.com/api/functions/getSysvarSlotHashesCodec)

[getSysvarSlotHashesDecoder](https://www.solanakit.com/api/functions/getSysvarSlotHashesDecoder)

[getSysvarSlotHashesEncoder](https://www.solanakit.com/api/functions/getSysvarSlotHashesEncoder)

[getSysvarSlotHistoryCodec](https://www.solanakit.com/api/functions/getSysvarSlotHistoryCodec)

[getSysvarSlotHistoryDecoder](https://www.solanakit.com/api/functions/getSysvarSlotHistoryDecoder)

[getSysvarSlotHistoryEncoder](https://www.solanakit.com/api/functions/getSysvarSlotHistoryEncoder)

[getSysvarStakeHistoryCodec](https://www.solanakit.com/api/functions/getSysvarStakeHistoryCodec)

[getSysvarStakeHistoryDecoder](https://www.solanakit.com/api/functions/getSysvarStakeHistoryDecoder)

[getSysvarStakeHistoryEncoder](https://www.solanakit.com/api/functions/getSysvarStakeHistoryEncoder)

Variables (10)

[SYSVAR\_CLOCK\_ADDRESS](https://www.solanakit.com/api/variables/SYSVAR_CLOCK_ADDRESS)

[SYSVAR\_EPOCH\_REWARDS\_ADDRESS](https://www.solanakit.com/api/variables/SYSVAR_EPOCH_REWARDS_ADDRESS)

[SYSVAR\_EPOCH\_SCHEDULE\_ADDRESS](https://www.solanakit.com/api/variables/SYSVAR_EPOCH_SCHEDULE_ADDRESS)

[SYSVAR\_INSTRUCTIONS\_ADDRESS](https://www.solanakit.com/api/variables/SYSVAR_INSTRUCTIONS_ADDRESS)

[SYSVAR\_LAST\_RESTART\_SLOT\_ADDRESS](https://www.solanakit.com/api/variables/SYSVAR_LAST_RESTART_SLOT_ADDRESS)

[SYSVAR\_RECENT\_BLOCKHASHES\_ADDRESS](https://www.solanakit.com/api/variables/SYSVAR_RECENT_BLOCKHASHES_ADDRESS)

[SYSVAR\_RENT\_ADDRESS](https://www.solanakit.com/api/variables/SYSVAR_RENT_ADDRESS)

[SYSVAR\_SLOT\_HASHES\_ADDRESS](https://www.solanakit.com/api/variables/SYSVAR_SLOT_HASHES_ADDRESS)

[SYSVAR\_SLOT\_HISTORY\_ADDRESS](https://www.solanakit.com/api/variables/SYSVAR_SLOT_HISTORY_ADDRESS)

[SYSVAR\_STAKE\_HISTORY\_ADDRESS](https://www.solanakit.com/api/variables/SYSVAR_STAKE_HISTORY_ADDRESS)

### [`@solana/transaction-confirmation`](https://www.solanakit.com/api\#solanatransaction-confirmation)

Types (1)

[TransactionWithLastValidBlockHeight](https://www.solanakit.com/api/type-aliases/TransactionWithLastValidBlockHeight)

Functions (7)

[createBlockHeightExceedencePromiseFactory](https://www.solanakit.com/api/functions/createBlockHeightExceedencePromiseFactory)

[createNonceInvalidationPromiseFactory](https://www.solanakit.com/api/functions/createNonceInvalidationPromiseFactory)

[createRecentSignatureConfirmationPromiseFactory](https://www.solanakit.com/api/functions/createRecentSignatureConfirmationPromiseFactory)

[getTimeoutPromise](https://www.solanakit.com/api/functions/getTimeoutPromise)

[waitForDurableNonceTransactionConfirmation](https://www.solanakit.com/api/functions/waitForDurableNonceTransactionConfirmation)

[waitForRecentTransactionConfirmation](https://www.solanakit.com/api/functions/waitForRecentTransactionConfirmation)

[waitForRecentTransactionConfirmationUntilTimeout](https://www.solanakit.com/api/functions/waitForRecentTransactionConfirmationUntilTimeout)

### [`@solana/transaction-messages`](https://www.solanakit.com/api\#solanatransaction-messages)

Types (16)

[AddressesByLookupTableAddress](https://www.solanakit.com/api/type-aliases/AddressesByLookupTableAddress)

[BaseTransactionMessage](https://www.solanakit.com/api/type-aliases/BaseTransactionMessage)

[CompiledTransactionMessage](https://www.solanakit.com/api/type-aliases/CompiledTransactionMessage)

[CompiledTransactionMessageWithLifetime](https://www.solanakit.com/api/type-aliases/CompiledTransactionMessageWithLifetime)

[DecompileTransactionMessageConfig](https://www.solanakit.com/api/type-aliases/DecompileTransactionMessageConfig)

[ExcludeTransactionMessageDurableNonceLifetime](https://www.solanakit.com/api/type-aliases/ExcludeTransactionMessageDurableNonceLifetime)

[ExcludeTransactionMessageLifetime](https://www.solanakit.com/api/type-aliases/ExcludeTransactionMessageLifetime)

[ExcludeTransactionMessageWithinSizeLimit](https://www.solanakit.com/api/type-aliases/ExcludeTransactionMessageWithinSizeLimit)

[Nonce](https://www.solanakit.com/api/type-aliases/Nonce)

[TransactionMessage](https://www.solanakit.com/api/type-aliases/TransactionMessage)

[TransactionMessageWithBlockhashLifetime](https://www.solanakit.com/api/interfaces/TransactionMessageWithBlockhashLifetime)

[TransactionMessageWithDurableNonceLifetime](https://www.solanakit.com/api/interfaces/TransactionMessageWithDurableNonceLifetime)

[TransactionMessageWithFeePayer](https://www.solanakit.com/api/interfaces/TransactionMessageWithFeePayer)

[TransactionMessageWithinSizeLimit](https://www.solanakit.com/api/type-aliases/TransactionMessageWithinSizeLimit)

[TransactionMessageWithLifetime](https://www.solanakit.com/api/type-aliases/TransactionMessageWithLifetime)

[TransactionVersion](https://www.solanakit.com/api/type-aliases/TransactionVersion)

Functions (22)

[appendTransactionMessageInstruction](https://www.solanakit.com/api/functions/appendTransactionMessageInstruction)

[appendTransactionMessageInstructions](https://www.solanakit.com/api/functions/appendTransactionMessageInstructions)

[assertIsTransactionMessageWithBlockhashLifetime](https://www.solanakit.com/api/functions/assertIsTransactionMessageWithBlockhashLifetime)

[assertIsTransactionMessageWithDurableNonceLifetime](https://www.solanakit.com/api/functions/assertIsTransactionMessageWithDurableNonceLifetime)

[compileTransactionMessage](https://www.solanakit.com/api/functions/compileTransactionMessage)

[compressTransactionMessageUsingAddressLookupTables](https://www.solanakit.com/api/functions/compressTransactionMessageUsingAddressLookupTables)

[createTransactionMessage](https://www.solanakit.com/api/functions/createTransactionMessage)

[decompileTransactionMessage](https://www.solanakit.com/api/functions/decompileTransactionMessage)

[getCompiledTransactionMessageCodec](https://www.solanakit.com/api/functions/getCompiledTransactionMessageCodec)

[getCompiledTransactionMessageDecoder](https://www.solanakit.com/api/functions/getCompiledTransactionMessageDecoder)

[getCompiledTransactionMessageEncoder](https://www.solanakit.com/api/functions/getCompiledTransactionMessageEncoder)

[getTransactionVersionCodec](https://www.solanakit.com/api/functions/getTransactionVersionCodec)

[getTransactionVersionDecoder](https://www.solanakit.com/api/functions/getTransactionVersionDecoder)

[getTransactionVersionEncoder](https://www.solanakit.com/api/functions/getTransactionVersionEncoder)

[isAdvanceNonceAccountInstruction](https://www.solanakit.com/api/functions/isAdvanceNonceAccountInstruction)

[isTransactionMessageWithBlockhashLifetime](https://www.solanakit.com/api/functions/isTransactionMessageWithBlockhashLifetime)

[isTransactionMessageWithDurableNonceLifetime](https://www.solanakit.com/api/functions/isTransactionMessageWithDurableNonceLifetime)

[prependTransactionMessageInstruction](https://www.solanakit.com/api/functions/prependTransactionMessageInstruction)

[prependTransactionMessageInstructions](https://www.solanakit.com/api/functions/prependTransactionMessageInstructions)

[setTransactionMessageFeePayer](https://www.solanakit.com/api/functions/setTransactionMessageFeePayer)

[setTransactionMessageLifetimeUsingBlockhash](https://www.solanakit.com/api/functions/setTransactionMessageLifetimeUsingBlockhash)

[setTransactionMessageLifetimeUsingDurableNonce](https://www.solanakit.com/api/functions/setTransactionMessageLifetimeUsingDurableNonce)

### [`@solana/transactions`](https://www.solanakit.com/api\#solanatransactions)

Types (16)

[Base64EncodedWireTransaction](https://www.solanakit.com/api/type-aliases/Base64EncodedWireTransaction)

[FullySignedTransaction](https://www.solanakit.com/api/type-aliases/FullySignedTransaction)

[SendableTransaction](https://www.solanakit.com/api/type-aliases/SendableTransaction)

[SetTransactionLifetimeFromTransactionMessage](https://www.solanakit.com/api/type-aliases/SetTransactionLifetimeFromTransactionMessage)

[SetTransactionWithinSizeLimitFromTransactionMessage](https://www.solanakit.com/api/type-aliases/SetTransactionWithinSizeLimitFromTransactionMessage)

[SignaturesMap](https://www.solanakit.com/api/type-aliases/SignaturesMap)

[Transaction](https://www.solanakit.com/api/type-aliases/Transaction)

[TransactionBlockhashLifetime](https://www.solanakit.com/api/type-aliases/TransactionBlockhashLifetime)

[TransactionDurableNonceLifetime](https://www.solanakit.com/api/type-aliases/TransactionDurableNonceLifetime)

[TransactionFromTransactionMessage](https://www.solanakit.com/api/type-aliases/TransactionFromTransactionMessage)

[TransactionMessageBytes](https://www.solanakit.com/api/type-aliases/TransactionMessageBytes)

[TransactionMessageBytesBase64](https://www.solanakit.com/api/type-aliases/TransactionMessageBytesBase64)

[TransactionWithBlockhashLifetime](https://www.solanakit.com/api/type-aliases/TransactionWithBlockhashLifetime)

[TransactionWithDurableNonceLifetime](https://www.solanakit.com/api/type-aliases/TransactionWithDurableNonceLifetime)

[TransactionWithinSizeLimit](https://www.solanakit.com/api/type-aliases/TransactionWithinSizeLimit)

[TransactionWithLifetime](https://www.solanakit.com/api/type-aliases/TransactionWithLifetime)

Functions (18)

[assertIsFullySignedTransaction](https://www.solanakit.com/api/functions/assertIsFullySignedTransaction)

[assertIsSendableTransaction](https://www.solanakit.com/api/functions/assertIsSendableTransaction)

[assertIsTransactionMessageWithinSizeLimit](https://www.solanakit.com/api/functions/assertIsTransactionMessageWithinSizeLimit)

[assertIsTransactionWithinSizeLimit](https://www.solanakit.com/api/functions/assertIsTransactionWithinSizeLimit)

[compileTransaction](https://www.solanakit.com/api/functions/compileTransaction)

[getBase64EncodedWireTransaction](https://www.solanakit.com/api/functions/getBase64EncodedWireTransaction)

[getSignatureFromTransaction](https://www.solanakit.com/api/functions/getSignatureFromTransaction)

[getTransactionCodec](https://www.solanakit.com/api/functions/getTransactionCodec)

[getTransactionDecoder](https://www.solanakit.com/api/functions/getTransactionDecoder)

[getTransactionEncoder](https://www.solanakit.com/api/functions/getTransactionEncoder)

[getTransactionMessageSize](https://www.solanakit.com/api/functions/getTransactionMessageSize)

[getTransactionSize](https://www.solanakit.com/api/functions/getTransactionSize)

[isFullySignedTransaction](https://www.solanakit.com/api/functions/isFullySignedTransaction)

[isSendableTransaction](https://www.solanakit.com/api/functions/isSendableTransaction)

[isTransactionMessageWithinSizeLimit](https://www.solanakit.com/api/functions/isTransactionMessageWithinSizeLimit)

[isTransactionWithinSizeLimit](https://www.solanakit.com/api/functions/isTransactionWithinSizeLimit)

[partiallySignTransaction](https://www.solanakit.com/api/functions/partiallySignTransaction)

[signTransaction](https://www.solanakit.com/api/functions/signTransaction)

Variables (3)

[TRANSACTION\_PACKET\_HEADER](https://www.solanakit.com/api/variables/TRANSACTION_PACKET_HEADER)

[TRANSACTION\_PACKET\_SIZE](https://www.solanakit.com/api/variables/TRANSACTION_PACKET_SIZE)

[TRANSACTION\_SIZE\_LIMIT](https://www.solanakit.com/api/variables/TRANSACTION_SIZE_LIMIT)

### [`@solana/webcrypto-ed25519-polyfill`](https://www.solanakit.com/api\#solanawebcrypto-ed25519-polyfill)

Functions (1)

[install](https://www.solanakit.com/api/functions/install)

Note

This documentation is automatically generated from the source code using TypeDoc.

### On this page

[Need Help?](https://www.solanakit.com/api#need-help) [All Packages](https://www.solanakit.com/api#all-packages) [`@solana/kit`](https://www.solanakit.com/api#solanakit) [`@solana/accounts`](https://www.solanakit.com/api#solanaaccounts) [`@solana/addresses`](https://www.solanakit.com/api#solanaaddresses) [`@solana/assertions`](https://www.solanakit.com/api#solanaassertions) [`@solana/codecs`](https://www.solanakit.com/api#solanacodecs) [`@solana/codecs-core`](https://www.solanakit.com/api#solanacodecs-core) [`@solana/codecs-data-structures`](https://www.solanakit.com/api#solanacodecs-data-structures) [`@solana/codecs-numbers`](https://www.solanakit.com/api#solanacodecs-numbers) [`@solana/codecs-strings`](https://www.solanakit.com/api#solanacodecs-strings) [`@solana/compat`](https://www.solanakit.com/api#solanacompat) [`@solana/errors`](https://www.solanakit.com/api#solanaerrors) [`@solana/functional`](https://www.solanakit.com/api#solanafunctional) [`@solana/instruction-plans`](https://www.solanakit.com/api#solanainstruction-plans) [`@solana/instructions`](https://www.solanakit.com/api#solanainstructions) [`@solana/keys`](https://www.solanakit.com/api#solanakeys) [`@solana/nominal-types`](https://www.solanakit.com/api#solananominal-types) [`@solana/options`](https://www.solanakit.com/api#solanaoptions) [`@solana/programs`](https://www.solanakit.com/api#solanaprograms) [`@solana/promises`](https://www.solanakit.com/api#solanapromises) [`@solana/react`](https://www.solanakit.com/api#solanareact) [`@solana/rpc`](https://www.solanakit.com/api#solanarpc) [`@solana/rpc-api`](https://www.solanakit.com/api#solanarpc-api) [`@solana/rpc-parsed-types`](https://www.solanakit.com/api#solanarpc-parsed-types) [`@solana/rpc-spec`](https://www.solanakit.com/api#solanarpc-spec) [`@solana/rpc-spec-types`](https://www.solanakit.com/api#solanarpc-spec-types) [`@solana/rpc-subscriptions`](https://www.solanakit.com/api#solanarpc-subscriptions) [`@solana/rpc-subscriptions-api`](https://www.solanakit.com/api#solanarpc-subscriptions-api) [`@solana/rpc-subscriptions-channel-websocket`](https://www.solanakit.com/api#solanarpc-subscriptions-channel-websocket) [`@solana/rpc-subscriptions-spec`](https://www.solanakit.com/api#solanarpc-subscriptions-spec) [`@solana/rpc-transformers`](https://www.solanakit.com/api#solanarpc-transformers) [`@solana/rpc-transport-http`](https://www.solanakit.com/api#solanarpc-transport-http) [`@solana/rpc-types`](https://www.solanakit.com/api#solanarpc-types) [`@solana/signers`](https://www.solanakit.com/api#solanasigners) [`@solana/subscribable`](https://www.solanakit.com/api#solanasubscribable) [`@solana/sysvars`](https://www.solanakit.com/api#solanasysvars) [`@solana/transaction-confirmation`](https://www.solanakit.com/api#solanatransaction-confirmation) [`@solana/transaction-messages`](https://www.solanakit.com/api#solanatransaction-messages) [`@solana/transactions`](https://www.solanakit.com/api#solanatransactions) [`@solana/webcrypto-ed25519-polyfill`](https://www.solanakit.com/api#solanawebcrypto-ed25519-polyfill)