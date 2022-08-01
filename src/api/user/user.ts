import { AxiosInstance } from 'axios';
import { userTransformer } from '../../transformers/user/userTransformer';
import { UserApi } from './user.types';

export const user = (axiosApi: AxiosInstance): UserApi => {
  return {
    list: async () => {
      const res = await axiosApi.get(`/users`);
      console.log('users: ', res.data);
    },

    find: async () => {
      const res = await axiosApi.get(`/users/4/find`);
      console.log('users: ', res.data);
    },

    update: async (userId, payload) => {
      try {
        const res = await axiosApi.put(`/users/${userId}/update`, payload);

        return {
          status: res.status,
          message: res.data.message,
          data: {
            user: userTransformer(res.data.user),
          },
        };
      } catch (error) {
        console.error(error);
      }
    },

    restore: async () => {
      const res = await axiosApi.put(`/users/4/restore`);
      console.log('users: ', res.data);
    },

    destroy: async () => {
      const res = await axiosApi.delete(`/users/4/destroy`);
      console.log('users: ', res.data);
    },
  };
};
