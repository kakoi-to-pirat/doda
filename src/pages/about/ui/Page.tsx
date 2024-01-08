import { useState } from 'react';

import { Chart } from '@/widgets/chart';

import s from './Page.module.css';

export const AboutPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={s.about}>
      <h1>Doda</h1>

      <div className={s.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Chart />
    </div>
  );
};
