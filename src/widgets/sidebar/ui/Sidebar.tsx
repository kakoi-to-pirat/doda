import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';

import {
  AppstoreOutlined,
  SearchOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

import { ISidebar } from './Sidebar.h';
import s from './Sidebar.module.css';

import cn from 'classnames';

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const items: MenuItem[] = [
  getItem('Статистика', '1', <PieChartOutlined />),
  getItem('Мониторинг', '2', <DesktopOutlined />),
  getItem('Поиск платежей', '3', <SearchOutlined />),

  getItem('Отчеты', 'sub1', <MailOutlined />, [
    getItem('Общий отчет', '5'),
    getItem('Детальный отчет', '6'),
    getItem('Отчет об инкассациях', '7'),
  ]),

  getItem('ТО точек', 'sub2', <AppstoreOutlined />, [
    getItem('Удаленное управление', '8'),
    getItem('Настройка', '9'),
  ]),

  getItem('Администрирование', 'sub3', <ShareAltOutlined />, [
    getItem('Агенты', '10'),
    getItem('Точки', '11'),
    getItem('Франчайзи', '12'),
    getItem('Сотрудники', '13'),
  ]),
];

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
        items={items}
      />
    </div>
  );
};
