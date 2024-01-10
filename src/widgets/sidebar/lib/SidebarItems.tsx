import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

import { PATH_PAGE } from '@/shared/lib';
import {
  AppstoreOutlined,
  SearchOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';

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

export const sidebarItems: MenuItem[] = [
  getItem('Статистика', '1', <PieChartOutlined />),
  getItem('Мониторинг', '2', <DesktopOutlined />),
  getItem('Поиск платежей', '3', <SearchOutlined />),

  getItem('Отчеты', 'sub1', <MailOutlined />, [
    getItem(
      <Link to={PATH_PAGE.report.general} style={{ transition: 'none' }}>
        Общий отчет
      </Link>,
      '5',
    ),
    getItem(
      <Link to={PATH_PAGE.report.details} style={{ transition: 'none' }}>
        Детальный отчет
      </Link>,
      '6',
    ),
    getItem(
      <Link to={PATH_PAGE.report.collection} style={{ transition: 'none' }}>
        Отчет об инкассациях
      </Link>,
      '7',
    ),
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
