import { jwtDecode } from 'jwt-decode';

import { IToken } from './token.h';

export const decodeToken = (token: string) => {
  return jwtDecode<IToken>(token);
};
