import { ColumnsType } from 'antd/es/table';

import { IMonitioringData, data } from './data';
import s from './Monitoring.module.css';

type TColors = {
  selected: string;
  picked: string;
  missedSession: string;
  noConnection: string;
};

const colors: TColors = {
  selected: '#bce3f6',
  picked: 'beige',
  missedSession: '#fdfa8f',
  noConnection: '#fabcbc',
};

const renderCell = (children: React.ReactNode, type: keyof TColors) => {
  return {
    props: {
      style: { backgroundColor: colors[type] },
      className: s.monitoringTable__cell,
    },
    children,
  };
};

export const columns: ColumnsType<IMonitioringData> = [
  {
    title: '№',
    key: 'rowId',
    dataIndex: 'rowId',
    render: (_, { type, key }) => renderCell(key, type),
  },
  {
    title: 'Время обмена',
    key: 'exchangeTime',
    dataIndex: 'exchangeTime',
    render: (text, { type }) => renderCell(text, type),
  },
  {
    title: 'Последняя транзакция',
    key: 'lastTransaction',
    dataIndex: 'lastTransaction',
    // sorter: (a, b) => a.lastTransaction - b.lastTransaction,
    render: (text, { type }) => renderCell(text, type),
  },
  {
    title: 'Номер агента',
    key: 'agentNumber',
    dataIndex: 'agentNumber',
    sorter: (a, b) => a.agentNumber - b.agentNumber,
    render: (text, { type }) => renderCell(text, type),
  },
  {
    title: 'Заводской номер',
    key: 'waterPumpNumber',
    dataIndex: 'waterPumpNumber',
    filterMode: 'tree',
    filterSearch: true,
    filters: data.map(({ waterPumpNumber }) => ({
      text: waterPumpNumber,
      value: waterPumpNumber,
    })),
    onFilter: (value, record) =>
      record.waterPumpNumber
        .toLocaleLowerCase()
        .includes(String(value).toLocaleLowerCase()),
    // width: '30%',
    // align: 'center',
    render: (text, { type }) => renderCell(text, type),
  },
  {
    title: 'Адрес установки',
    key: 'address',
    dataIndex: 'address',
    filterMode: 'tree',
    filterSearch: true,
    filters: [
      {
        text: 'Ставрополь',
        value: 'Ставрополь',
      },
      {
        text: 'Курсавка',
        value: 'Курсавка',
      },
    ],
    onFilter: (value, record) => record.address.startsWith(String(value)),
    render: (text, { type }) => renderCell(text, type),
  },
  {
    title: 'Псевдоним',
    key: 'alias',
    dataIndex: 'alias',
    filterMode: 'tree',
    filterSearch: true,
    filters: [
      {
        text: 'Коммерсант',
        value: 'Коммерсант',
      },
      {
        text: 'Звездочка',
        value: 'Звездочка',
      },
      {
        text: 'ДК',
        value: 'ДК',
      },
      {
        text: 'Цирк',
        value: 'Цирк',
      },
      {
        text: 'Магнит',
        value: 'Магнит',
      },
      {
        text: 'Почта',
        value: 'Почта',
      },
    ],
    onFilter: (value, record) =>
      record.alias
        .toLocaleLowerCase()
        .includes(String(value).toLocaleLowerCase()),
    render: (text, { type }) => renderCell(text, type),
  },
  {
    title: 'Номер точки',
    key: 'pointNumber',
    dataIndex: 'pointNumber',
    filterMode: 'menu',
    filterSearch: true,
    filters: data.map(({ pointNumber }) => ({
      text: pointNumber,
      value: pointNumber,
    })),
    onFilter: (value, record) =>
      record.pointNumber
        .toLocaleLowerCase()
        .includes(String(value).toLocaleLowerCase()),
    render: (text, { type }) => renderCell(text, type),
  },
  {
    title: 't° Бака',
    key: 'tankTemperature',
    dataIndex: 'tankTemperature',
    sorter: (a, b) => a.tankTemperature - b.tankTemperature,
    width: '120px',
    align: 'center',
    render: (value, { type }) => renderCell(`${value} °C`, type),
  },
  {
    title: 't° Бокса',
    key: 'boxTemperature',
    dataIndex: 'boxTemperature',
    sorter: (a, b) => a.boxTemperature - b.boxTemperature,
    width: '120px',
    align: 'center',
    render: (value, { type }) => renderCell(`${value} °C`, type),
  },
  {
    title: 'Наличные в кассе',
    key: 'amountCashOnHand',
    dataIndex: 'amountCashOnHand',
    sorter: (a, b) => a.amountCashOnHand - b.amountCashOnHand,
    render: (text, { type }) => renderCell(text, type),
  },
  {
    title: 'Статус',
    key: 'status',
    dataIndex: 'status',
    filterMode: 'tree',
    filterSearch: true,
    filters: [
      {
        text: 'OK',
        value: 'ok',
      },
      {
        text: 'FAIL',
        value: 'fail',
      },
    ],
    onFilter: (value, record) => record.status.startsWith(String(value)),
    render: (text, { type }) => renderCell(text, type),
  },
  {
    title: 'Версия ПО',
    key: 'softwareVersion',
    dataIndex: 'softwareVersion',
    sorter: (a, b) => a.softwareVersion - b.softwareVersion,
    render: (text, { type }) => renderCell(text, type),
  },
];
