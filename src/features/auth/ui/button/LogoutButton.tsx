import { logoutUser } from '@/features/auth';
import { Button } from '@/shared/ui/button';

import { ILogoutButton } from './LogoutButton.h';

export const LogoutButton = ({ children }: ILogoutButton) => (
  <Button type='link' onClick={logoutUser}>
    {children}
  </Button>
);
