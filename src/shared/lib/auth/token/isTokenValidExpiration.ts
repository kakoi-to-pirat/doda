import { fromUnixTime, isAfter } from 'date-fns';
import get from 'lodash/get';

import { getTokenData } from './getTokenData';

import { AUTH_TOKEN } from '../../config/token';

export const isTokenValidExpiration = (tokenType: keyof typeof AUTH_TOKEN) => {
  const tokenData = getTokenData(tokenType);
  const tokenExpiriesn = get(tokenData, 'exp', 0);
  const isNotExpiredToken = isAfter(fromUnixTime(tokenExpiriesn), new Date());

  return isNotExpiredToken;
};
