import { getDefaultConfig } from '@rainbow-me/rainbowkit';

import { vsl_testnet } from './vsl';

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [vsl_testnet]
});
