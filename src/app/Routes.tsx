import { Route, Routes } from 'react-router-dom';

import { AppLayout, PrivateLayout } from '@/app/layouts';
import { BASE_PATH, PATH_PAGE, PATH_PAGE_TRANSLATE_RU } from '@/shared/lib';
import loadable from '@loadable/component';

const AboutPage = loadable(() => import('@/pages/about'), {
  resolveComponent: (components) => components.AboutPage,
});

const LoginPage = loadable(() => import('@/pages/login'), {
  resolveComponent: (components) => components.LoginPage,
});

const NotFoundPage = loadable(() => import('@/pages/notFound'), {
  resolveComponent: (components) => components.NotFoundPage,
});

const ProfilePage = loadable(() => import('@/pages/profile'), {
  resolveComponent: (components) => components.ProfilePage,
});

const GeneralReportPage = loadable(
  () => import('@/pages/reports/generalReport'),
  {
    resolveComponent: (components) => components.GeneralReportPage,
  },
);

const DetailsReportPage = loadable(
  () => import('@/pages/reports/detailsReport'),
  {
    resolveComponent: (components) => components.DetailsReportPage,
  },
);

const CollectionReportPage = loadable(
  () => import('@/pages/reports/collectionReport'),
  {
    resolveComponent: (components) => components.CollectionReportPage,
  },
);

const ROUTES = [
  {
    id: 'LoginPage',
    path: PATH_PAGE.login,
    element: <LoginPage />,
    title: PATH_PAGE_TRANSLATE_RU[PATH_PAGE.login],
  },
  {
    id: 'NotFoundPage',
    path: PATH_PAGE.page404,
    element: <NotFoundPage />,
    title: PATH_PAGE_TRANSLATE_RU[PATH_PAGE.page404],
  },
  {
    id: 'AboutPage',
    path: PATH_PAGE.about,
    element: <AboutPage />,
    title: PATH_PAGE_TRANSLATE_RU[PATH_PAGE.about],
    isPrivate: true,
  },
  {
    id: 'ProfilePage',
    path: PATH_PAGE.profile,
    element: <ProfilePage />,
    title: PATH_PAGE_TRANSLATE_RU[PATH_PAGE.profile],
    isPrivate: true,
  },
  {
    id: 'ReportPage',
    path: PATH_PAGE.report.root,
    element: <GeneralReportPage />,
    title: PATH_PAGE_TRANSLATE_RU[PATH_PAGE.report.root],
    isPrivate: true,
  },
  {
    id: 'GeneralReportPage',
    path: PATH_PAGE.report.general,
    element: <GeneralReportPage />,
    title: PATH_PAGE_TRANSLATE_RU[PATH_PAGE.report.general],
    isPrivate: true,
  },
  {
    id: 'DetailsReportPage',
    path: PATH_PAGE.report.details,
    element: <DetailsReportPage />,
    title: PATH_PAGE_TRANSLATE_RU[PATH_PAGE.report.details],
    isPrivate: true,
  },
  {
    id: 'CollectionReportPage',
    path: PATH_PAGE.report.collection,
    element: <CollectionReportPage />,
    title: PATH_PAGE_TRANSLATE_RU[PATH_PAGE.report.collection],
    isPrivate: true,
  },
];

const PUBLIC_ROUTES = ROUTES.filter(({ isPrivate }) => !isPrivate);
const PRIVATE_ROUTES = ROUTES.filter(({ isPrivate }) => isPrivate);

export const Router = () => (
  <Routes>
    {PUBLIC_ROUTES.map(({ id, path, element }) => (
      <Route key={id} path={path} element={element} />
    ))}
    <Route
      path={BASE_PATH}
      element={
        <PrivateLayout>
          <AppLayout />
        </PrivateLayout>
      }
    >
      <Route index element={<AboutPage />} />
      {PRIVATE_ROUTES.map(({ id, path, element, title }) => (
        <Route
          key={id}
          path={path}
          element={element}
          handle={{ crumb: () => title }}
        />
      ))}
    </Route>
  </Routes>
);
