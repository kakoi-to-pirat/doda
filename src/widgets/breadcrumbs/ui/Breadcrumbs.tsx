import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import { PATH_CONFIG, useCrumbs } from '@/shared/lib';

export const Breadcrumbs = ({ isGoBack = false, backTitle = 'Назад' }) => {
  const [crumbs, isRootPage] = useCrumbs();

  if (isRootPage) return;

  if (isGoBack) {
    const prevLastCrumbUrl = `${crumbs.slice(0, crumbs.length - 1).join('/')}`;
    return <Link to={prevLastCrumbUrl}>{backTitle}</Link>;
  }

  const items = crumbs.map((crumb, index) => {
    const isLast = crumbs.length === index + 1;
    const url = `/${crumbs.slice(0, index + 1).join('/')}`;
    const crumbTitle = PATH_CONFIG[url]?.title || crumb;

    return {
      title: !isLast ? <Link to={url}>{crumbTitle}</Link> : crumbTitle,
    };
  });

  return <Breadcrumb items={items} />;
};
