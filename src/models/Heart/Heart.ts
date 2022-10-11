import { makeAutoObservable } from 'mobx';
import { HeartConstructor } from './Heart.types';

export class Heart {
  id: HeartConstructor['id'];
  profile_id: HeartConstructor['profile_id'];
  hearteableModel: HeartConstructor['hearteableModel'];

  constructor(heartConstructor: HeartConstructor) {
    makeAutoObservable(this);

    const { id, profile_id, hearteableModel } = heartConstructor;

    if (id == null) {
      throw new Error('Comment id cannot be null');
    }

    if (profile_id == null) {
      throw new Error('Profile id cannot be null');
    }

    this.id = id;
    this.profile_id = profile_id;
    this.hearteableModel = hearteableModel;
  }
}
