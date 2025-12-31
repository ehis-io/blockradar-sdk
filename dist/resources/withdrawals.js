import { BlockradarClient } from '../base';
export class Withdrawals extends BlockradarClient {
    async initiate(data) {
        return this.request('POST', `/wallets/${data.walletId}/withdrawals`, data);
    }
    async sign(data) {
        return this.request('POST', `/wallets/${data.walletId}/withdrawals/sign`, data);
    }
    async getFee(data) {
        return this.request('POST', `/wallets/${data.walletId}/withdrawals/fee`, data);
    }
    async initiateFromAddress(addressId, data) {
        return this.request('POST', `/addresses/${addressId}/withdrawals`, data);
    }
    async getFeeFromAddress(addressId, data) {
        return this.request('POST', `/addresses/${addressId}/withdrawals/fee`, data);
    }
    async signFromAddress(addressId, data) {
        return this.request('POST', `/addresses/${addressId}/withdrawals/sign`, data);
    }
}
