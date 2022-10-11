import { AxiosInstance } from 'axios';
import { heartTransformer } from '../../transformers/heart/heartTransformer';
import { HeartApi } from './heart.types';

export const heart = (axiosApi: AxiosInstance): HeartApi => {
  return {
    store: async (hearteable) => {
      const res = await axiosApi.post(
        `/hearts/${hearteable.id}/${hearteable.type}/store`,
      );

      return {
        status: res.status,
        message: res.data.message,
        data: {
          heart: heartTransformer(res.data.heart),
        },
      };
    },

    destroy: async (hearteable) => {
      const res = await axiosApi.delete(
        `/hearts/${hearteable.id}/${hearteable.type}/destroy`,
      );

      return {
        status: res.status,
        message: res.data.message,
        data: {
          heart: heartTransformer(res.data.heart),
        },
      };
    },

    getHeartedIds: async (hearteableType) => {
      const res = await axiosApi.get(`/hearts/${hearteableType}/profile`);

      return {
        status: res.status,
        message: res.data.message,
        data: {
          hearts: res.data.hearts,
        },
      };
    },

    getHeartsCount: async (hearteable) => {
      const res = await axiosApi.get(
        `/hearts/${hearteable.id}/${hearteable.type}/count`,
      );

      return {
        status: res.status,
        message: res.data.message,
        data: {
          hearts: res.data.hearts,
        },
      };
    },
  };
};
