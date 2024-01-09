import { ResultProps, Result as AntResult } from 'antd';

import s from './Result.module.css';

export const Result = (props: ResultProps) => (
  <AntResult className={s.result} {...props} />
);
