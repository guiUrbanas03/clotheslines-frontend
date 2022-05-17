import { createContext } from 'react';
import { authStore } from '../../stores';
import { RootStore } from './rootStoreProvider.types';

export const RootStoreContext = createContext<RootStore>({} as RootStore);

export const RootStoreProvider = ({ children }: any): JSX.Element => {
  const rootStore: RootStore = Object.freeze({
    authStore: authStore,
  });

  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};
