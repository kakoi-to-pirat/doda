export interface IToken {
  Email: string;
  GivenName: string;
  Role: string[];
  Surname: string;
  aud: string;
  exp: number;
  iat: number;
  iss: string;
  sub: string;
}
