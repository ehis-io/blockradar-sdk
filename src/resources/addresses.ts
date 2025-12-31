import { BlockradarClient } from '../base';
import { Address, CreateAddressParams, ListParams, Transaction, Balance } from '../types';

export class Addresses extends BlockradarClient {
  async list(params?: ListParams) {
    return this.request<Address[]>('GET', '/addresses', undefined, params);
  }

  async create(data: CreateAddressParams) {
    return this.request<Address>('POST', '/addresses', data);
  }

  async get(addressId: string) {
    return this.request<Address>('GET', `/addresses/${addressId}`);
  }

  async getBalance(addressId: string, asset: string) {
    return this.request<Balance>('GET', `/addresses/${addressId}/balance`, undefined, { asset });
  }

  async getBalances(addressId: string) {
    return this.request<Balance[]>('GET', `/addresses/${addressId}/balances`);
  }

  async getTransactions(addressId: string, params?: ListParams) {
    return this.request<Transaction[]>('GET', `/addresses/${addressId}/transactions`, undefined, params);
  }

  async updateStatus(addressId: string, status: string) {
    return this.request<Address>('PATCH', `/addresses/${addressId}/status`, { status });
  }

  async whitelist(data: { walletId: string; address: string; label?: string }) {
    return this.request<Address>('POST', '/addresses/whitelist', data);
  }

  async deleteFromWhitelist(addressId: string) {
    return this.request<void>('DELETE', `/addresses/whitelist/${addressId}`);
  }
}
