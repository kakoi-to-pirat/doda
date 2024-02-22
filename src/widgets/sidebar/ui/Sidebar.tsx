import { Menu } from 'antd';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { LAYOUT, PATH_CONFIG } from '@/shared/lib';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

import { ISidebar } from './Sidebar.h';
import s from './Sidebar.module.css';

import { sidebarItems } from '../lib/SidebarItems';

export const Sidebar = ({ onToggle = () => null }: ISidebar) => {
  const [isCollapsed, setCollapsed] = useState(LAYOUT.is_collapsed_nav_default);
  const { pathname } = useLocation();

  const crumbs = pathname.split('/');
  const subPath = crumbs.slice(0, crumbs.length - 1).join('/');

  const toggleCollapsed = () => {
    onToggle(isCollapsed);
    setCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className={s.navigation__icon} onClick={toggleCollapsed}>
        {isCollapsed ? <MenuOutlined /> : <CloseOutlined />}
      </div>

      {!isCollapsed && (
        <Menu
          className={s.navigation__menu}
          defaultSelectedKeys={[PATH_CONFIG[pathname]?.id]}
          defaultOpenKeys={!isCollapsed ? [PATH_CONFIG[subPath]?.id] : []}
          mode='inline'
          inlineCollapsed={isCollapsed}
          items={sidebarItems}
          onSelect={toggleCollapsed}
        />
      )}
    </>
  );
};
