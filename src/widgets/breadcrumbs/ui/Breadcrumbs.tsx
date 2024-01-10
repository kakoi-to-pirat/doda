import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import { PATH_PAGE, PATH_CONFIG } from '@/shared/lib';

export const Breadcrumbs = ({ isGoBack = false, backTitle = 'Назад' }) => {
  const location = useLocation();
  const crumbs = location.pathname.split('/').filter(Boolean);
  const isMainPage = crumbs.length <= 1;

  if (isMainPage) return;

  if (isGoBack) {
    const prevLastCrumbUrl = `${crumbs.slice(0, crumbs.length - 1).join('/')}`;
    return <Link to={prevLastCrumbUrl}>{backTitle}</Link>;
  }

  const items = crumbs.map((crumb, index) => {
    const isLast = crumbs.length === index + 1;
    const isFirst = index === 0;

    const url = isFirst
      ? PATH_PAGE.root
      : `/${crumbs.slice(0, index + 1).join('/')}`;

    const crumbTitle = (PATH_CONFIG[url]?.title || crumb).toLowerCase();

    return {
      title: !isLast ? <Link to={url}>{crumbTitle}</Link> : crumbTitle,
    };
  });

  return <Breadcrumb items={items} />;
};
