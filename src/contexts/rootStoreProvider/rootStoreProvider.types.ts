import {
  type UiStore,
  type AuthStore,
  type UserStore,
  type PlaylistStore,
  type CommentStore,
  type HeartStore,
} from '../../stores';

export type RootStore = {
  authStore: AuthStore;
  userStore: UserStore;
  playlistStore: PlaylistStore;
  commentStore: CommentStore;
  heartStore: HeartStore;
  uiStore: UiStore;
};
