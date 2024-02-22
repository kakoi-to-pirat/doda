import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Header } from '@/widgets/header';
import { Logo } from '@/widgets/logo';
import { Sidebar } from '@/widgets/sidebar';

import s from './AppLayout.module.css';

import cn from 'classnames';

export const AppLayout = () => {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
  return (
    <>
      <Header>
        <Sidebar onToggle={setIsOpenedSidebar} />
        {!isOpenedSidebar && (
          <>
            <Logo />
            <Breadcrumbs />
          </>
        )}
      </Header>

      <main className={cn(s.layout__main, s.main)}>
        <Outlet />
      </main>
    </>
  );
};
