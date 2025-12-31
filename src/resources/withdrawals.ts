import { BlockradarClient } from '../base';

export interface WithdrawalParams {
  walletId: string;
  assetId?: string;
  amount?: string;
  address?: string;
  assets?: Array<{ assetId: string; amount: string; address: string }>;
}

export class Withdrawals extends BlockradarClient {
  async initiate(data: WithdrawalParams) {
    return this.request<any>('POST', `/wallets/${data.walletId}/withdrawals`, data);
  }

  async sign(data: WithdrawalParams) {
    return this.request<any>('POST', `/wallets/${data.walletId}/withdrawals/sign`, data);
  }

  async getFee(data: WithdrawalParams) {
    return this.request<any>('POST', `/wallets/${data.walletId}/withdrawals/fee`, data);
  }

  async initiateFromAddress(addressId: string, data: Omit<WithdrawalParams, 'walletId'>) {
    return this.request<any>('POST', `/addresses/${addressId}/withdrawals`, data);
  }

  async getFeeFromAddress(addressId: string, data: Omit<WithdrawalParams, 'walletId'>) {
    return this.request<any>('POST', `/addresses/${addressId}/withdrawals/fee`, data);
  }

  async signFromAddress(addressId: string, data: Omit<WithdrawalParams, 'walletId'>) {
    return this.request<any>('POST', `/addresses/${addressId}/withdrawals/sign`, data);
  }
}
