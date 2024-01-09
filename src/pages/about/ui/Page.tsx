import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { useState } from 'react';

import { Button } from '@/shared/ui/button';
import { Chart } from '@/widgets/chart';
import { Header } from '@/widgets/header';

import s from './Page.module.css';

export const AboutPage = () => {
  const [count, setCount] = useState(0);

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className={s.about}>
      <Header className={s.layout__header} />

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
