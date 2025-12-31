import { BlockradarClient } from '../base';
export declare class AutoSettlements extends BlockradarClient {
    getWalletConfig(walletId: string): Promise<import("..").BlockradarResponse<any>>;
    updateWalletConfig(walletId: string, enabled: boolean): Promise<import("..").BlockradarResponse<any>>;
    listWalletRules(walletId: string): Promise<import("..").BlockradarResponse<any[]>>;
    createWalletRule(walletId: string, rule: any): Promise<import("..").BlockradarResponse<any>>;
    deleteWalletRule(walletId: string, ruleId: string): Promise<import("..").BlockradarResponse<void>>;
    getAddressConfig(addressId: string): Promise<import("..").BlockradarResponse<any>>;
    updateAddressConfig(addressId: string, enabled: boolean): Promise<import("..").BlockradarResponse<any>>;
    listAddressRules(addressId: string): Promise<import("..").BlockradarResponse<any[]>>;
    createAddressRule(addressId: string, rule: any): Promise<import("..").BlockradarResponse<any>>;
    deleteAddressRule(addressId: string, ruleId: string): Promise<import("..").BlockradarResponse<void>>;
}
