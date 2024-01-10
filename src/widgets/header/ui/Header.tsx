import { NavLink } from 'react-router-dom';

import LogoutIcon from '@/shared/assets/icons/logout.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile.svg?react';
import { PATH_PAGE } from '@/shared/lib';

import { IHeader } from './Header.h';
import s from './Header.module.css';

import cn from 'classnames';

export const Header = ({ className, children }: IHeader) => (
  <header className={cn(className, s.header)}>
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
