import '../styles/global.css';
import type { AppProps } from 'next/app';
import { MobileProvider } from 'contexts/MobileContext';

function MayoralAssignment({ Component, pageProps }: AppProps) {
  return (
    <MobileProvider>
      <Component {...pageProps} />
    </MobileProvider>
  );
}

export default MayoralAssignment;
