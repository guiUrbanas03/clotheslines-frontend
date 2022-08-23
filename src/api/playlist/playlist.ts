import { AxiosInstance } from 'axios';
import {
  playlistsTransformer,
  playlistTransformer,
} from '../../transformers/playlist/playlistTransformer';
import { userTransformer } from '../../transformers/user/userTransformer';
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

    owner: async (playlistId) => {
      const res = await axiosApi.get(`/playlists/${playlistId}/owner`);

      return {
        status: res.status,
        message: res.data.message,
        data: {
          user: userTransformer(res.data.user),
        },
      };
    },

    heart: async (playlistId) => {
      const res = await axiosApi.post(`/playlists/${playlistId}/heart`);

      return {
        status: res.status,
        message: res.data.message,
        data: {
          heart: res.data.heart,
        },
      };
    },

    unheart: async (playlistId) => {
      const res = await axiosApi.delete(`/playlists/${playlistId}/heart`);

      return {
        status: res.status,
        message: res.data.message,
        data: {},
      };
    },

    getHearts: async () => {
      const res = await axiosApi.get('/playlists/profile/hearts');

      return {
        status: res.status,
        message: res.data.message,
        data: {
          hearts: res.data.hearts,
        },
      };
    },

    heartsCount: async (playlistId) => {
      const res = await axiosApi.get(`/playlists/${playlistId}/hearts/count`);

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
