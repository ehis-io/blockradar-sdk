import { BlockradarClient } from '../base';
import { Transaction, ListParams } from '../types';

export class Transactions extends BlockradarClient {
  async list(walletId: string, params?: ListParams) {
    return this.request<Transaction[]>('GET', `/wallets/${walletId}/transactions`, undefined, params);
  }

  async get(walletId: string, transactionId: string) {
    return this.request<Transaction>('GET', `/wallets/${walletId}/transactions/${transactionId}`);
  }

  async resendWebhook(walletId: string, transactionId: string) {
    return this.request<void>('POST', `/wallets/${walletId}/transactions/${transactionId}/webhooks/resend`);
  }

  async triggerSweep(walletId: string, transactionId: string) {
    return this.request<void>('POST', `/wallets/${walletId}/transactions/${transactionId}/sweep`);
  }
}
