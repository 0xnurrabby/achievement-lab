<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,8,15&height=160&section=header&text=base-utils&fontSize=48&fontColor=000000&fontAlignY=38&desc=Lightweight+zero-dependency+utility+library+for+Base+chain&descAlignY=58&descSize=14&animation=fadeIn" width="100%"/>

<div align="center">

[![npm](https://img.shields.io/badge/npm-0.1.0-bbf7d0?style=for-the-badge&logoColor=000)](https://github.com/0xnurrabby/base-utils)
[![License](https://img.shields.io/badge/MIT-bfdbfe?style=for-the-badge&logoColor=000)](LICENSE)
[![Platform](https://img.shields.io/badge/Base%20Mainnet-fde68a?style=for-the-badge&logoColor=000)]()
[![Type](https://img.shields.io/badge/ESM%20Only-fca5a5?style=for-the-badge&logoColor=000)]()

</div>

<div align="center">
<i>Zero dependencies. Tree-shakeable. Covers the 90% of Base chain operations you actually need.</i>
</div>

---

## ✦ Install

```bash
npm install base-utils
```

Or use directly from source:

```bash
git clone https://github.com/0xnurrabby/base-utils
```

---

## ✦ Features

<div align="center">

| | Module | What it does |
|:---:|---|---|
| 🔢 | `utils/erc20.js` | Build ERC-20 transfer and approve calldata |
| 🔤 | `utils/hex.js` | toHex, fromHex, padHex, isHex |
| 📍 | `utils/address.js` | Shorten, validate, compare addresses |
| 💵 | `utils/usdc.js` | USDC contract address, toUnits, fromUnits |
| 🔢 | `utils/format.js` | formatEther, parseEther, formatUnits |
| ⛽ | `utils/gas.js` | Fetch current Base gas price |
| 📦 | `utils/batch.js` | Build and chunk address batches |
| ✍️ | `utils/signature.js` | Split and validate EVM signatures |
| 🏛️ | `utils/multicall.js` | Multicall3 call encoder |
| 🛡️ | `utils/validate.js` | isUint256, isTxHash, isBytes32 |
| 🧮 | `utils/math.js` | min, max, clamp, bps, percentOf for bigints |
| 🔁 | `utils/retry.js` | withRetry wrapper for flaky calls |
| 💾 | `utils/cache.js` | Simple TTL in-memory cache |
| 🌐 | `rpc/client.js` | Base RPC client with timeout |
| 🔍 | `rpc/balance.js` | Fetch ETH balance |
| 🔢 | `rpc/nonce.js` | Fetch nonce for address |
| 📜 | `rpc/log-decoder.js` | Decode ERC-20 Transfer events |
| 🔎 | `rpc/filter.js` | Build eth_getLogs filter objects |
| 📡 | `rpc/poller.js` | Subscribe to new blocks |
| 🧱 | `rpc/block.js` | Fetch block by number or tag |
| 📋 | `rpc/receipt.js` | Parse transaction receipts |
| 🗄️ | `rpc/storage.js` | Read contract storage slots |
| 📝 | `rpc/tx.js` | Fetch transaction by hash |
| 📊 | `data/constants.js` | Chain ID, addresses, Multicall3 |
| 🪙 | `data/tokens.json` | Common Base token list (USDC, WETH, DAI) |

</div>

---

## ✦ Quick Start

```js
import { buildBatch, chunk } from 'base-utils/utils/batch.js'
import { toUnits, USDC } from 'base-utils/utils/usdc.js'
import { call } from 'base-utils/rpc/client.js'

// Build a batch of USDC transfers
const addresses = ['0xabc...', '0xdef...', '0x123...']
const batch = buildBatch(addresses, toUnits('1.00'))
const chunks = chunk(batch, 100)

// Fetch current block
const block = await call('eth_blockNumber')
console.log('Current block:', parseInt(block.result, 16))
```

---

## ✦ Run from Source

Requirements: Node.js 18+

```bash
git clone https://github.com/0xnurrabby/base-utils
cd base-utils
node tests/hex.test.js
node tests/address.test.js
node tests/usdc.test.js
```

---

## ✦ Project Structure

```
base-utils/
  utils/
    erc20.js        ->  ERC-20 calldata builders
    hex.js          ->  hex encoding helpers
    address.js      ->  address utilities
    usdc.js         ->  USDC helpers for Base
    format.js       ->  number formatting
    gas.js          ->  gas price fetch
    batch.js        ->  batch address builder
    signature.js    ->  signature utilities
    multicall.js    ->  Multicall3 helper
    validate.js     ->  input validation
    math.js         ->  bigint math helpers
    retry.js        ->  retry wrapper
    cache.js        ->  TTL cache
  rpc/
    client.js       ->  Base RPC client with timeout
    balance.js      ->  ETH balance reader
    nonce.js        ->  nonce fetcher
    log-decoder.js  ->  Transfer event decoder
    filter.js       ->  log filter builder
    poller.js       ->  block poller
    block.js        ->  block fetch
    receipt.js      ->  receipt parser
    storage.js      ->  storage slot reader
    tx.js           ->  transaction fetch
  data/
    constants.js    ->  chain constants
    tokens.json     ->  Base token list
  types/
    index.d.ts      ->  TypeScript declarations
  tests/            ->  unit tests
  benchmarks/       ->  performance benchmarks
  index.js          ->  main exports
  package.json
```

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2,8,15&height=100&section=footer&animation=fadeIn" width="100%"/>

<div align="center">MIT License .... built by <a href="https://github.com/0xnurrabby">0xnurrabby</a></div>