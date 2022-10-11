import { makeAutoObservable } from 'mobx';
import { api } from '../../api/api';
import { HearteableType } from '../../enums';
import { type Comment } from '../../models/Comment/Comment';
import { authStore } from '../authStore';

export class CommentStore {
  comments: Array<Comment> = [];
  hearts: Set<number> = new Set([]);

  constructor() {
    makeAutoObservable(this);
  }

  setComments = (comments: Array<Comment>) => {
    this.comments = comments;
  };

  setHearts = (hearts: Set<number>) => {
    this.hearts = hearts;
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

        await this.fetchHeartsCount(comment);

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
      console.error(error);
    }
  };

  fetchHeartsCount = async (comment: Comment) => {
    const res = await api().heart.getHeartsCount({
      id: comment.id,
      type: HearteableType.comment,
    });

    if (res && res.status === 200) {
      comment.setHeartsCount(res.data.hearts);

      return res.data.hearts;
    }
  };
}

export default new CommentStore();
