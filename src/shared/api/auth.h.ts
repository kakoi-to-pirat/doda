export interface IUserDto {
  name: string;
  password: string;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
}
