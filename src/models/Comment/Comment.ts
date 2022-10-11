import { makeAutoObservable } from 'mobx';
import { CommentConstructor } from './Comment.types';

export class Comment {
  id: CommentConstructor['id'];
  profile: CommentConstructor['profile'];
  text: CommentConstructor['text'];
  heartsCount: CommentConstructor['heartsCount'] = 0;

  constructor(commentConstructor: CommentConstructor) {
    makeAutoObservable(this);

    const { id, profile, text, heartsCount } = commentConstructor;

    if (id == null) {
      throw new Error('Comment id cannot be null');
    }

    if (profile == null) {
      throw new Error('Profile cannot be null');
    }

    this.id = id;
    this.profile = profile;
    this.text = text;
    this.heartsCount = heartsCount;
  }

  setHeartsCount(heartsCount: number) {
    this.heartsCount = heartsCount;
  }
}
