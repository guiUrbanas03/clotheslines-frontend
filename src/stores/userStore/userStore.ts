import { makeAutoObservable } from 'mobx';
import { api } from '../../api/api';
import { User } from '../../models/User/User';
import { UserProfileRequest } from '../../requests';
import { FetchingStatus } from '../../types';
import { rootStore } from '../rootStore';

export class UserStore {
  status: FetchingStatus = 'idle';

  constructor() {
    makeAutoObservable(this);
  }

  setStatus(status: FetchingStatus) {
    this.status = status;
  }

  async update(payload: UserProfileRequest) {
    try {
      const user: User = rootStore.authStore.user;

      const res = await api().user.update(user.id, payload);

      if (res && res.status === 200) {
        return res;
      }
    } catch (error) {
      console.error(error);
      this.setStatus('error');
    } finally {
      this.setStatus('idle');
    }
  }
}

export default new UserStore();
