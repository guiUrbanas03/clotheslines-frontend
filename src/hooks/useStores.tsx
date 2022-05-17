import React, { useContext } from 'react';
import { RootStoreContext, RootStore } from '../contexts';

export const useStores = (): RootStore => useContext(RootStoreContext);
