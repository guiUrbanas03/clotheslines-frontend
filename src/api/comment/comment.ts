import { AxiosInstance } from 'axios';
import {
  commentsTransformer,
  commentTransformer,
} from '../../transformers/comment/commentTransformer';
import { CommentApi } from './comment.types';

export const comment = (axiosApi: AxiosInstance): CommentApi => {
  return {
    storePlaylistComment: async (playlistId, commentText) => {
      const res = await axiosApi.post(`/comments/${playlistId}`, {
        text: commentText,
      });

      return {
        status: res.status,
        message: res.data.message,
        data: {
          comment: commentTransformer(res.data.comment),
        },
      };
    },

    getPlaylistComments: async (playlistId) => {
      const res = await axiosApi.get(`/comments/${playlistId}`);

      return {
        status: res.status,
        message: res.data.message,
        data: {
          comments: commentsTransformer(res.data.comments),
        },
      };
    },

    heartsCount: async (commentId) => {
      const res = await axiosApi.get(`/comments/${commentId}/hearts/count`);

      return {
        status: res.status,
        message: res.data.message,
        data: {
          hearts: res.data.hearts,
        },
      };
    },
  };
};
