import { type UiStore, type AuthStore, type UserStore } from '../../stores';

export type RootStore = {
  authStore: AuthStore;
  userStore: UserStore;
  uiStore: UiStore;
};
