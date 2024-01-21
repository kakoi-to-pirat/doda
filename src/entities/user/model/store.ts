import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { IUser, IUserState } from './types.h';

const USER_STORE = 'UserStore';

export const userStore = create<IUserState>()(
  devtools(
    (set) => ({
      user: null,
      setUser: (user: IUser) => set(() => ({ user })),
      updateUserEmail: (email: string) =>
        set((state) =>
          state.user
            ? { user: { ...state.user, email } }
            : { user: state.user },
        ),
      updateUserName: (name: string) =>
        set((state) =>
          state.user ? { user: { ...state.user, name } } : { user: state.user },
        ),
      deleteUser: () => set({ user: null }),
    }),
    { name: USER_STORE },
  ),
);

