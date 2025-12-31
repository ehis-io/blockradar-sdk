import { BlockradarClient } from '../base';

export interface VirtualAccountParams {
  walletId?: string;
  addressId?: string;
  type: 'AUTO_FUNDING' | string;
  metadata?: Record<string, any>;
}

export class VirtualAccounts extends BlockradarClient {
  async createForWallet(walletId: string, data: Omit<VirtualAccountParams, 'walletId' | 'addressId'>) {
    return this.request<any>('POST', `/wallets/${walletId}/virtual-accounts`, data);
  }

  async getForWallet(walletId: string) {
    return this.request<any>('GET', `/wallets/${walletId}/virtual-accounts`);
  }

  async updateWalletAccountStatus(walletId: string, status: string) {
    return this.request<any>('PATCH', `/wallets/${walletId}/virtual-accounts/status`, { status });
  }

  async createForAddress(addressId: string, data: Omit<VirtualAccountParams, 'walletId' | 'addressId'>) {
    return this.request<any>('POST', `/addresses/${addressId}/virtual-accounts`, data);
  }

  async getForAddress(addressId: string) {
    return this.request<any>('GET', `/addresses/${addressId}/virtual-accounts`);
  }

  async updateAddressAccountStatus(addressId: string, status: string) {
    return this.request<any>('PATCH', `/addresses/${addressId}/virtual-accounts/status`, { status });
  }
}
