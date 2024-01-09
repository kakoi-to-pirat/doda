import { Link } from 'react-router-dom';

import { PATH_PAGE } from '@/shared/lib';
import { Button } from '@/shared/ui/button';
import { Result } from '@/shared/ui/result';
import { Header } from '@/widgets/header';

import s from './Page.module.css';

export const NotFoundPage = () => (
  <div className={s.notFoundPage}>
    <Header />

    <Result
      status='404'
      title='404'
      subTitle='К сожалению, страница, которую вы посетили, не существует.'
      extra={
        <Button type='link'>
          <Link to={PATH_PAGE.root}>Перейти на домашнюю страницу</Link>
        </Button>
      }
    />
  </div>
);
