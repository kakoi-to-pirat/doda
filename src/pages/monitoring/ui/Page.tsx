import { Monitoring } from '@/features/monitoring';

import s from './Page.module.css';

export const MonitoringPage = () => {
  return (
    <div className={s.monitoringPage}>
      <h2>Данные по агентам</h2>
      <Monitoring />
    </div>
  );
};
