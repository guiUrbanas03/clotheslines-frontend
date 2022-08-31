import { makeAutoObservable } from 'mobx';
import { api } from '../../api/api';
import { type Comment } from '../../models/Comment/Comment';
import { authStore } from '../authStore';

export class CommentStore {
  comments: Array<Comment> = [];

  constructor() {
    makeAutoObservable(this);
  }

  setComments = (comments: Array<Comment>) => {
    this.comments = comments;
  };

  storePlaylistComment = async (playlistId: number, commentText: string) => {
    if (!authStore.isAuthenticated || commentText === '') {
      return;
    }

    try {
      const res = await api().comment.storePlaylistComment(
        playlistId,
        commentText,
      );

      if (res && res.status === 200) {
        const comment = res.data.comment;

        this.setComments([...this.comments, comment]);

        return res;
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchPlaylistComments = async (playlistId: number) => {
    try {
      const res = await api().comment.getPlaylistComments(playlistId);

      if (res && res.status === 200) {
        const comments = res.data.comments;

        this.setComments(comments);

        return res;
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export default new CommentStore();
