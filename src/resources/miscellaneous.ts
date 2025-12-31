import { BlockradarClient } from '../base';

export class Miscellaneous extends BlockradarClient {
  async getAssets(environment?: string) {
    return this.request<any[]>('GET', '/assets', undefined, { environment });
  }

  async getBlockchains() {
    return this.request<any[]>('GET', '/blockchains');
  }

  async getRates(assets: string, currency: string) {
    return this.request<any>('GET', '/rates', undefined, { assets, currency });
  }
}
