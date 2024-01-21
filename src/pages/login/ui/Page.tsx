import { AuthLoginNavigate, LoginForm } from '@/features/auth';
import { Header } from '@/widgets/header';
import { Logo } from '@/widgets/logo';

import s from './Page.module.css';

export const LoginPage = () => (
  <AuthLoginNavigate>
    <div className={s.auth}>
      <Header>
        <Logo />
      </Header>

      <LoginForm />
    </div>
  </AuthLoginNavigate>
);
