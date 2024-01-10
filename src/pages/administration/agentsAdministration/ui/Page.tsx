import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Header } from '@/widgets/header';
import { Logo } from '@/widgets/logo';

export const AgentsAdministrationPage = () => {
  return (
    <div>
      <Header>
        <Logo />
        <Breadcrumbs />
      </Header>

      <h2>Агенты</h2>
      <p>Страница управления агентами</p>
    </div>
  );
};
