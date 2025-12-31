import fetch from 'node-fetch';
export class BlockradarClient {
    baseUrl = 'https://api.blockradar.co/v1';
    apiKey;
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    async request(method, path, body, params) {
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
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || `API Request failed with status ${response.status}`);
        }
        return data;
    }
}
