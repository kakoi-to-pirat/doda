import { AuthNavigate } from '@/features/auth';

import { IPrivateLayout } from './PrivateLayout.h';

export const PrivateLayout = (props: IPrivateLayout) => (
  <AuthNavigate {...props} />
);
