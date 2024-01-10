import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useState } from 'react';

import { Button } from '@/shared/ui/button';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Chart } from '@/widgets/chart';
import { Header } from '@/widgets/header';
import { Logo } from '@/widgets/logo';

import s from './Page.module.css';

export const StatisticsPage = () => {
  const [count, setCount] = useState(0);

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    // eslint-disable-next-line no-console
    console.log(date, dateString);
  };

  return (
    <div className={s.statistics}>
      <Header>
        <Logo />
        <Breadcrumbs />
      </Header>

      <Space direction='horizontal'>
        с<DatePicker placeholder='' onChange={onChange} />
        по <DatePicker placeholder='' onChange={onChange} />
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </Space>

      <Chart />
    </div>
  );
};
