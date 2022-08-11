import { makeAutoObservable } from 'mobx';
import { api } from '../../api/api';
import { CreatePlaylistFormValues } from '../../components/forms/CreatePlaylistForm/CreatePlaylistForm.types';
import { type Playlist } from '../../models/Playlist/Playlist';
import { FetchingStatus } from '../../types';
import { PaginationCursor } from './playlistStore.types';

export class PlaylistStore {
  playlists: Map<string, Array<Playlist>> = new Map();
  status: FetchingStatus = 'idle';
  hasMore: boolean = true;
  observedPlaylistElement: HTMLElement = {} as HTMLElement;
  paginationCursor: PaginationCursor = {
    current: '',
    next: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  get isReadyToFetch() {
    return this.hasMore && this.status !== 'fetching';
  }

  get playlistsArray() {
    return [...this.playlists];
  }

  get currentCursor() {
    return this.paginationCursor.current;
  }

  get nextCursor() {
    return this.paginationCursor.next;
  }

  setPlaylists = (key: string, playlists: Array<Playlist>): void => {
    this.playlists.set(key, playlists);
  };

  setStatus = (status: FetchingStatus): void => {
    this.status = status;
  };

  setHasMore = (hasMore: boolean) => {
    this.hasMore = hasMore;
  };

  setCurrentPaginationCursor = (cursor: PaginationCursor['current']) => {
    this.paginationCursor.current = cursor;
  };

  setNextPaginationCursor = (cursor: PaginationCursor['next']) => {
    this.paginationCursor.next = cursor;
  };

  generatePlaylistsRowKey = (playlistsRow: Array<Playlist>) => {
    return playlistsRow.reduce((key, playlist) => key + playlist.id, '');
  };

  fetchCursorPaginatedPlaylists = async () => {
    if (!this.isReadyToFetch) {
      return;
    }

    try {
      this.setStatus('fetching');

      const res = await api().playlist.paginatedList(this.currentCursor);

      if (res && res.status === 200) {
        const fetchedPlaylists = res.data.playlists;

        const playlistKey = this.generatePlaylistsRowKey(fetchedPlaylists);

        this.setNextPaginationCursor(res.data.meta.next_cursor);

        this.setPlaylists(playlistKey, fetchedPlaylists);

        if (res.data.meta.next_cursor == null) {
          this.setHasMore(false);
        }

        this.setStatus('success');
      }
    } catch (error) {
      this.setStatus('error');
      console.error(error);
    } finally {
      this.setStatus('idle');
    }
  };

  createPlaylist = async (payload: CreatePlaylistFormValues) => {
    const res = await api().playlist.store(payload);

    return res;
  };
}

export default new PlaylistStore();
