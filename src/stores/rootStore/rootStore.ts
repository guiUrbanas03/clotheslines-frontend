import { makeAutoObservable } from 'mobx';
import { authStore, AuthStore } from '../authStore';

class RootStore {
  authStore!: AuthStore;

  constructor() {
    makeAutoObservable(this);
  }

  init(): void {
    this.authStore = authStore;
  }

  reset(): void {
    this.authStore.reset();
  }
}

export { RootStore };
