import { Navigate, useLocation } from 'react-router-dom';

import { PATH_PAGE } from '@/shared/lib';

import { IPrivateLayout } from './PrivateLayout.h';

export const PrivateLayout = ({ children }: IPrivateLayout) => {
  const location = useLocation();
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to={PATH_PAGE.login} state={{ from: location }} />;
  }

  return children;
};
