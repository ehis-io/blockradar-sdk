export interface BlockradarResponse<T> {
    statusCode: number;
    message: string;
    data: T;
    meta?: Meta;
}
export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}
export interface Wallet {
    id: string;
    name: string;
    blockchain: string;
    address: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}
export interface Balance {
    asset: string;
    assetId: string;
    balance: string;
    decimals: number;
}
export interface Address {
    id: string;
    walletId: string;
    address: string;
    label?: string;
    status: string;
    metadata?: Record<string, any>;
}
export interface Transaction {
    id: string;
    hash: string;
    walletId: string;
    addressId?: string;
    asset: string;
    amount: string;
    status: 'PENDING' | 'SUCCESS' | 'FAILED';
    type: 'DEPOSIT' | 'WITHDRAW' | 'SALVAGE';
    createdAt: string;
}
export interface CreateAddressParams {
    walletId: string;
    label?: string;
    metadata?: Record<string, any>;
}
export interface ListParams {
    page?: number;
    limit?: number;
    search?: string;
    asset?: string;
    status?: string;
    type?: string;
    orderBy?: 'ASC' | 'DESC';
}
