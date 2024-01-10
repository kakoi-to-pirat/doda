import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { LAYOUT } from '@/shared/lib';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Header } from '@/widgets/header';
import { Logo } from '@/widgets/logo';
import { Sidebar } from '@/widgets/sidebar';

import s from './AppLayout.module.css';

import cn from 'classnames';

export const AppLayout = () => {
  const [isCollapsedNav, setIsCollapsedNav] = useState(
    LAYOUT.is_collapsed_nav_default,
  );

  return (
    <div
      className={cn(s.layout, { [s['layout--collapseNav']]: isCollapsedNav })}
    >
      <Sidebar
        className={s.layout__navigation}
        onCollapse={() => setIsCollapsedNav((prev) => !prev)}
      />

      <main className={cn(s.layout__main, s.main)}>
        <Header>
          <Logo />
          <Breadcrumbs />
        </Header>

        <Outlet />
      </main>
    </div>
  );
};
