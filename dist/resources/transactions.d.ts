import { BlockradarClient } from '../base';
import { Transaction, ListParams } from '../types';
export declare class Transactions extends BlockradarClient {
    list(walletId: string, params?: ListParams): Promise<import("../types").BlockradarResponse<Transaction[]>>;
    get(walletId: string, transactionId: string): Promise<import("../types").BlockradarResponse<Transaction>>;
    resendWebhook(walletId: string, transactionId: string): Promise<import("../types").BlockradarResponse<void>>;
    triggerSweep(walletId: string, transactionId: string): Promise<import("../types").BlockradarResponse<void>>;
}
