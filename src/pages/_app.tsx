import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import store from '@Redux/store';

import '../styles/globals.css';
import 'antd/dist/antd.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log('check');
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
