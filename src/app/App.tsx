import { Route, Routes } from 'react-router-dom';

import { AppLayout, PrivateLayout } from '@/app/layouts';
import { WithAntUI, WithQueryClient, WithRouter } from '@/app/providers';
import { AboutPage } from '@/pages/about';
import { LoginPage } from '@/pages/login';
import { NotFoundPage } from '@/pages/notFound';
import { ProfilePage } from '@/pages/profile';
import { BASE_PATH, PATH_PAGE } from '@/shared/lib';

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
