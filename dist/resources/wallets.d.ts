import { BlockradarClient } from '../base';
import { Wallet, Balance } from '../types';
export declare class Wallets extends BlockradarClient {
    get(walletId: string): Promise<import("../types").BlockradarResponse<Wallet>>;
    update(walletId: string, data: Partial<Wallet>): Promise<import("../types").BlockradarResponse<Wallet>>;
    getBalance(walletId: string, asset: string): Promise<import("../types").BlockradarResponse<Balance>>;
    getBalances(walletId: string): Promise<import("../types").BlockradarResponse<Balance[]>>;
    triggerRescan(walletId: string): Promise<import("../types").BlockradarResponse<any>>;
    triggerSweep(walletId: string): Promise<import("../types").BlockradarResponse<any>>;
}
