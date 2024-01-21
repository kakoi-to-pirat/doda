import { addUser } from '@/entities/user';
import { AUTH_TOKEN, IToken, decodeToken, setToken } from '@/shared/lib';

// const TOKEN =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MDU4MzM4MTksImV4cCI6MTczNzM2OTgxOSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.rn4jmbZfgRl_LSy2D72Ymfqjzi__n9i77tGTtlr4wSw';

export const loginUser = async (userToken: string) => {
  const { Email, GivenName }: IToken = decodeToken(userToken);

  setToken(AUTH_TOKEN.accessToken, userToken);
  addUser({ email: Email, name: GivenName });
};
