import { Checkbox, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';

import type { DragEndEvent } from '@dnd-kit/core';
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { columns as columnsList } from './columns';
import { IMonitioringData } from './data';
import s from './Monitoring.module.css';

interface DataType {
  key: string;
  name: string;
}

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}

const Row = (props: RowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    cursor: 'move',
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  };

  return (
    <tr
      {...props}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    />
  );
};

interface IEditColumnsListProps {
  onCheked: (columns: ColumnsType<IMonitioringData>) => void;
  onDragEnd: (columns: ColumnsType<IMonitioringData>) => void;
}

export const ConfigureColumns = ({
  onCheked,
  onDragEnd = () => null,
}: IEditColumnsListProps) => {
  const [checkedColumns, setCheckedColumns] = useState(columnsList);
  const [dataSource, setDataSource] = useState(columnsList);

  const handleChange = (isChecked: boolean, checkedKey: string) => {
    const newCheckedColumns = isChecked
      ? [
          ...checkedColumns,
          ...columnsList.filter(({ key }) => checkedKey === key),
        ]
      : checkedColumns.filter(({ key }) => checkedKey !== key);

    const sortedColumns = dataSource
      .filter(({ key }) => newCheckedColumns.some((col) => col.key === key))
      .map(({ key }) => newCheckedColumns.filter((col) => col.key === key)[0]);

    setCheckedColumns(sortedColumns);
    onCheked(sortedColumns);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    console.log({ active });

    if (active.id === over?.id) {
      return;
    }

    if (checkedColumns.every(({ key }) => key !== active.id)) {
      return;
    }

    setDataSource((prev) => {
      const activeIndex = prev.findIndex((i) => i.key === active.id);
      const overIndex = prev.findIndex((i) => i.key === over?.id);

      const sorteData = arrayMove(prev, activeIndex, overIndex);
      onDragEnd(sorteData);

      return sorteData;
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 1 } }),
  );

  const columns: ColumnsType<DataType> = [
    {
      title: 'Колонки',
      key: 'title',
      dataIndex: 'title',
      render: (title, { key }) => ({
        props: {
          style: { backgroundColor: '#fff' },
          className: s.monitoringTable__cell,
        },
        children: (
          <Checkbox
            onChange={({ target: { checked } }) => handleChange(checked, key)}
            checked={checkedColumns.some((c) => c.key === key)}
          >
            {title}
          </Checkbox>
        ),
      }),
    },
  ];

  return (
    <DndContext
      sensors={sensors}
      modifiers={[restrictToVerticalAxis]}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={dataSource.map((i) => i.key as string)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          rootClassName={s.monitoring__table}
          components={{ body: { row: Row } }}
          rowKey='key'
          columns={columns as []}
          dataSource={dataSource}
          size='small'
          pagination={false}
          showHeader={false}
        />
      </SortableContext>
    </DndContext>
  );
};
