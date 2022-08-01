import { makeAutoObservable } from 'mobx';
import { type Playlist } from '../Playlist/Playlist';
import { SongConstructor } from './Song.types';

export class Song {
  id: SongConstructor['id'];
  playlistId: Playlist['id'];
  name: SongConstructor['name'];
  artist: SongConstructor['artist'];
  album: SongConstructor['album'];

  constructor(songConstructor: SongConstructor) {
    makeAutoObservable(this);

    const { id, playlistId, name, artist, album } = songConstructor;

    if (id == null) {
      throw new Error('Song id cannot be null');
    }

    if (playlistId == null) {
      throw new Error('Playlist id cannot be null');
    }

    this.id = id;
    this.playlistId = playlistId;
    this.name = name;
    this.artist = artist;
    this.album = album;
  }
}
