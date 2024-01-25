import { AxiosResponse } from 'axios';

import { IAuthResponse, IUserDto } from './auth.h';

import { BASE_URL, URL } from '../../lib';
import { HTTP } from '../http';

export const auth = {
  login: (user: IUserDto): Promise<AxiosResponse<IAuthResponse[]>> => {
    // eslint-disable-next-line no-console
    console.log({ user });
    return HTTP.get(`${BASE_URL}/${URL.auth}`);
  },
};
