import { makeAutoObservable } from 'mobx';
import { api } from '../../api/api';

export class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }

  reset(): void {}

  async login(email: string, password: string) {
    await api().auth.login(email, password);
  }
}

export default new AuthStore();
