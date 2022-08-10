import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen bg-primary-highlight">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
