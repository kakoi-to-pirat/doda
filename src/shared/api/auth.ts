import { AxiosResponse } from 'axios';

import { API } from './api';
import { IAuthResponse, IUserDto } from './auth.h';

import { BASE_URL, URL } from '../lib';

export const auth = {
  login: (user: IUserDto): Promise<AxiosResponse<IAuthResponse[]>> => {
    // eslint-disable-next-line no-console
    console.log({ user });
    return API.get(`${BASE_URL}/${URL.auth}`);
  },
};
