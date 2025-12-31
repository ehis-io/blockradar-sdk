import { describe, it, expect, beforeAll, afterAll, afterEach } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { Blockradar } from './index';

const server = setupServer(
  http.post('https://api.blockradar.co/v1/addresses', async ({ request }) => {
    const body: any = await request.json();
    return HttpResponse.json({
      statusCode: 200,
      message: 'Address generated successfully',
      data: {
        id: 'addr_123',
        walletId: body.walletId,
        address: '0x1234567890abcdef',
        status: 'ACTIVE'
      }
    });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Blockradar SDK', () => {
  const sdk = new Blockradar('test-api-key');

  it('should create an address', async () => {
    const response = await sdk.addresses.create({
      walletId: 'wallet_123',
      label: 'Test Address'
    });

    expect(response.statusCode).toBe(200);
    expect(response.data.id).toBe('addr_123');
    expect(response.data.walletId).toBe('wallet_123');
  });

  it('should handle API errors', async () => {
    server.use(
      http.post('https://api.blockradar.co/v1/addresses', () => {
        return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
      })
    );

    await expect(sdk.addresses.create({ walletId: '123' })).rejects.toThrow('Unauthorized');
  });
});
