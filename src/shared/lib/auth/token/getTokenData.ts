import { jwtDecode } from 'jwt-decode';

import { getToken } from './getToken';
import { IToken } from './token.h';

import { AUTH_TOKEN } from '../../config/token';

export type TokenData = IToken | null | '';

export const getTokenData = (tokenType: keyof typeof AUTH_TOKEN): TokenData => {
  const token = getToken(tokenType);
  const decodedToken = token && jwtDecode<IToken>(token);

  return decodedToken;
};
