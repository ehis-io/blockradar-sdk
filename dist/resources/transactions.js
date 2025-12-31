import { BlockradarClient } from '../base';
export class Transactions extends BlockradarClient {
    async list(walletId, params) {
        return this.request('GET', `/wallets/${walletId}/transactions`, undefined, params);
    }
    async get(walletId, transactionId) {
        return this.request('GET', `/wallets/${walletId}/transactions/${transactionId}`);
    }
    async resendWebhook(walletId, transactionId) {
        return this.request('POST', `/wallets/${walletId}/transactions/${transactionId}/webhooks/resend`);
    }
    async triggerSweep(walletId, transactionId) {
        return this.request('POST', `/wallets/${walletId}/transactions/${transactionId}/sweep`);
    }
}
