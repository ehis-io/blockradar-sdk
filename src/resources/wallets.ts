import { BlockradarClient } from '../base';
import { Wallet, Balance, ListParams } from '../types';

export class Wallets extends BlockradarClient {
  async get(walletId: string) {
    return this.request<Wallet>('GET', `/wallets/${walletId}`);
  }

  async update(walletId: string, data: Partial<Wallet>) {
    return this.request<Wallet>('PATCH', `/wallets/${walletId}`, data);
  }

  async getBalance(walletId: string, asset: string) {
    return this.request<Balance>('GET', `/wallets/${walletId}/balance`, undefined, { asset });
  }

  async getBalances(walletId: string) {
    return this.request<Balance[]>('GET', `/wallets/${walletId}/balances`);
  }

  async triggerRescan(walletId: string) {
    return this.request<any>('POST', `/wallets/${walletId}/rescan`);
  }

  async triggerSweep(walletId: string) {
    return this.request<any>('POST', `/wallets/${walletId}/sweep`);
  }
}
