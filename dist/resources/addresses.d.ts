import { BlockradarClient } from '../base';
import { Address, CreateAddressParams, ListParams, Transaction, Balance } from '../types';
export declare class Addresses extends BlockradarClient {
    list(params?: ListParams): Promise<import("../types").BlockradarResponse<Address[]>>;
    create(data: CreateAddressParams): Promise<import("../types").BlockradarResponse<Address>>;
    get(addressId: string): Promise<import("../types").BlockradarResponse<Address>>;
    getBalance(addressId: string, asset: string): Promise<import("../types").BlockradarResponse<Balance>>;
    getBalances(addressId: string): Promise<import("../types").BlockradarResponse<Balance[]>>;
    getTransactions(addressId: string, params?: ListParams): Promise<import("../types").BlockradarResponse<Transaction[]>>;
    updateStatus(addressId: string, status: string): Promise<import("../types").BlockradarResponse<Address>>;
    whitelist(data: {
        walletId: string;
        address: string;
        label?: string;
    }): Promise<import("../types").BlockradarResponse<Address>>;
    deleteFromWhitelist(addressId: string): Promise<import("../types").BlockradarResponse<void>>;
}
