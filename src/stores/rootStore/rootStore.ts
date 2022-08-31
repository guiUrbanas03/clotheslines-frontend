import { makeAutoObservable } from 'mobx';
import { authStore, AuthStore } from '../authStore';
import { commentStore, CommentStore } from '../commentStore';
import { playlistStore, PlaylistStore } from '../playlistStore';
import { uiStore, UiStore } from '../uiStore';
import { userStore, UserStore } from '../userStore';

export class RootStore {
  authStore!: AuthStore;
  userStore!: UserStore;
  playlistStore!: PlaylistStore;
  commentStore!: CommentStore;
  uiStore!: UiStore;

  constructor() {
    makeAutoObservable(this);
  }

  init(): void {
    this.authStore = authStore;
    this.userStore = userStore;
    this.playlistStore = playlistStore;
    this.commentStore = commentStore;
    this.uiStore = uiStore;
  }

  reset(): void {
    this.authStore.reset();
    this.uiStore.reset();
  }
}

export default new RootStore();
