import { BlockradarClient } from '../base';
export class Gateway extends BlockradarClient {
    async getDetails() {
        return this.request('GET', '/gateway');
    }
    async getTransactions() {
        return this.request('GET', '/gateway/transactions');
    }
    async getBalance() {
        return this.request('GET', '/gateway/balance');
    }
    async deposit(data) {
        return this.request('POST', '/gateway/deposit', data);
    }
    async getDepositFee(data) {
        return this.request('POST', '/gateway/deposit/fee', data);
    }
    async withdraw(data) {
        return this.request('POST', '/gateway/withdraw', data);
    }
    async getWithdrawFee(data) {
        return this.request('POST', '/gateway/withdraw/fee', data);
    }
}
