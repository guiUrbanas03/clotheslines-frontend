import { makeAutoObservable } from 'mobx';
import { Profile } from '../Profile/Profile';
import { UserConstructor } from './User.types';

export class User {
  id: number = null!;
  email: string = null!;
  password: string = null!;
  status: string = null!;
  role: string = null!;
  profile: Profile = null!;

  constructor(userConstructor: UserConstructor) {
    makeAutoObservable(this);

    const { id, email, password, status, role, profile } = userConstructor;

    if (id == null) {
      throw new Error('User id cannot be null');
    }

    this.id = id;
    this.email = email;
    this.password = password;
    this.status = status;
    this.role = role;
    this.profile = profile;
  }

}
