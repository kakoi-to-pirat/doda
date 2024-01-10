import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Header } from '@/widgets/header';
import { Logo } from '@/widgets/logo';

export const FranchiseeAdministrationPage = () => {
  return (
    <div>
      <Header>
        <Logo />
        <Breadcrumbs />
      </Header>

      <h2>Франчайзи</h2>
      <p>Страница управления франчайзи</p>
    </div>
  );
};
