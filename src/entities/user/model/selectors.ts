import { useStore } from 'zustand';

import { AUTH_TOKEN, getTokenData, isTokenValidExpiration } from '@/shared/lib';

import { userStore } from './store';
import { IUser } from './types.h';

export const useCurrentUser = () => useStore(userStore, (state) => state.user);

export const addUser = (user: IUser) => userStore.getState().setUser(user);

export const deleteUser = () => userStore.getState().deleteUser();

export const updateUserEmail = (email: string) =>
  userStore.getState().updateUserEmail(email);

export const updateUserName = (name: string) =>
  userStore.getState().updateUserName(name);

export const useCurrentUserAuth = () =>
  useStore(userStore, (state) => {
    const hasActualToken = isTokenValidExpiration(AUTH_TOKEN.accessToken);

    if (!hasActualToken) {
      return false;
    }

    const hasUser = Boolean(state.user);

    if (hasUser) {
      return true;
    }

    const { Email, GivenName } = getTokenData(AUTH_TOKEN.accessToken) || {};

    if (Email && GivenName) {
      state.setUser({ email: Email, name: GivenName });
    }

    return true;
  });
