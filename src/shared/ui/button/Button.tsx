import { ButtonProps, Button as AntButton } from 'antd';

export const Button = ({
  children,
  type = 'primary',
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <AntButton type={type} {...props}>
      {children}
    </AntButton>
  );
};
