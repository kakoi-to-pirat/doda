import axios from 'axios';

import { BASE_URL } from '@/shared/lib';

export const HTTP = axios.create({ baseURL: BASE_URL, withCredentials: false });
