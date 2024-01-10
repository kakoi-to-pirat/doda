import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

import { PATH_CONFIG, PATH_PAGE } from '@/shared/lib';
import {
  AppstoreOutlined,
  SearchOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
  ShareAltOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';

const SIDEBAR_LINK_STYLES = { transition: 'none' };

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
  getItem(
    <Link to={PATH_PAGE.statistics} style={SIDEBAR_LINK_STYLES}>
      {PATH_CONFIG[PATH_PAGE.statistics].title}
    </Link>,
    PATH_CONFIG[PATH_PAGE.statistics].id,
    <PieChartOutlined />,
  ),
  getItem(
    <Link to={PATH_PAGE.monitoring} style={SIDEBAR_LINK_STYLES}>
      {PATH_CONFIG[PATH_PAGE.monitoring].title}
    </Link>,
    PATH_CONFIG[PATH_PAGE.monitoring].id,
    <DesktopOutlined />,
  ),
  getItem(
    <Link to={PATH_PAGE.payment} style={SIDEBAR_LINK_STYLES}>
      {PATH_CONFIG[PATH_PAGE.payment].title}
    </Link>,
    PATH_CONFIG[PATH_PAGE.payment].id,
    <SearchOutlined />,
  ),
  getItem(
    PATH_CONFIG[PATH_PAGE.report.root].title,
    PATH_CONFIG[PATH_PAGE.report.root].id,
    <MailOutlined />,
    [
      getItem(
        <Link to={PATH_PAGE.report.general} style={SIDEBAR_LINK_STYLES}>
          {PATH_CONFIG[PATH_PAGE.report.general].title}
        </Link>,
        PATH_CONFIG[PATH_PAGE.report.general].id,
      ),
      getItem(
        <Link to={PATH_PAGE.report.details} style={SIDEBAR_LINK_STYLES}>
          {PATH_CONFIG[PATH_PAGE.report.details].title}
        </Link>,
        PATH_CONFIG[PATH_PAGE.report.details].id,
      ),
      getItem(
        <Link to={PATH_PAGE.report.collection} style={SIDEBAR_LINK_STYLES}>
          {PATH_CONFIG[PATH_PAGE.report.collection].title}
        </Link>,
        PATH_CONFIG[PATH_PAGE.report.collection].id,
      ),
    ],
  ),

  getItem(
    PATH_CONFIG[PATH_PAGE.points.root].title,
    PATH_CONFIG[PATH_PAGE.points.root].id,
    <AppstoreOutlined />,
    [
      getItem(
        <Link to={PATH_PAGE.points.remoteСontrol} style={SIDEBAR_LINK_STYLES}>
          {PATH_CONFIG[PATH_PAGE.points.remoteСontrol].title}
        </Link>,
        PATH_CONFIG[PATH_PAGE.points.remoteСontrol].id,
      ),
      getItem(
        <Link to={PATH_PAGE.points.settings} style={SIDEBAR_LINK_STYLES}>
          {PATH_CONFIG[PATH_PAGE.points.settings].title}
        </Link>,
        PATH_CONFIG[PATH_PAGE.points.settings].id,
      ),
    ],
  ),

  getItem(
    PATH_CONFIG[PATH_PAGE.administration.root].title,
    PATH_CONFIG[PATH_PAGE.administration.root].id,
    <ShareAltOutlined />,
    [
      getItem(
        <Link to={PATH_PAGE.administration.agents} style={SIDEBAR_LINK_STYLES}>
          {PATH_CONFIG[PATH_PAGE.administration.agents].title}
        </Link>,
        PATH_CONFIG[PATH_PAGE.administration.agents].id,
      ),
      getItem(
        <Link to={PATH_PAGE.administration.points} style={SIDEBAR_LINK_STYLES}>
          {PATH_CONFIG[PATH_PAGE.administration.points].title}
        </Link>,
        PATH_CONFIG[PATH_PAGE.administration.points].id,
      ),
      getItem(
        <Link
          to={PATH_PAGE.administration.franchisee}
          style={SIDEBAR_LINK_STYLES}
        >
          {PATH_CONFIG[PATH_PAGE.administration.franchisee].title}
        </Link>,
        PATH_CONFIG[PATH_PAGE.administration.franchisee].id,
      ),
      getItem(
        <Link
          to={PATH_PAGE.administration.employees}
          style={SIDEBAR_LINK_STYLES}
        >
          {PATH_CONFIG[PATH_PAGE.administration.employees].title}
        </Link>,
        PATH_CONFIG[PATH_PAGE.administration.employees].id,
      ),
    ],
  ),

  getItem(
    <Link to={PATH_PAGE.about}>{PATH_CONFIG[PATH_PAGE.about].title}</Link>,
    PATH_CONFIG[PATH_PAGE.about].id,
    <QuestionCircleOutlined />,
  ),
];
