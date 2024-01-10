import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import { LAYOUT } from '@/shared/lib';

import { IChart } from './Chart.h';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page E',
    uv: 3890,
    pv: 4200,
    amt: 2100,
  },
  {
    name: 'Page H',
    uv: 3890,
    pv: 4200,
    amt: 2100,
  },
  {
    name: 'Page M',
    uv: 3890,
    pv: 1200,
    amt: 2100,
  },
  {
    name: 'Page N',
    uv: 3890,
    pv: 200,
    amt: 2100,
  },
  {
    name: 'Page O',
    uv: 3890,
    pv: 2200,
    amt: 2100,
  },
  {
    name: 'Page P',
    uv: 2890,
    pv: 4200,
    amt: 2100,
  },
  {
    name: 'Page Q',
    uv: 1890,
    pv: 4200,
    amt: 2100,
  },
  {
    name: 'Page R',
    uv: 3890,
    pv: 6200,
    amt: 2100,
  },
];

export const Chart = ({ className, width = 1020, height = 400 }: IChart) => {
  return (
    <BarChart className={className} width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='pv' stackId='a' fill={LAYOUT.colors['--color-blue']} />
      <Bar dataKey='uv' stackId='a' fill={LAYOUT.colors['--color-green']} />
    </BarChart>
  );
};
