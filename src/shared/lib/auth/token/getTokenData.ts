import { decodeToken } from './decodeToken';
import { getToken } from './getToken';
import { IToken } from './token.h';

import { AUTH_TOKEN } from '../../config/token';

export type TokenData = IToken | null | '';

export const getTokenData = (tokenType: keyof typeof AUTH_TOKEN): TokenData => {
  const token = getToken(tokenType);

  if (!token) {
    return null;
  }

  const decodedToken = decodeToken(token);

  return decodedToken;
};
