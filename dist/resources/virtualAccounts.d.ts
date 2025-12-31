import { BlockradarClient } from '../base';
export interface VirtualAccountParams {
    walletId?: string;
    addressId?: string;
    type: 'AUTO_FUNDING' | string;
    metadata?: Record<string, any>;
}
export declare class VirtualAccounts extends BlockradarClient {
    createForWallet(walletId: string, data: Omit<VirtualAccountParams, 'walletId' | 'addressId'>): Promise<import("..").BlockradarResponse<any>>;
    getForWallet(walletId: string): Promise<import("..").BlockradarResponse<any>>;
    updateWalletAccountStatus(walletId: string, status: string): Promise<import("..").BlockradarResponse<any>>;
    createForAddress(addressId: string, data: Omit<VirtualAccountParams, 'walletId' | 'addressId'>): Promise<import("..").BlockradarResponse<any>>;
    getForAddress(addressId: string): Promise<import("..").BlockradarResponse<any>>;
    updateAddressAccountStatus(addressId: string, status: string): Promise<import("..").BlockradarResponse<any>>;
}
