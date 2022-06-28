import { makeAutoObservable } from 'mobx';
import { authStore, AuthStore } from '../authStore';
import { uiStore, UiStore } from '../uiStore';

class RootStore {
  authStore!: AuthStore;
  uiStore!: UiStore;

  constructor() {
    makeAutoObservable(this);
  }

  init(): void {
    this.authStore = authStore;
    this.uiStore = uiStore;
  }

  reset(): void {
    this.authStore.reset();
    this.uiStore.reset();
  }
}

export { RootStore };
