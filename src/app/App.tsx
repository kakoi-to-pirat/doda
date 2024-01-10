import { WithAntUI, WithQueryClient, WithRouter } from '@/app/providers';

import { Router } from './Routes';
export const App = (): JSX.Element => (
  <WithAntUI>
    <WithQueryClient>
      <WithRouter>
        <Router />
      </WithRouter>
    </WithQueryClient>
  </WithAntUI>
);
