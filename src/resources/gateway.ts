import { BlockradarClient } from '../base';

export class Gateway extends BlockradarClient {
  async getDetails() {
    return this.request<any>('GET', '/gateway');
  }

  async getTransactions() {
    return this.request<any[]>('GET', '/gateway/transactions');
  }

  async getBalance() {
    return this.request<any>('GET', '/gateway/balance');
  }

  async deposit(data: any) {
    return this.request<any>('POST', '/gateway/deposit', data);
  }

  async getDepositFee(data: any) {
    return this.request<any>('POST', '/gateway/deposit/fee', data);
  }

  async withdraw(data: any) {
    return this.request<any>('POST', '/gateway/withdraw', data);
  }

  async getWithdrawFee(data: any) {
    return this.request<any>('POST', '/gateway/withdraw/fee', data);
  }
}
