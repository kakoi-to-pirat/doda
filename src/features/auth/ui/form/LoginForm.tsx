import { Button, Checkbox, Form, Input } from 'antd';

import { IAuthField } from './LoginForm.h';
import s from './LoginForm.module.css';

import { loginUser } from '../../lib/loginUser';

export const LoginForm = () => {
  const onFinish = (values: IAuthField) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values);

    loginUser({ email: '', name: values.username });
  };

  const onFinishFailed = (errorInfo: unknown) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className={s.auth__form}
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item<IAuthField>
        label='Имя'
        name='username'
        rules={[{ required: true, message: 'Пожалуйста, укажите свое имя!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<IAuthField>
        label='Пароль'
        name='password'
        rules={[
          { required: true, message: 'Пожалуйста, укажите свой пароль!' },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<IAuthField>
        name='remember'
        valuePropName='checked'
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit'>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
