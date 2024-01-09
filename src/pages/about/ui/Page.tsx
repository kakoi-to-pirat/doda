import { useState } from 'react';

import { Button } from '@/shared/ui/button';
import { Chart } from '@/widgets/chart';
import { Header } from '@/widgets/header';

import s from './Page.module.css';

export const AboutPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={s.about}>
      <Header className={s.layout__header}>
        <h1>Doda - администрирование</h1>
      </Header>

      <Chart />

      <div>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </div>
  );
};
