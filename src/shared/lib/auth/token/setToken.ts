import { AUTH_TOKEN } from '../..';

export const setToken = (tokenType: keyof typeof AUTH_TOKEN, token: string) =>
  localStorage.setItem(tokenType, token);
