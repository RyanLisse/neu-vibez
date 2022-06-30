import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  wallet,
} from '@rainbow-me/rainbowkit';
import { chain, createClient, configureChains, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Navbar from '@components/Navbar';

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.polygon, chain.polygonMumbai,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [chain.polygon, chain.polygonMumbai]
      : []),
  ],
  [
    alchemyProvider({ alchemyId: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC' }),
    publicProvider(),
  ]
);

const { wallets } = getDefaultWallets({
  appName: 'Neu Vibez',
  chains,
});

const demoAppInfo = {
  appName: 'Neu Vibez',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [wallet.argent({ chains }), wallet.trust({ chains })],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-slate-200 dark:bg-nft-dark">

        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
            <Navbar />
            <Component {...pageProps} />
            <Script src="https://kit.fontawesome.com/2be46174eb.js" crossOrigin="anonymous"></Script>
          </RainbowKitProvider>
        </WagmiConfig>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;