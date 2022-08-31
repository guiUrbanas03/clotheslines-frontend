import { makeAutoObservable } from 'mobx';
import { CommentConstructor } from './Comment.types';

export class Comment {
  id: CommentConstructor['id'];
  profile: CommentConstructor['profile'];
  text: CommentConstructor['text'];

  constructor(commentConstructor: CommentConstructor) {
    makeAutoObservable(this);

    const { id, profile, text } = commentConstructor;

    if (id == null) {
      throw new Error('Comment id cannot be null');
    }

    if (profile == null) {
      throw new Error('Profile cannot be null');
    }

    this.id = id;
    this.profile = profile;
    this.text = text;
  }
}
