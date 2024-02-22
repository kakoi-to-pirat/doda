import { Table, Modal, Select } from 'antd';
import { ColumnsType } from 'antd/es/table';
import get from 'lodash/get';
import { useState } from 'react';

import { localStorageConfig } from '@/shared/lib';
import { Button } from '@/shared/ui/button';
import {
  CheckboxDragGroup,
  ICheckboxDragGroupItem,
} from '@/shared/ui/checkboxDragGroup';
import { SettingOutlined } from '@ant-design/icons';

import s from './Monitoring.module.css';

import { columns as columnsList } from '../model/columns';
import { IMonitioringData, data } from '../model/data';

export const Monitoring = () => {
  const columnsFromStorage: ColumnsType<IMonitioringData> =
    localStorageConfig.get('table.monitoring.columns');

  const columns = columnsFromStorage
    ? columnsFromStorage.map((column) => ({
        ...columnsList.filter(({ key }) => column.key === key)[0],
        ...column,
      }))
    : columnsList;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentColumns, setCurrentColumns] = useState(columns);
  const [tempColumns, setTempColumns] = useState(columns);

  const [pageSize, setPageSize] = useState(
    localStorageConfig.get('table.monitoring.pageSize', 10),
  );

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setCurrentColumns(tempColumns);

    localStorageConfig.setTo('table', 'monitoring', {
      ...localStorageConfig.get('table.monitoring'),
      columns: tempColumns,
    });

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setTempColumns(currentColumns);
    setIsModalOpen(false);
  };

  const handleReset = () => {
    setTempColumns(columnsList);
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
        centered
        cancelText='Отмена'
        title='Колонки таблицы'
        open={isModalOpen}
        onCancel={handleCancel}
        footer={
          <div className={s.modal__footer}>
            <Button onClick={handleOk} className={s.modal__footerLeftBtn}>
              Применить
            </Button>
            <Button onClick={handleCancel} type='default'>
              Отмена
            </Button>
            <Button onClick={handleReset} type='default'>
              Сбросить
            </Button>
          </div>
        }
      >
        <CheckboxDragGroup
          items={tempColumns.map(
            (column) =>
              ({
                ...column,
                isChecked: get(column, 'isChecked', true),
              }) as ICheckboxDragGroupItem,
          )}
          onChange={(columns) =>
            setTempColumns(columns as ColumnsType<IMonitioringData>)
          }
        />
      </Modal>

      <Table
        rootClassName={s.monitoring__table}
        dataSource={data}
        columns={currentColumns.filter((column) =>
          get(column, 'isChecked', true),
        )}
        pagination={{
          pageSize,
          defaultCurrent: localStorageConfig.get('table.monitoring.page', 1),
          pageSizeOptions: [5, 10, 15, 20, 40, 80, 100],
          locale: { items_per_page: 'строк' },
          showSizeChanger: true,
          onChange: (page) =>
            localStorageConfig.setTo('table', 'monitoring', {
              ...localStorageConfig.get('table.monitoring'),
              page,
            }),
          onShowSizeChange: (page: number, pageSize: number) => {
            setPageSize(pageSize);
            localStorageConfig.setTo('table', 'monitoring', {
              ...localStorageConfig.get('table.monitoring'),
              page,
              pageSize,
            });
          },
        }}
        scroll={{ y: 340, x: 680 }}
        size='small'
      />
    </>
  );
};
