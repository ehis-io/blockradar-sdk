import { BlockradarClient } from '../base';
export interface WithdrawalParams {
    walletId: string;
    assetId?: string;
    amount?: string;
    address?: string;
    assets?: Array<{
        assetId: string;
        amount: string;
        address: string;
    }>;
}
export declare class Withdrawals extends BlockradarClient {
    initiate(data: WithdrawalParams): Promise<import("..").BlockradarResponse<any>>;
    sign(data: WithdrawalParams): Promise<import("..").BlockradarResponse<any>>;
    getFee(data: WithdrawalParams): Promise<import("..").BlockradarResponse<any>>;
    initiateFromAddress(addressId: string, data: Omit<WithdrawalParams, 'walletId'>): Promise<import("..").BlockradarResponse<any>>;
    getFeeFromAddress(addressId: string, data: Omit<WithdrawalParams, 'walletId'>): Promise<import("..").BlockradarResponse<any>>;
    signFromAddress(addressId: string, data: Omit<WithdrawalParams, 'walletId'>): Promise<import("..").BlockradarResponse<any>>;
}
