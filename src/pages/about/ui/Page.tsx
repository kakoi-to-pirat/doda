import s from './Page.module.css';

export const AboutPage = () => {
  return (
    <div className={s.about}>
      <h2>О программе</h2>
      <p>
        Данное приложение создано с целью помочь наладить <br />
        производтсвенные процессы вашего бизнеса
      </p>
    </div>
  );
};
