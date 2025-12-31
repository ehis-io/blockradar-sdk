import { BlockradarClient } from '../base';
export class Addresses extends BlockradarClient {
    async list(params) {
        return this.request('GET', '/addresses', undefined, params);
    }
    async create(data) {
        return this.request('POST', '/addresses', data);
    }
    async get(addressId) {
        return this.request('GET', `/addresses/${addressId}`);
    }
    async getBalance(addressId, asset) {
        return this.request('GET', `/addresses/${addressId}/balance`, undefined, { asset });
    }
    async getBalances(addressId) {
        return this.request('GET', `/addresses/${addressId}/balances`);
    }
    async getTransactions(addressId, params) {
        return this.request('GET', `/addresses/${addressId}/transactions`, undefined, params);
    }
    async updateStatus(addressId, status) {
        return this.request('PATCH', `/addresses/${addressId}/status`, { status });
    }
    async whitelist(data) {
        return this.request('POST', '/addresses/whitelist', data);
    }
    async deleteFromWhitelist(addressId) {
        return this.request('DELETE', `/addresses/whitelist/${addressId}`);
    }
}
