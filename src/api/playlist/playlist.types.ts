import { type Playlist } from '../../models/Playlist/Playlist';
import { ApiResponsePromise as ApiResponse } from '../../types';

type PlaylistId = Playlist['id'];

type PlaylistObject = { playlist: Playlist };

type PaginatedPlaylistsObject = {
  playlists: Array<Playlist>;
  meta: {
    path: string | null;
    per_page: number | string | null;
    prev_cursor: string | null;
    next_cursor: string | null;
  };
};

export type PlaylistApi = {
  paginatedList: (cursor: string) => ApiResponse<PaginatedPlaylistsObject>;

  find: (playlistId: PlaylistId) => ApiResponse<PlaylistObject>;

  store: (
    payload: any,
  ) => ApiResponse<PlaylistObject>;

  update: (playlistId: PlaylistId, payload: any) => ApiResponse<PlaylistObject>;

  destroy: (playlistId: PlaylistId) => Promise<any>;
};
