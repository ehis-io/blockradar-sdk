import { BlockradarClient } from '../base';

export interface SwapParams {
  fromAsset: string;
  toAsset: string;
  amount: string;
  walletId: string;
}

export class Swaps extends BlockradarClient {
  async getQuote(data: SwapParams) {
    return this.request<any>('POST', '/swaps/quote', data);
  }

  async execute(data: SwapParams & { quoteId: string }) {
    return this.request<any>('POST', '/swaps/execute', data);
  }
}
