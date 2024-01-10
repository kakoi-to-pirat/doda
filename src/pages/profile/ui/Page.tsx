import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Header } from '@/widgets/header';
import { Logo } from '@/widgets/logo';

export const ProfilePage = () => (
  <>
    <Header>
      <Logo />
      <Breadcrumbs />
    </Header>

    <h2>Профиль</h2>
    <p>Страница профиля пользователя</p>
  </>
);
