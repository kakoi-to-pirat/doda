import { useState } from 'react';
// import { NavLink } from 'react-router-dom';

import MenuIcon from '@/shared/assets/icons/menu.svg?react';
import MenuOpenIcon from '@/shared/assets/icons/menu_open.svg?react';
// import { PATH_PAGE } from '@/shared/lib';

import { ISidebar } from './Sidebar.h';
import s from './Sidebar.module.css';

import cn from 'classnames';

export const Sidebar = ({ className, onCollapse = () => null }: ISidebar) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <nav className={className}>
      <ul
        className={cn(s.navigation, {
          [s['navigation--collapse']]: isCollapsed,
        })}
      >
        <li>
          <a
            className={s.navigation__collapse}
            onClick={() => {
              setIsCollapsed((prev) => !prev);
              onCollapse();
            }}
          >
            {isCollapsed ? (
              <MenuOpenIcon className={s.navigation__icon} />
            ) : (
              <MenuIcon className={s.navigation__icon} />
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
};
