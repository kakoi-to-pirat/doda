import { Link } from 'react-router-dom';

import { PATH_PAGE } from '@/shared/lib';

export const NotFoundPage = () => (
  <div>
    <h2>Здесь нечего смотреть!</h2>
    <p>
      <Link to={PATH_PAGE.root}>Перейти на домашнюю страницу</Link>
    </p>
  </div>
);
