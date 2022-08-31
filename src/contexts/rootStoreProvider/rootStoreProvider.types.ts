import {
  type UiStore,
  type AuthStore,
  type UserStore,
  type PlaylistStore,
  CommentStore,
} from '../../stores';

export type RootStore = {
  authStore: AuthStore;
  userStore: UserStore;
  playlistStore: PlaylistStore;
  commentStore: CommentStore;
  uiStore: UiStore;
};
