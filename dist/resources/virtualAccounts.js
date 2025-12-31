import { BlockradarClient } from '../base';
export class VirtualAccounts extends BlockradarClient {
    async createForWallet(walletId, data) {
        return this.request('POST', `/wallets/${walletId}/virtual-accounts`, data);
    }
    async getForWallet(walletId) {
        return this.request('GET', `/wallets/${walletId}/virtual-accounts`);
    }
    async updateWalletAccountStatus(walletId, status) {
        return this.request('PATCH', `/wallets/${walletId}/virtual-accounts/status`, { status });
    }
    async createForAddress(addressId, data) {
        return this.request('POST', `/addresses/${addressId}/virtual-accounts`, data);
    }
    async getForAddress(addressId) {
        return this.request('GET', `/addresses/${addressId}/virtual-accounts`);
    }
    async updateAddressAccountStatus(addressId, status) {
        return this.request('PATCH', `/addresses/${addressId}/virtual-accounts/status`, { status });
    }
}
