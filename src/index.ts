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

export class Blockradar {
  public readonly wallets: Wallets;
  public readonly addresses: Addresses;
  public readonly transactions: Transactions;
  public readonly withdrawals: Withdrawals;
  public readonly swaps: Swaps;
  public readonly virtualAccounts: VirtualAccounts;
  public readonly autoSettlements: AutoSettlements;
  public readonly gateway: Gateway;
  public readonly miscellaneous: Miscellaneous;

  constructor(apiKey: string) {
    this.wallets = new Wallets(apiKey);
    this.addresses = new Addresses(apiKey);
    this.transactions = new Transactions(apiKey);
    this.withdrawals = new Withdrawals(apiKey);
    this.swaps = new Swaps(apiKey);
    this.virtualAccounts = new VirtualAccounts(apiKey);
    this.autoSettlements = new AutoSettlements(apiKey);
    this.gateway = new Gateway(apiKey);
    this.miscellaneous = new Miscellaneous(apiKey);
  }
}
