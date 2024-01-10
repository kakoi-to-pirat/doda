import { Spin } from 'antd';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { IWithRouter } from './WithRouter.h';

export const WithRouter = ({ children }: IWithRouter): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={<Spin />}>{children}</Suspense>
  </BrowserRouter>
);
