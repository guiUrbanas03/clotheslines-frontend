import { Song } from '../../models/Song/Song';

export const songTransformer = (json: Record<string, any>): Song => {
  return new Song({
    id: json.id,
    playlistId: json.playlist_id,
    name: json.name,
    artist: json.artist,
    album: json.album,
  });
};
