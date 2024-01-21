import { AUTH_TOKEN } from '../..';

export const removeToken = (tokenType: keyof typeof AUTH_TOKEN) =>
  localStorage.removeItem(tokenType);
