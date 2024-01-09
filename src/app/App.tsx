import { Route, Routes } from 'react-router-dom';

import { AppLayout, PrivateLayout } from '@/app/layouts';
import { WithAntUI, WithQueryClient, WithRouter } from '@/app/providers';
import { BASE_PATH, PATH_PAGE } from '@/shared/lib';
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

export const App = (): JSX.Element => (
  <WithAntUI>
    <WithQueryClient>
      <WithRouter>
        <Routes>
          <Route path={PATH_PAGE.login} element={<LoginPage />} />
          <Route
            path={BASE_PATH}
            element={
              <PrivateLayout>
                <AppLayout />
              </PrivateLayout>
            }
          >
            <Route index element={<AboutPage />} />
            <Route path={PATH_PAGE.profile} element={<ProfilePage />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </WithRouter>
    </WithQueryClient>
  </WithAntUI>
);
