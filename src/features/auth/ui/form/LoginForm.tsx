import { Button, Checkbox, Form, Input, Spin } from 'antd';

import { IAuthField } from './LoginForm.h';
import s from './LoginForm.module.css';

import { useLoginUser } from '../../api/auth';
import { loginUser } from '../../model/loginUser';

export const LoginForm = () => {
  const { mutate, isPending } = useLoginUser();

  const onFinish = (values: IAuthField) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values);

    mutate(
      { name: values.useremail, password: values.password },
      {
        onSuccess: ({ data: [{ accessToken }] }) => loginUser(accessToken),
      },
    );
  };

  const onFinishFailed = (errorInfo: unknown) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  return isPending ? (
    <Spin className={s.loginForm} />
  ) : (
    <Form
      className={s.loginForm}
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item<IAuthField>
        label='Email'
        name='useremail'
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
