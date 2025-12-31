import { BlockradarClient } from '../base';
export class AutoSettlements extends BlockradarClient {
    // Wallet rules
    async getWalletConfig(walletId) {
        return this.request('GET', `/wallets/${walletId}/auto-settlements/config`);
    }
    async updateWalletConfig(walletId, enabled) {
        return this.request('PATCH', `/wallets/${walletId}/auto-settlements/config`, { enabled });
    }
    async listWalletRules(walletId) {
        return this.request('GET', `/wallets/${walletId}/auto-settlements/rules`);
    }
    async createWalletRule(walletId, rule) {
        return this.request('POST', `/wallets/${walletId}/auto-settlements/rules`, rule);
    }
    async deleteWalletRule(walletId, ruleId) {
        return this.request('DELETE', `/wallets/${walletId}/auto-settlements/rules/${ruleId}`);
    }
    // Address rules
    async getAddressConfig(addressId) {
        return this.request('GET', `/addresses/${addressId}/auto-settlements/config`);
    }
    async updateAddressConfig(addressId, enabled) {
        return this.request('PATCH', `/addresses/${addressId}/auto-settlements/config`, { enabled });
    }
    async listAddressRules(addressId) {
        return this.request('GET', `/addresses/${addressId}/auto-settlements/rules`);
    }
    async createAddressRule(addressId, rule) {
        return this.request('POST', `/addresses/${addressId}/auto-settlements/rules`, rule);
    }
    async deleteAddressRule(addressId, ruleId) {
        return this.request('DELETE', `/addresses/${addressId}/auto-settlements/rules/${ruleId}`);
    }
}
