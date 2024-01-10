import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Header } from '@/widgets/header';
import { Logo } from '@/widgets/logo';

import s from './Page.module.css';

export const AboutPage = () => {
  return (
    <div className={s.about}>
      <Header>
        <Logo />
        <Breadcrumbs />
      </Header>

      <h2>О программе</h2>
      <p>
        Данное приложение создано с целью помочь наладить <br />
        производтсвенные процессы вашего бизнеса
      </p>
    </div>
  );
};
