import { Link } from 'react-router-dom';

import logo from '@/shared/assets/icons/logo.png';
import { BASE_PATH } from '@/shared/lib';

import s from './Logo.module.css';

export const Logo = () => {
  return (
    <Link to={`${BASE_PATH}/`} className={s.logo}>
      <img src={logo} alt='Doda' />
    </Link>
  );
};
