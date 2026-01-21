/* decodeCpmmPool.js */
try {
  require('dotenv').config();
} catch (e) {
  // Optional dependency; use process.env if dotenv isn't installed.
}

const fs = require('fs');
const path = require('path');
const anchor = require('@coral-xyz/anchor');
const { Connection, PublicKey } = require('@solana/web3.js');

const RPC_URL = process.env.RPC_URL;
if (!RPC_URL) {
  console.error('Missing RPC_URL. Set it in .env or your shell environment.');
  process.exit(1);
}

// usage: node decodeCpmmPool.js <POOL_STATE_PUBKEY> [./idl/raydium_cp_swap.json]
async function main() {
  const poolStr = process.argv[2];
  if (!poolStr) {
    console.error('Usage: node decodeCpmmPool.js <POOL_STATE_PUBKEY> [idlPath]');
    process.exit(1);
  }

  const idlPath = process.argv[3] || path.join(__dirname, 'idl', 'raydium_cp_swap.json');
  const idl = JSON.parse(fs.readFileSync(idlPath, 'utf8'));

  const connection = new Connection(RPC_URL, { commitment: 'confirmed' });
  const pool = new PublicKey(poolStr);

  const info = await connection.getAccountInfo(pool, 'confirmed');
  if (!info) throw new Error('Account not found');

  console.log('pool:', pool.toBase58());
  console.log('owner:', info.owner.toBase58());
  console.log('dataLen:', info.data.length);

  // Anchor coder (no provider/wallet needed for pure decoding)
  const coder = new anchor.BorshAccountsCoder(idl);

  // Try decoding against every account type in the IDL until one works
  const accountNames = (idl.accounts || []).map((a) => a.name);

  let decoded = null;
  let decodedAs = null;

  for (const name of accountNames) {
    try {
      const d = coder.decode(name, info.data);
      if (d) {
        decoded = d;
        decodedAs = name;
        break;
      }
    } catch (e) {
      // ignore and keep trying
    }
  }

  if (!decoded) {
    console.log('\n❌ Could not decode with any IDL account type.');
    console.log('IDL accounts:', accountNames);
    console.log('Tip: confirm you downloaded the IDL for the CPMM / CP-Swap program (CPMMoo…).');
    process.exit(2);
  }

  console.log('\n✅ Decoded as:', decodedAs);

  // Print fields that look like vaults / mints / pubkeys
  const entries = Object.entries(decoded);

  const pubkeyish = (v) => {
    // Anchor typically gives PublicKey objects for pubkeys, but sometimes arrays/bytes.
    return v && typeof v === 'object' && typeof v.toBase58 === 'function';
  };

  const interesting = entries.filter(([k, v]) => {
    const key = k.toLowerCase();
    return (
      key.includes('vault') ||
      key.includes('mint') ||
      key.includes('token') ||
      key.includes('coin') ||
      key.includes('pc')
    );
  });

  console.log('\n--- Interesting fields ---');
  for (const [k, v] of interesting) {
    if (pubkeyish(v)) console.log(`${k}: ${v.toBase58()}`);
    else console.log(`${k}:`, v);
  }

  // Heuristic: find two vault pubkeys
  const vaultPks = interesting
    .filter(([k, v]) => k.toLowerCase().includes('vault') && pubkeyish(v))
    .map(([k, v]) => ({ k, pk: v }));

  if (vaultPks.length < 2) {
    console.log('\n⚠️ I did not find 2 obvious vault pubkeys in the decoded object.');
    console.log('But you *did* decode the pool state — inspect the printed fields above.');
    return;
  }

  console.log('\n--- Vault balances (parsed SPL) ---');
  for (const { k, pk } of vaultPks.slice(0, 4)) {
    const parsed = await connection.getParsedAccountInfo(pk, 'confirmed');
    const v = parsed.value;

    if (!v) {
      console.log(`${k}: ${pk.toBase58()} (missing)`);
      continue;
    }

    const data = v.data;
    if (data && data.parsed && data.parsed.info && data.parsed.info.tokenAmount) {
      const ta = data.parsed.info.tokenAmount;
      console.log(
        `${k}: ${pk.toBase58()} amount=${ta.amount} decimals=${ta.decimals} ui=${ta.uiAmountString}`
      );
    } else {
      console.log(`${k}: ${pk.toBase58()} (not parsed as SPL token account)`);
    }
  }

  console.log('\nDone.');
}

main().catch((e) => {
  console.error('Error:', e);
  process.exit(1);
});
