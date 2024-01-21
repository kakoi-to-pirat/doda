import { deleteUser } from '@/entities/user';
import { AUTH_TOKEN, removeToken } from '@/shared/lib';

export const logoutUser = () => {
  removeToken(AUTH_TOKEN.accessToken);
  deleteUser();
};
