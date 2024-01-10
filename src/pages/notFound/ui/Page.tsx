import { Link } from 'react-router-dom';

import { PATH_PAGE } from '@/shared/lib';
import { Button } from '@/shared/ui/button';
import { Result } from '@/shared/ui/result';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Header } from '@/widgets/header';
import { Logo } from '@/widgets/logo';

import s from './Page.module.css';

export const NotFoundPage = () => (
  <div className={s.notFoundPage}>
    <Header>
      <Logo />
    </Header>

    <Result
      status='404'
      title='404'
      subTitle='К сожалению, страница, которую вы посетили, не существует.'
      extra={
        <>
          <Link to={PATH_PAGE.root}>Перейти на домашнюю страницу</Link>
          или <Breadcrumbs isGoBack backTitle='вернуться назад' />
        </>
      }
    />
  </div>
);
