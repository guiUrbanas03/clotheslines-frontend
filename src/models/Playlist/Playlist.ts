import { makeAutoObservable } from 'mobx';
import { PlaylistConstructor } from './Playlist.types';

export class Playlist {
  id: PlaylistConstructor['id'];
  profileId: PlaylistConstructor['profileId'];
  title: PlaylistConstructor['title'];
  description: PlaylistConstructor['description'];
  songs: PlaylistConstructor['songs'];
  heartsCount: PlaylistConstructor['heartsCount'] = 0;

  constructor(playlistConstructor: PlaylistConstructor) {
    makeAutoObservable(this);

    const { id, profileId, title, description, songs, heartsCount } =
      playlistConstructor;

    if (id == null) {
      throw new Error('Playlist id cannot be null');
    }

    if (profileId == null) {
      throw new Error('Profile id cannot be null');
    }

    this.id = id;
    this.profileId = profileId;
    this.title = title;
    this.description = description;
    this.songs = songs;
    this.heartsCount = heartsCount;
  }

  setHeartsCount(heartsCount: number) {
    this.heartsCount = heartsCount;
  }
}
