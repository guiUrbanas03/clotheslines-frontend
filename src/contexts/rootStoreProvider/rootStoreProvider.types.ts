import { type UiStore, type AuthStore } from '../../stores';

export type RootStore = {
  authStore: AuthStore;
  uiStore: UiStore;
};
