import React from 'react';

import { useAppDispatch } from '@Hooks/hooks';

import { logout } from '@Redux/slices/account/accountSlice';

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex h-14 w-full items-center justify-between bg-sky-400">
      <div className="pl-4">LOGO</div>
      <div className="pr-4" onClick={() => dispatch(logout())}>
        Logout
      </div>
    </div>
  );
};

export default Header;
