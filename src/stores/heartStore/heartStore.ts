import { makeAutoObservable } from 'mobx';
import { api } from '../../api/api';
import { HearteableType } from '../../enums';
import { FetchingStatus, Hearteable } from '../../types';
import { HearteableModel } from '../../types/HearteableModel';
import { authStore } from '../authStore';
import { commentStore } from '../commentStore';
import { playlistStore } from '../playlistStore';
import { HeartedIds } from './heartStore.types';

export class HeartStore {
  status: FetchingStatus = 'idle';
  hearts: HeartedIds = {
    playlist: new Set<number>([]),
    comment: new Set<number>([]),
  };

  constructor() {
    makeAutoObservable(this);
  }

  setHearts = (type: HearteableType, hearts: Set<number>) => {
    this.hearts[type] = hearts;
  };

  heart = async (hearteable: Hearteable) => {
    if (!authStore.isAuthenticated) {
      return;
    }

    try {
      const res = await api().heart.store(hearteable);

      if (res && res.status === 200) {
        this.setHearts(
          hearteable.type,
          new Set([...this.hearts[hearteable.type], hearteable.id]),
        );

        const model = this.getModel(hearteable);

        await this.fetchHeartsCount(hearteable, model);
      }
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  unheart = async (hearteable: Hearteable) => {
    if (!authStore.isAuthenticated) {
      return;
    }

    try {
      const res = await api().heart.destroy(hearteable);

      if (res && res.status === 200) {
        const settedHearts = new Set(this.hearts[hearteable.type]);

        settedHearts.delete(hearteable.id);

        this.setHearts(hearteable.type, settedHearts);

        const model = this.getModel(hearteable);

        await this.fetchHeartsCount(hearteable, model);
      }

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  fetchHeartedIds = async (hearteableType: Hearteable['type']) => {
    if (!authStore.isAuthenticated) {
      return;
    }

    try {
      const res = await api().heart.getHeartedIds(hearteableType);

      if (res && res.status === 200) {
        this.setHearts(hearteableType, new Set(res.data.hearts));
      }

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  fetchHeartsCount = async (
    hearteable: Hearteable,
    hearteableModel: HearteableModel['model'],
  ) => {
    try {
      const res = await api().heart.getHeartsCount(hearteable);

      if (res && res.status === 200) {
        hearteableModel.setHeartsCount(res.data.hearts);

        return res.data.hearts;
      }
    } catch (error) {
      console.error(error);
    }
  };

  isHearted = (hearteable: Hearteable) =>
    this.hearts[hearteable.type].has(hearteable.id);

  private getModel = (hearteable: Hearteable) => {
    let model;

    if (hearteable.type === 'playlist') {
      model = playlistStore.playlistsArray
        .map((value) => value[1])
        .map((playlists) =>
          playlists.filter((playlist) => playlist.id === hearteable.id),
        )
        .flat()[0];
    } else {
      model = commentStore.comments.filter(
        (comment) => comment.id === hearteable.id,
      )[0];
    }

    return model;
  };
}

export default new HeartStore();
