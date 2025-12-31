import fetch from 'node-fetch';
import { BlockradarResponse } from './types';

export class BlockradarClient {
  private readonly baseUrl: string = 'https://api.blockradar.co/v1';
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  protected async request<T>(
    method: string,
    path: string,
    body?: any,
    params?: Record<string, any>
  ): Promise<BlockradarResponse<T>> {
    const url = new URL(`${this.baseUrl}${path}`);
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined) {
          url.searchParams.append(key, String(params[key]));
        }
      });
    }

    const response = await fetch(url.toString(), {
      method,
      headers: {
        'x-api-key': this.apiKey,
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json() as BlockradarResponse<T>;

    if (!response.ok) {
      throw new Error(data.message || `API Request failed with status ${response.status}`);
    }

    return data;
  }
}
