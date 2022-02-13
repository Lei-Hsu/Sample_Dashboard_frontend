import Head from 'next/head';
import React from 'react';

import Login from '@Components/account/Login';

function Home() {
  return (
    <div className="">
      <Head>
        <title>CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </div>
  );
}

export default Home;
