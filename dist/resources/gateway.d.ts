import { BlockradarClient } from '../base';
export declare class Gateway extends BlockradarClient {
    getDetails(): Promise<import("..").BlockradarResponse<any>>;
    getTransactions(): Promise<import("..").BlockradarResponse<any[]>>;
    getBalance(): Promise<import("..").BlockradarResponse<any>>;
    deposit(data: any): Promise<import("..").BlockradarResponse<any>>;
    getDepositFee(data: any): Promise<import("..").BlockradarResponse<any>>;
    withdraw(data: any): Promise<import("..").BlockradarResponse<any>>;
    getWithdrawFee(data: any): Promise<import("..").BlockradarResponse<any>>;
}
