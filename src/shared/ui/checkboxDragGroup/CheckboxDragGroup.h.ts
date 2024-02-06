import type { ColumnsType } from 'antd/es/table';

export interface ICheckboxDragGroupItem {
  key: string;
  title: string;
  isChecked: boolean;
}

export interface ICheckboxDragGroupProps {
  className?: string;
  title?: string;
  items: ICheckboxDragGroupItem[];
  onChange: (items: ColumnsType<ICheckboxDragGroupItem>) => void;
}
