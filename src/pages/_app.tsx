import { useEffect } from 'react';
import { Provider } from 'react-redux';

import Cookies from 'js-cookie';
import Router from 'next/router';

import { useAppDispatch, useAppSelector } from '@Hooks/hooks';

import { addAxiosHeader } from '@Axios/index.js';

import Layout from '@Components/layout';

import { checkToken } from '@Redux/slices/account/accountSlice';
import store from '@Redux/store';

import 'antd/dist/antd.css';
import '../styles/globals.css';

import type { AppProps } from 'next/app';

const RouterCheck = ({ Component }: AppProps) => {
  const dispatch = useAppDispatch();

  const { loginSuccess } = useAppSelector((state) => state.account);

  const token = Cookies.get('accessToken');

  useEffect(() => {
    if (!!token) addAxiosHeader(token);

    if (loginSuccess || !!token) {
      dispatch(checkToken());
    } else {
      Router.replace('/');
    }
  }, [token]);

  return (
    <>{loginSuccess ? <Layout children={<Component />} /> : <Component />}</>
  );
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RouterCheck
        pageProps={pageProps}
        Component={Component}
        router={undefined}
      />
    </Provider>
  );
}
