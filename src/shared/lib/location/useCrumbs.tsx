import { useLocation } from 'react-router-dom';

export const useCrumbs = (): [string[], boolean] => {
  const location = useLocation();
  const crumbs = location.pathname.split('/').filter(Boolean);
  const isRoot = crumbs.length < 1;

  return [crumbs, isRoot];
};
