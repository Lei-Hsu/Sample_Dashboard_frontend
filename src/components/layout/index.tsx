import React from 'react';

import { motion } from 'framer-motion';

import { useAppDispatch, useAppSelector } from '@Hooks/hooks';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { setOpenMenu } from '@Redux/slices/common/commonSlice';

import EditMenu from './editMenu';
import Header from './header/Header';

const Layout = ({ children }) => {
  const dispatch = useAppDispatch();
  const { openMenu } = useAppSelector((state) => state.common.value);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%', display: 'none' },
  };

  return (
    <>
      <Header />
      <div className="flex">
        <div className="relative">
          <motion.div
            animate={openMenu ? 'open' : 'closed'}
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <EditMenu />
          </motion.div>
          <motion.div
            layout
            className="absolute -right-4 top-[400px]"
            onClick={() => dispatch(setOpenMenu(!openMenu))}
          >
            {openMenu ? <LeftOutlined /> : <RightOutlined />}
          </motion.div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
