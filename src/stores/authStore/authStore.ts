import { makeAutoObservable } from 'mobx';
import { api } from '../../api/api';

export class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  reset(): void {}

  async login() {
    await api().auth.login();
  }
}

export default new AuthStore();
