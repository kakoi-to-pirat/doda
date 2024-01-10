import { Menu } from 'antd';
import { useState } from 'react';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { ISidebar } from './Sidebar.h';
import s from './Sidebar.module.css';

import { sidebarItems } from '../lib/SidebarItems';

import cn from 'classnames';

export const Sidebar = ({ className, onCollapse = () => null }: ISidebar) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    onCollapse();
    setCollapsed(!isCollapsed);
  };

  return (
    <div
      className={cn(className, s.navigation, {
        [s.navigation__collapse]: isCollapsed,
      })}
    >
      <div className={s.navigation__icon} onClick={toggleCollapsed}>
        {isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>

      <Menu
        className={s.navigation__menu}
        defaultSelectedKeys={['5']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        inlineCollapsed={isCollapsed}
        items={sidebarItems}
      />
    </div>
  );
};
