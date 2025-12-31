import { BlockradarClient } from '../base';
export interface SwapParams {
    fromAsset: string;
    toAsset: string;
    amount: string;
    walletId: string;
}
export declare class Swaps extends BlockradarClient {
    getQuote(data: SwapParams): Promise<import("..").BlockradarResponse<any>>;
    execute(data: SwapParams & {
        quoteId: string;
    }): Promise<import("..").BlockradarResponse<any>>;
}
