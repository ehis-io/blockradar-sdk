import { Wallets } from './resources/wallets';
import { Addresses } from './resources/addresses';
import { Transactions } from './resources/transactions';
import { Withdrawals } from './resources/withdrawals';
import { Swaps } from './resources/swaps';
import { VirtualAccounts } from './resources/virtualAccounts';
import { AutoSettlements } from './resources/autoSettlements';
import { Gateway } from './resources/gateway';
import { Miscellaneous } from './resources/miscellaneous';
export * from './types';
export declare class Blockradar {
    readonly wallets: Wallets;
    readonly addresses: Addresses;
    readonly transactions: Transactions;
    readonly withdrawals: Withdrawals;
    readonly swaps: Swaps;
    readonly virtualAccounts: VirtualAccounts;
    readonly autoSettlements: AutoSettlements;
    readonly gateway: Gateway;
    readonly miscellaneous: Miscellaneous;
    constructor(apiKey: string);
}
