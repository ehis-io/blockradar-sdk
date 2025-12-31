import { BlockradarClient } from '../base';
export class Wallets extends BlockradarClient {
    async get(walletId) {
        return this.request('GET', `/wallets/${walletId}`);
    }
    async update(walletId, data) {
        return this.request('PATCH', `/wallets/${walletId}`, data);
    }
    async getBalance(walletId, asset) {
        return this.request('GET', `/wallets/${walletId}/balance`, undefined, { asset });
    }
    async getBalances(walletId) {
        return this.request('GET', `/wallets/${walletId}/balances`);
    }
    async triggerRescan(walletId) {
        return this.request('POST', `/wallets/${walletId}/rescan`);
    }
    async triggerSweep(walletId) {
        return this.request('POST', `/wallets/${walletId}/sweep`);
    }
}
