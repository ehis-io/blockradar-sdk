import { BlockradarClient } from '../base';
export class Swaps extends BlockradarClient {
    async getQuote(data) {
        return this.request('POST', '/swaps/quote', data);
    }
    async execute(data) {
        return this.request('POST', '/swaps/execute', data);
    }
}
