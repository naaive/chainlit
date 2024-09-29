import { Chain } from '@rainbow-me/rainbowkit';

const vsl_testnet = {
  id: 2331,
  name: 'VSL_Testnet',
  iconUrl: 'https://scan.testnet.rss3.io/assets/configs/network_logo.svg',
  iconBackground: '#fff',
  nativeCurrency: { name: 'RSS3', symbol: 'RSS3', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.testnet.rss3.io'] }
  }
} as const satisfies Chain;

export { vsl_testnet };
