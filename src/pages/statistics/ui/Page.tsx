import { DatePicker, Space, Radio } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';

import { Chart } from '@/widgets/chart';

import s from './Page.module.css';

const { RangePicker } = DatePicker;

export const StatisticsPage = () => {
  const onChange: RangePickerProps['onChange'] = (date, dateString) => {
    // eslint-disable-next-line no-console
    console.log(date, dateString);
  };

  return (
    <div className={s.statistics}>
      <Space direction='horizontal'>
        <Radio.Group defaultValue='week' buttonStyle='solid' size='small'>
          <Radio.Button value='today'>Сегодня</Radio.Button>
          <Radio.Button value='yesterday'>Вчера</Radio.Button>
          <Radio.Button value='week'>Неделя</Radio.Button>
          <Radio.Button value='month'>Месяц</Radio.Button>
          <Radio.Button value='quarter'>Квартал</Radio.Button>
          <Radio.Button value='year'>Год</Radio.Button>
        </Radio.Group>

        <RangePicker
          onChange={onChange}
          placeholder={['c', 'по']}
          size='small'
        />
      </Space>

      <div style={{ height: '400px' }} className={s.statistics__chart}>
        <Chart height={400} />
      </div>
    </div>
  );
};
