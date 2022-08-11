import { AxiosInstance } from 'axios';
import {
  playlistsTransformer,
  playlistTransformer,
} from '../../transformers/playlist/playlistTransformer';
import { PlaylistApi } from './playlist.types';

export const playlist = (axiosApi: AxiosInstance): PlaylistApi => {
  return {
    paginatedList: async (cursor) => {
      const res = await axiosApi.get('/playlists', {
        params: {
          cursor: cursor,
        },
      });

      return {
        status: res.status,
        message: res.data.message,
        data: {
          playlists: playlistsTransformer(res.data.playlists.data),
          meta: res.data.playlists.meta,
        },
      };
    },

    find: async (playlistId) => {
      const res = await axiosApi.get(`/playlists/${playlistId}`);

      console.log(res);

      return {
        status: res.status,
        message: res.data.message,
        data: {
          playlist: playlistTransformer(res.data.playlist),
        },
      };
    },

    store: async (payload) => {
      try {
        const res = await axiosApi.post(`/playlists`, payload);

        return {
          status: res.status,
          message: res.data.message,
          data: {
            playlist: playlistTransformer(res.data.playlist),
          },
        };
      } catch (error) {
        console.error(error);
      }
    },

    update: async (playlistId, payload) => {
      const res = await axiosApi.put(
        `/playlists/${playlistId}/update`,
        payload,
      );

      console.log(res);

      return {
        status: res.status,
        message: res.data.message,
        data: {
          playlist: playlistTransformer(res.data.playlist),
        },
      };
    },

    destroy: async (playlistId) => {
      const res = await axiosApi.delete(`/playlists/${playlistId}/destroy`);

      console.log(res);

      return res;
    },
  };
};
