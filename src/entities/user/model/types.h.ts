export interface IUser {
  email: string;
  name: string;
}

export interface IUserState {
  user: IUser | null;
  setUser: (user: IUser) => void;
  updateUserEmail: (email: string) => void;
  updateUserName: (name: string) => void;
  deleteUser: () => void;
}
