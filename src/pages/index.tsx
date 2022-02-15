import Head from 'next/head';
import React from 'react';

import Cookies from 'js-cookie';

import { useAppSelector, useAppDispatch } from '@Hooks/hooks';

import Login from '@Components/account/Login';
import { logout } from '@Redux/slices/account/accountSlice';

function Home() {
  const dispatch = useAppDispatch();

  const { loginSuccess } = useAppSelector((state) => state.account);

  const token = Cookies.get('accessToken');

  return (
    <div className="">
      <Head>
        <title>CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loginSuccess || !!token ? (
        <div>
          Home
          <div onClick={() => dispatch(logout())}>logout</div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Home;
