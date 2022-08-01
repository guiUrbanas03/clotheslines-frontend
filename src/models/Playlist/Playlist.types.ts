import { type Song } from '../Song/Song';

export type PlaylistConstructor = {
  id: number;
  profileId: number;
  title: string;
  description: string | null;
  songs: Array<Song>;
};
