import {
  Checkbox,
  CheckboxOptionType,
  TableProps,
  Table,
  Modal,
  Select,
} from 'antd';
import { ColumnType } from 'antd/es/table';
import { useState } from 'react';

import { Button } from '@/shared/ui/button';
import { SettingOutlined } from '@ant-design/icons';

import { data, IMonitioringData } from './data';
import s from './Monitoring.module.css';

// import { DownOutlined } from '@ant-design/icons';

// type SizeType = TableProps['size'];
// type TablePagination<T extends object> = NonNullable<
//   Exclude<TableProps<T>['pagination'], boolean>
// >;

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

const columns: TableProps<IMonitioringData>['columns'] = [
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
  {
    title: 'Действия',
    key: 'action',
    sorter: false,
    render: (_, { type }) =>
      renderCell(
        <Button size='small' type='link'>
          Перезагрузить
        </Button>,
        type,
      ),
  },
];

const defaultCheckedList = columns.map(
  (item: ColumnType<IMonitioringData>) => item.key as string,
);

export const Monitoring = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [checkedListTemp, setCheckedListTemp] = useState(checkedList);
  // const [pageSize, setPageSize] = useState(13);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setCheckedList(checkedListTemp);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setCheckedListTemp(checkedList);
    setIsModalOpen(false);
  };

  const options = columns.map(({ key = '', title = '' }) => ({
    label: title,
    value: key,
  }));

  const newColumns = columns.filter((item) =>
    checkedList.includes(item.key as string),
  );

  return (
    <>
      <div className={s.monitoring__bar}>
        <Button type='primary' onClick={showModal}>
          <SettingOutlined />
        </Button>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder='Агент'
          optionFilterProp='children'
          filterOption={(input, option) =>
            (option?.label ?? '').includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={[
            {
              value: '1',
              label: '0101200341',
            },
            {
              value: '2',
              label: '0101200342',
            },
            {
              value: '3',
              label: '0101200343',
            },
            {
              value: '4',
              label: '0101200344',
            },
            {
              value: '5',
              label: '0101200345',
            },
            {
              value: '6',
              label: '0101200346',
            },
          ]}
        />
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder='Точка'
          optionFilterProp='children'
          filterOption={(input, option) =>
            (option?.label ?? '').includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '')
              .toLowerCase()
              .localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={[
            {
              value: '1',
              label: '1010',
            },
            {
              value: '2',
              label: '1011',
            },
            {
              value: '3',
              label: '1012',
            },
            {
              value: '4',
              label: '1014',
            },
            {
              value: '5',
              label: '1014',
            },
            {
              value: '6',
              label: '1016',
            },
          ]}
        />
      </div>

      <Modal
        cancelText='Отмена'
        title='Колонки'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Checkbox.Group
          className={s.monitoring__optionColumns}
          value={checkedListTemp}
          options={options as CheckboxOptionType[]}
          onChange={(value) => setCheckedListTemp(value as string[])}
        />
      </Modal>

      <Table
        rootClassName={s.monitoring__table}
        dataSource={data}
        columns={newColumns}
        pagination={{
          pageSizeOptions: [5, 10, 15, 20, 40, 80, 100],
          locale: { items_per_page: 'строк' },
          showSizeChanger: true,
        }}
        scroll={{ y: 340 }}
        size='small'
      />
    </>
  );
};
