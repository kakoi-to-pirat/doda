import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { LAYOUT } from '@/shared/lib';

import { IChart } from './Chart.h';

const data = [
  {
    name: 'A',
    'Нал. банкноты': 4000,
    Безнал: 2400,
    'Нал. монеты': 2400,
    Продажи: 3400,
    Ошибка: 400,
  },
  {
    name: 'B',
    'Нал. банкноты': 3000,
    Безнал: 1398,
    'Нал. монеты': 2210,
    Продажи: 4400,
    Ошибка: 400,
  },
  {
    name: 'C',
    'Нал. банкноты': 2000,
    Безнал: 1800,
    'Нал. монеты': 2290,
    Продажи: 5400,
    Ошибка: 400,
  },
  {
    name: 'D',
    'Нал. банкноты': 2780,
    Безнал: 3908,
    'Нал. монеты': 2000,
    Продажи: 4400,
  },
  {
    name: 'E',
    'Нал. банкноты': 1890,
    Безнал: 4800,
    'Нал. монеты': 2181,
    Продажи: 5400,
  },
  {
    name: 'F',
    'Нал. банкноты': 2390,
    Безнал: 3800,
    'Нал. монеты': 2500,
    Продажи: 6400,
  },
  {
    name: 'G',
    'Нал. банкноты': 3490,
    Безнал: 4300,
    'Нал. монеты': 2100,
    Продажи: 2400,
    Ошибка: 400,
  },
  {
    name: 'E',
    'Нал. банкноты': 3890,
    Безнал: 4200,
    'Нал. монеты': 2100,
    Продажи: 8400,
    Ошибка: 600,
  },
  {
    name: 'H',
    'Нал. банкноты': 3890,
    Безнал: 4200,
    'Нал. монеты': 2100,
    Продажи: 8400,
  },
  {
    name: 'M',
    'Нал. банкноты': 3890,
    Безнал: 1200,
    'Нал. монеты': 2100,
    Продажи: 600,
    Ошибка: 100,
  },
  {
    name: 'N',
    'Нал. банкноты': 3890,
    Безнал: 200,
    'Нал. монеты': 2100,
    Продажи: 1400,
    Ошибка: 2000,
  },
  {
    name: 'O',
    'Нал. банкноты': 3890,
    Безнал: 2200,
    'Нал. монеты': 2100,
    Продажи: 5400,
  },
  {
    name: 'P',
    'Нал. банкноты': 2890,
    Безнал: 4200,
    'Нал. монеты': 2100,
    Продажи: 3400,
  },
  {
    name: 'Q',
    'Нал. банкноты': 1890,
    Безнал: 4200,
    'Нал. монеты': 2100,
    Продажи: 2400,
  },
  {
    name: 'R',
    'Нал. банкноты': 3890,
    Безнал: 6200,
    'Нал. монеты': 2100,
    Продажи: 2400,
  },
];

export const Chart = ({ className, width = 1020, height = 400 }: IChart) => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart className={className} width={width} height={height} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis width={30} />
        <Tooltip />
        <Legend />

        <Bar
          dataKey='Нал. монеты'
          stackId='d'
          fill={LAYOUT.colors['--color-grey-dark']}
        />
        <Bar
          dataKey='Нал. банкноты'
          stackId='b'
          fill={LAYOUT.colors['--color-yellow']}
        />
        <Bar
          dataKey='Безнал'
          stackId='a'
          fill={LAYOUT.colors['--color-blue']}
        />
        <Bar
          dataKey='Продажи'
          stackId='e'
          fill={LAYOUT.colors['--color-green']}
        />
        <Bar dataKey='Ошибка' stackId='c' fill={LAYOUT.colors['--color-red']} />
      </BarChart>
    </ResponsiveContainer>
  );
};
