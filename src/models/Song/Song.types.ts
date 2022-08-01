import { type Playlist } from '../Playlist/Playlist';

export type SongConstructor = {
  id: number | string;
  playlistId: Playlist['id'];
  name: string;
  artist: string;
  album: string | null;
};
