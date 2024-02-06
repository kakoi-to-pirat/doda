import { Checkbox, Table } from 'antd';

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

import {
  ICheckboxDragGroupItem,
  ICheckboxDragGroupProps,
} from './CheckboxDragGroup.h';

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

export const CheckboxDragGroup = ({
  className,
  title = '',
  items,
  onChange,
}: ICheckboxDragGroupProps) => {
  const handleChecked = (isChecked: boolean, checkedKey: string) => {
    const newItems = items.map((item) => ({
      ...item,
      isChecked: checkedKey === item.key ? isChecked : item.isChecked,
    }));

    onChange(newItems);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id === over?.id) {
      return;
    }

    const [cuurentItem] = items.filter(({ key }) => key === active.id);

    if (!cuurentItem.isChecked) {
      return;
    }

    const activeIndex = items.findIndex((i) => i.key === active.id);
    const overIndex = items.findIndex((i) => i.key === over?.id);

    const sortedData = arrayMove(items, activeIndex, overIndex);

    onChange(sortedData);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 1 } }),
  );

  const columns = [
    {
      title,
      key: 'title',
      dataIndex: 'title',
      render: (title: string, { key, isChecked }: ICheckboxDragGroupItem) => ({
        props: {
          style: { backgroundColor: '#fff' },
        },
        children: (
          <Checkbox
            onChange={({ target: { checked } }) => handleChecked(checked, key)}
            checked={isChecked}
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
        items={items.map((i) => i.key as string)}
        strategy={verticalListSortingStrategy}
      >
        <Table
          rowKey='key'
          rootClassName={className}
          components={{ body: { row: Row } }}
          columns={columns as []}
          dataSource={items}
          pagination={false}
          showHeader={Boolean(title)}
          size='small'
        />
      </SortableContext>
    </DndContext>
  );
};
