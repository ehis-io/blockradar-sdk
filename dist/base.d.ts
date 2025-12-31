import { BlockradarResponse } from './types';
export declare class BlockradarClient {
    private readonly baseUrl;
    private readonly apiKey;
    constructor(apiKey: string);
    protected request<T>(method: string, path: string, body?: any, params?: Record<string, any>): Promise<BlockradarResponse<T>>;
}
