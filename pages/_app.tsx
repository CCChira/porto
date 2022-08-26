import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import { app } from '../firebase/firebaseConfig';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import FirebaseProvider from './';
config.autoAddCss = false;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="h-screen bg-white">
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
