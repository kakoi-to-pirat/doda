import { Menu } from 'antd';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { LAYOUT, PATH_CONFIG } from '@/shared/lib';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import { ISidebar } from './Sidebar.h';
import s from './Sidebar.module.css';

import { sidebarItems } from '../lib/SidebarItems';

import cn from 'classnames';

export const Sidebar = ({ className, onCollapse = () => null }: ISidebar) => {
  const [isCollapsed, setCollapsed] = useState(LAYOUT.is_collapsed_nav_default);
  const { pathname } = useLocation();

  const crumbs = pathname.split('/');
  const subPath = crumbs.slice(0, crumbs.length - 1).join('/');

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
        defaultSelectedKeys={[PATH_CONFIG[pathname]?.id]}
        defaultOpenKeys={!isCollapsed ? [PATH_CONFIG[subPath]?.id] : []}
        mode='inline'
        inlineCollapsed={isCollapsed}
        items={sidebarItems}
      />
    </div>
  );
};
