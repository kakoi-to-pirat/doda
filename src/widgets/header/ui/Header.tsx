import { Breadcrumb } from 'antd';
import { NavLink } from 'react-router-dom';

import LogoutIcon from '@/shared/assets/icons/logout.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile.svg?react';
import { PATH_PAGE } from '@/shared/lib';
import { Logo } from '@/widgets/logo';

import { IHeader } from './Header.h';
import s from './Header.module.css';

import cn from 'classnames';

const Breadcrumbs = () => {
  const crumbs = ['doda', 'отчеты', 'общий отчет'];

  return (
    <Breadcrumb>
      {crumbs.map((crumb, index) => (
        <Breadcrumb.Item key={index}>{crumb}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export const Header = ({ className, children }: IHeader) => (
  <header className={cn(className, s.header)}>
    <Logo />
    <Breadcrumbs />
    {children && children}
    <div className={s.header__info}>
      <NavLink to={PATH_PAGE.profile}>
        <ProfileIcon width='19px' height='19px' />
      </NavLink>
      <NavLink to={PATH_PAGE.logout}>
        <LogoutIcon />
      </NavLink>
    </div>
  </header>
);
