import { useState } from 'react';

import { Menu } from 'antd';
import { useRouter } from 'next/router';

import { useAppSelector } from '@Hooks/hooks';

import { MailOutlined } from '@ant-design/icons';
import style from '@Style/components/layout/editMenu.module.css';

const { SubMenu } = Menu;

const EditMenu = () => {
  const router = useRouter();
  const { openMenu } = useAppSelector((state) => state.common.value);
  const [openKeys, setOpenKeys] = useState(['sub1']);

  // submenu keys of first level
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  // Menu array
  const rootMenu = [
    {
      key: rootSubmenuKeys[0],
      className: style['ant-menu-submenu-title'],
      title: {
        content: '主要分頁',
        icon: <MailOutlined />,
      },
      item: [
        {
          className: style['ant-menu-submenu-title-item'],
          content: '首頁',
          clickFunc: () => {
            router.push('/');
          },
        },
        {
          className: style['ant-menu-submenu-title-item'],
          content: '產品',
          clickFunc: () => {
            router.push('/product');
          },
        },
        {
          className: style['ant-menu-submenu-title-item'],
          content: '使用者',
          clickFunc: () => {
            router.push('/user');
          },
        },
      ],
    },
  ];

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: openMenu ? 230 : 0,
        height: '100vh',
      }}
    >
      {rootMenu.map((item) => (
        <SubMenu
          key={item.key}
          className={item.className}
          style={{
            opacity: openMenu ? 1 : 0,
          }}
          title={
            <div className="flex h-full w-full items-center justify-between">
              <div className="truncate">{item.title.content}</div>
              <div>{item.title.icon}</div>
            </div>
          }
        >
          {item.item.map((subItem, index) => (
            <Menu.Item
              className={subItem.className}
              key={index}
              onClick={() => subItem.clickFunc()}
            >
              {subItem.content}
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
};

export default EditMenu;
