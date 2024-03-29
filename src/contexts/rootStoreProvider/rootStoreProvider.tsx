import { createContext } from 'react';
import {
  authStore,
  userStore,
  uiStore,
  playlistStore,
  commentStore,
  heartStore,
} from '../../stores';
import { RootStore } from './rootStoreProvider.types';

export const RootStoreContext = createContext<RootStore>({} as RootStore);

export const RootStoreProvider = ({ children }: any): JSX.Element => {
  const rootStore: RootStore = Object.freeze({
    authStore: authStore,
    userStore: userStore,
    playlistStore: playlistStore,
    commentStore: commentStore,
    heartStore: heartStore,
    uiStore: uiStore,
  });

  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};
