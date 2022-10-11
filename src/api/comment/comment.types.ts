import { Comment } from '../../models/Comment/Comment';
import { type Playlist } from '../../models/Playlist/Playlist';
import { ApiResponsePromise as ApiResponse } from '../../types';

type PlaylistId = Playlist['id'];
type HeartObject = { heart: any };
type CommentHeartsObject = { hearts: Array<Comment['id']> };

export type CommentApi = {
  storePlaylistComment: (
    playlistId: PlaylistId,
    commentText: string,
  ) => ApiResponse<{ comment: Comment }>;

  getPlaylistComments: (
    playlistId: PlaylistId,
  ) => ApiResponse<{ comments: Array<Comment> }>;

  heart: (commentId: number) => ApiResponse<HeartObject>;

  unheart: (commentId: number) => ApiResponse<{}>;

  getHearts: () => ApiResponse<CommentHeartsObject>;

  heartsCount: (commentId: number) => ApiResponse<{ hearts: number }>;
};
