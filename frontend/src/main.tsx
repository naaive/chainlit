import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppWrapper from 'AppWrapper';
import { apiClient } from 'api';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { WagmiProvider } from 'wagmi';

import { ChainlitContext } from '@chainlit/react-client';

import './index.css';
import '@rainbow-me/rainbowkit/styles.css';

import { i18nSetupLocalization } from './i18n';
import { config } from './wagmi_conf';

i18nSetupLocalization();
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChainlitContext.Provider value={apiClient}>
      <RecoilRoot>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <AppWrapper />
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </RecoilRoot>
    </ChainlitContext.Provider>
  </React.StrictMode>
);
