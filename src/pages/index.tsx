import React from 'react';

import Cookies from 'js-cookie';
import Head from 'next/head';

import { useAppDispatch, useAppSelector } from '@Hooks/hooks';

import Login from '@Components/account/Login';

function Home() {
  const dispatch = useAppDispatch();

  const { loginSuccess } = useAppSelector((state) => state.account);

  const token = Cookies.get('accessToken');

  if (!loginSuccess || !token) return <Login />;

  return (
    <div className="">
      <Head>
        <title>CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      dashboard
    </div>
  );
}

export default Home;
