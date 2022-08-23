import { Playlist } from '../../models/Playlist/Playlist';
import { type Song } from '../../models/Song/Song';
import { songTransformer } from '../song/songTransformer';

const transformSongs = (songs: Array<Song>) => {
  if (songs == null || songs.length === 0) {
    return [];
  }

  return songs.map((song) => songTransformer(song));
};

export const playlistTransformer = (json: Record<string, any>): Playlist => {
  return new Playlist({
    id: json.id,
    profileId: json.profile_id,
    title: json.title,
    description: json.description,
    songs: transformSongs(json.songs),
    heartsCount: json.hearts_count,
  });
};

export const playlistsTransformer = (
  json: Record<string, any>,
): Array<Playlist> => {
  return json.map((playlist: Playlist) => playlistTransformer(playlist));
};
