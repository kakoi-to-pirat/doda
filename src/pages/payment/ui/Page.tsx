import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Header } from '@/widgets/header';
import { Logo } from '@/widgets/logo';

export const PaymentPage = () => {
  return (
    <div>
      <Header>
        <Logo />
        <Breadcrumbs />
      </Header>

      <h2>Платежи</h2>
      <p>Страница поиска платежей</p>
    </div>
  );
};
