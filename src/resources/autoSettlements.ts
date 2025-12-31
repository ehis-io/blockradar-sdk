import { BlockradarClient } from '../base';

export class AutoSettlements extends BlockradarClient {
  // Wallet rules
  async getWalletConfig(walletId: string) {
    return this.request<any>('GET', `/wallets/${walletId}/auto-settlements/config`);
  }

  async updateWalletConfig(walletId: string, enabled: boolean) {
    return this.request<any>('PATCH', `/wallets/${walletId}/auto-settlements/config`, { enabled });
  }

  async listWalletRules(walletId: string) {
    return this.request<any[]>('GET', `/wallets/${walletId}/auto-settlements/rules`);
  }

  async createWalletRule(walletId: string, rule: any) {
    return this.request<any>('POST', `/wallets/${walletId}/auto-settlements/rules`, rule);
  }

  async deleteWalletRule(walletId: string, ruleId: string) {
    return this.request<void>('DELETE', `/wallets/${walletId}/auto-settlements/rules/${ruleId}`);
  }

  // Address rules
  async getAddressConfig(addressId: string) {
    return this.request<any>('GET', `/addresses/${addressId}/auto-settlements/config`);
  }

  async updateAddressConfig(addressId: string, enabled: boolean) {
    return this.request<any>('PATCH', `/addresses/${addressId}/auto-settlements/config`, { enabled });
  }

  async listAddressRules(addressId: string) {
    return this.request<any[]>('GET', `/addresses/${addressId}/auto-settlements/rules`);
  }

  async createAddressRule(addressId: string, rule: any) {
    return this.request<any>('POST', `/addresses/${addressId}/auto-settlements/rules`, rule);
  }

  async deleteAddressRule(addressId: string, ruleId: string) {
    return this.request<void>('DELETE', `/addresses/${addressId}/auto-settlements/rules/${ruleId}`);
  }
}
