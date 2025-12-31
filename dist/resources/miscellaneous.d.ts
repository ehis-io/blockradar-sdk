import { BlockradarClient } from '../base';
export declare class Miscellaneous extends BlockradarClient {
    getAssets(environment?: string): Promise<import("..").BlockradarResponse<any[]>>;
    getBlockchains(): Promise<import("..").BlockradarResponse<any[]>>;
    getRates(assets: string, currency: string): Promise<import("..").BlockradarResponse<any>>;
}
