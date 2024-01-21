import { Navigate } from 'react-router-dom';

import { useCurrentUserAuth } from '@/entities/user';
import { PATH_PAGE } from '@/shared/lib';

interface IAuthNavigate {
  children: React.ReactNode;
}

export const AuthLoginNavigate = ({ children }: IAuthNavigate) => {
  const isAuth = useCurrentUserAuth();

  if (isAuth) {
    return <Navigate to={PATH_PAGE.root} />;
  }

  return children;
};
