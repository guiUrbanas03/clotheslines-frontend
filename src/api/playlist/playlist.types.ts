import { type Playlist } from '../../models/Playlist/Playlist';
import { type User } from '../../models/User/User';
import { ApiResponsePromise as ApiResponse } from '../../types';

type PlaylistId = Playlist['id'];

type PlaylistObject = { playlist: Playlist };

type HeartObject = { heart: any };

type PlaylistHeartsObject = { hearts: Array<Playlist['id']> };

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

  store: (payload: any) => ApiResponse<PlaylistObject>;

  update: (playlistId: PlaylistId, payload: any) => ApiResponse<PlaylistObject>;

  destroy: (playlistId: PlaylistId) => Promise<any>;

  owner: (playlistId: PlaylistId) => ApiResponse<{ user: User }>;

  heartsCount: (playlistId: PlaylistId) => ApiResponse<{ hearts: number }>;
};
