import { Blockradar } from '../src';

async function example() {
  const apiKey = process.env.BLOCKRADAR_API_KEY || 'your-api-key';
  const sdk = new Blockradar(apiKey);

  try {
    console.log('Fetching supported assets...');
    const assets = await sdk.miscellaneous.getAssets('mainnet');
    console.log('Assets:', assets.data.length);

    // console.log('Creating a new address...');
    // const address = await sdk.addresses.create({
    //   walletId: 'YOUR_WALLET_ID',
    //   label: 'My New Customer'
    // });
    // console.log('New Address:', address.data.address);

  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

example();
