import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Header } from '@/widgets/header';
import { Logo } from '@/widgets/logo';

export const SettingsPointPage = () => {
  return (
    <div>
      <Header>
        <Logo />
        <Breadcrumbs />
      </Header>

      <h2>Настройки</h2>
      <p>Страница управления настройками</p>
    </div>
  );
};
