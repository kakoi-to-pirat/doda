import { Menu } from 'antd';
import { useState } from 'react';

import { PATH_CONFIG, PATH_PAGE } from '@/shared/lib';
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
        defaultSelectedKeys={[PATH_CONFIG[PATH_PAGE.statistics].id]}
        mode='inline'
        inlineCollapsed={isCollapsed}
        items={sidebarItems}
      />
    </div>
  );
};
