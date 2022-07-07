import { makeAutoObservable } from 'mobx';
import { ProfileConstructor } from './Profile.types';

export class Profile {
  id: number = null!;
  userId: number = null!;
  nickname: string = null!;
  firstName: string = null!;
  lastName: string = null!;
  country: string = null!;

  constructor(profileConstructor: ProfileConstructor) {
    makeAutoObservable(this);

    const { id, userId, nickname, firstName, lastName, country } =
      profileConstructor;

    if (id == null) {
      throw new Error('Profile id cannot be null');
    }

    if (userId == null) {
      throw new Error('User id cannot be null');
    }

    this.id = id;
    this.userId = userId;
    this.nickname = nickname;
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
  }
}
