import React from 'react';

import EditMenu from './editMenu';
import Header from './header/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">
        <EditMenu />
        {children}
      </div>
    </>
  );
};

export default Layout;
