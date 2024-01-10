import { Route, Routes } from 'react-router-dom';

import { AppLayout, PrivateLayout } from '@/app/layouts';
import { BASE_PATH, PATH_PAGE, PATH_CONFIG } from '@/shared/lib';
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

const StatisticsPage = loadable(() => import('@/pages/statistics'), {
  resolveComponent: (components) => components.StatisticsPage,
});

const MonitoringPage = loadable(() => import('@/pages/monitoring'), {
  resolveComponent: (components) => components.MonitoringPage,
});

const PaymentPage = loadable(() => import('@/pages/payment'), {
  resolveComponent: (components) => components.PaymentPage,
});

const RemoteСontrolPointPage = loadable(
  () => import('@/pages/points/remoteСontrolPoint'),
  {
    resolveComponent: (components) => components.RemoteСontrolPointPage,
  },
);

const SettingsPointPage = loadable(
  () => import('@/pages/points/settingsPoint'),
  {
    resolveComponent: (components) => components.SettingsPointPage,
  },
);

const AgentsAdministrationPage = loadable(
  () => import('@/pages/administration/agentsAdministration'),
  {
    resolveComponent: (components) => components.AgentsAdministrationPage,
  },
);

const EmployeesAdministrationPage = loadable(
  () => import('@/pages/administration/employeesAdministration'),
  {
    resolveComponent: (components) => components.EmployeesAdministrationPage,
  },
);

const FranchiseeAdministrationPage = loadable(
  () => import('@/pages/administration/franchiseeAdministration'),
  {
    resolveComponent: (components) => components.FranchiseeAdministrationPage,
  },
);

const PointsAdministrationPage = loadable(
  () => import('@/pages/administration/pointsAdministration'),
  {
    resolveComponent: (components) => components.PointsAdministrationPage,
  },
);

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
    id: PATH_CONFIG[PATH_PAGE.login].id,
    path: PATH_PAGE.login,
    element: <LoginPage />,
    title: PATH_CONFIG[PATH_PAGE.login].title,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.page404].id,
    path: PATH_PAGE.page404,
    element: <NotFoundPage />,
    title: PATH_CONFIG[PATH_PAGE.page404].title,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.about].id,
    path: PATH_PAGE.about,
    element: <AboutPage />,
    title: PATH_CONFIG[PATH_PAGE.about].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.profile].id,
    path: PATH_PAGE.profile,
    element: <ProfilePage />,
    title: PATH_CONFIG[PATH_PAGE.profile].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.statistics].id,
    path: PATH_PAGE.statistics,
    element: <StatisticsPage />,
    title: PATH_CONFIG[PATH_PAGE.statistics].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.monitoring].id,
    path: PATH_PAGE.monitoring,
    element: <MonitoringPage />,
    title: PATH_CONFIG[PATH_PAGE.monitoring].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.payment].id,
    path: PATH_PAGE.payment,
    element: <PaymentPage />,
    title: PATH_CONFIG[PATH_PAGE.payment].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.points.root].id,
    path: PATH_PAGE.points.root,
    element: <RemoteСontrolPointPage />,
    title: PATH_CONFIG[PATH_PAGE.points.root].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.points.remoteСontrol].id,
    path: PATH_PAGE.points.remoteСontrol,
    element: <RemoteСontrolPointPage />,
    title: PATH_CONFIG[PATH_PAGE.points.remoteСontrol].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.points.settings].id,
    path: PATH_PAGE.points.settings,
    element: <SettingsPointPage />,
    title: PATH_CONFIG[PATH_PAGE.points.settings].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.administration.root].id,
    path: PATH_PAGE.administration.root,
    element: <AgentsAdministrationPage />,
    title: PATH_CONFIG[PATH_PAGE.administration.root].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.administration.agents].id,
    path: PATH_PAGE.administration.agents,
    element: <AgentsAdministrationPage />,
    title: PATH_CONFIG[PATH_PAGE.administration.agents].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.administration.employees].id,
    path: PATH_PAGE.administration.employees,
    element: <EmployeesAdministrationPage />,
    title: PATH_CONFIG[PATH_PAGE.administration.employees].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.administration.franchisee].id,
    path: PATH_PAGE.administration.franchisee,
    element: <FranchiseeAdministrationPage />,
    title: PATH_CONFIG[PATH_PAGE.administration.franchisee].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.administration.points].id,
    path: PATH_PAGE.administration.points,
    element: <PointsAdministrationPage />,
    title: PATH_CONFIG[PATH_PAGE.administration.points].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.report.root].id,
    path: PATH_PAGE.report.root,
    element: <GeneralReportPage />,
    title: PATH_CONFIG[PATH_PAGE.report.root].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.report.general].id,
    path: PATH_PAGE.report.general,
    element: <GeneralReportPage />,
    title: PATH_CONFIG[PATH_PAGE.report.general].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.report.details].id,
    path: PATH_PAGE.report.details,
    element: <DetailsReportPage />,
    title: PATH_CONFIG[PATH_PAGE.report.details].title,
    isPrivate: true,
  },
  {
    id: PATH_CONFIG[PATH_PAGE.report.collection].id,
    path: PATH_PAGE.report.collection,
    element: <CollectionReportPage />,
    title: PATH_CONFIG[PATH_PAGE.report.collection].title,
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
      <Route index element={<StatisticsPage />} />
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
