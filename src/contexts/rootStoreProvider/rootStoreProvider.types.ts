import {
  type UiStore,
  type AuthStore,
  type UserStore,
  type PlaylistStore,
} from '../../stores';

export type RootStore = {
  authStore: AuthStore;
  userStore: UserStore;
  playlistStore: PlaylistStore;
  uiStore: UiStore;
};
