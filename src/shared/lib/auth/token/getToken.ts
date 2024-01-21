import { AUTH_TOKEN } from '../..';

export const getToken = (tokenType: keyof typeof AUTH_TOKEN) =>
  localStorage.getItem(tokenType);
