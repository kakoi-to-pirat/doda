import { Table, Modal, Select } from 'antd';
import { useState } from 'react';

import { Button } from '@/shared/ui/button';
import { SettingOutlined } from '@ant-design/icons';

import { columns } from './columns';
import { ConfigureColumns } from './ConfigureColumns';
import { data } from './data';
import s from './Monitoring.module.css';

export const Monitoring = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentColumns, setCurrentColumns] = useState(columns);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    // setCheckedList(checkedListTemp);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // setCheckedListTemp(checkedList);
    setIsModalOpen(false);
  };

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
        title='Колонки таблицы'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ConfigureColumns
          onCheked={setCurrentColumns}
          onDragEnd={setCurrentColumns}
        />
      </Modal>

      <Table
        rootClassName={s.monitoring__table}
        dataSource={data}
        columns={currentColumns}
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
