# Blockradar JavaScript SDK

A comprehensive, type-safe JavaScript/TypeScript SDK for the [Blockradar API](https://docs.blockradar.co). Enable seamless stablecoin deposits and payments in your fintech application.

## Table of Contents
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
  - [Wallets](#wallets)
  - [Addresses](#addresses)
  - [Transactions](#transactions)
  - [Withdrawals](#withdrawals)
  - [Virtual Accounts](#virtual-accounts)
  - [Swaps](#swaps)
  - [Auto-Settlements](#auto-settlements)
  - [Gateway](#gateway)
- [Development](#development)
- [Documentation](#documentation)

## Installation

```bash
npm install node-fetch
# Note: This SDK is currently in development. You can copy the src/ directory 
# or build it locally with 'npm run build'.
```

## Setup

Initialize the `Blockradar` client with your API key from the [Blockradar Dashboard](https://dashboard.blockradar.co).

```typescript
import { Blockradar } from 'blockradar';

const sdk = new Blockradar('your-api-key');
```

## Usage

### Wallets
Manage master wallets and check balances.

```typescript
const wallet = await sdk.wallets.get('wallet-id');
const balances = await sdk.wallets.getBalances('wallet-id');
```

### Addresses
Generate dedicated deposit addresses for your customers.

```typescript
const address = await sdk.addresses.create({
  walletId: 'wallet-id',
  label: 'Customer 123'
});
console.log(address.data.address);
```

### Transactions
Monitor incoming and outgoing transactions.

```typescript
const transactions = await sdk.transactions.list('wallet-id', { limit: 10 });
```

### Withdrawals
Initiate transfers of stablecoins.

```typescript
const withdrawal = await sdk.withdrawals.initiate({
  walletId: 'wallet-id',
  assetId: 'USDT',
  amount: '100',
  address: '0x...'
});
```

### Virtual Accounts
Create fiat-to-stablecoin virtual NGN accounts.

```typescript
const va = await sdk.virtualAccounts.createForWallet('wallet-id', {
  type: 'AUTO_FUNDING'
});
```

### Swaps
Exchange stablecoins across blockchains.

```typescript
const quote = await sdk.swaps.getQuote({
  fromAsset: 'USDT',
  toAsset: 'USDC',
  amount: '50',
  walletId: 'wallet-id'
});
```

### Auto-Settlements
Automate fund movement between wallets.

```typescript
const config = await sdk.autoSettlements.getWalletConfig('wallet-id');
```

### Gateway
Access unified, chain-abstracted balances.

```typescript
const balance = await sdk.gateway.getBalance();
```

## Development

### Build
```bash
npm run build
```

### Test
```bash
npm test
```

## Documentation
For detailed API references, visit the [official Blockradar documentation](https://docs.blockradar.co).
