import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Header } from '@/widgets/header';
import { Logo } from '@/widgets/logo';

export const RemoteСontrolPointPage = () => {
  return (
    <div>
      <Header>
        <Logo />
        <Breadcrumbs />
      </Header>

      <h2>Точки</h2>
      <p>Страница удаленного управления точками</p>
    </div>
  );
};
