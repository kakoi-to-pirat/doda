import { logoutUser } from '@/features/auth';
import { Button } from '@/shared/ui/button';

interface ILogoutButton {
  children: React.ReactNode;
}

export const LogoutButton = ({ children }: ILogoutButton) => (
  <Button type='link' onClick={logoutUser}>
    {children}
  </Button>
);
