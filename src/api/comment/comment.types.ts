import { Comment } from '../../models/Comment/Comment';
import { type Playlist } from '../../models/Playlist/Playlist';
import { ApiResponsePromise as ApiResponse } from '../../types';

type PlaylistId = Playlist['id'];

export type CommentApi = {
  storePlaylistComment: (
    playlistId: PlaylistId,
    commentText: string,
  ) => ApiResponse<{ comment: Comment }>;

  getPlaylistComments: (
    playlistId: PlaylistId,
  ) => ApiResponse<{ comments: Array<Comment> }>;
};
