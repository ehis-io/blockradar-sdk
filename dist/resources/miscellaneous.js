import { BlockradarClient } from '../base';
export class Miscellaneous extends BlockradarClient {
    async getAssets(environment) {
        return this.request('GET', '/assets', undefined, { environment });
    }
    async getBlockchains() {
        return this.request('GET', '/blockchains');
    }
    async getRates(assets, currency) {
        return this.request('GET', '/rates', undefined, { assets, currency });
    }
}
