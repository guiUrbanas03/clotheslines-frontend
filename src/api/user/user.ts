import { AxiosInstance } from 'axios';
import { UserApi } from './user.types';

export const user = (axiosApi: AxiosInstance): UserApi => {
  return {
    list: async () => {
      const res = await axiosApi.get(`/users/index`);
      console.log('users: ', res.data);
    },

    find: async () => {
      const res = await axiosApi.get(`/users/4/find`);
      console.log('users: ', res.data);
    },

    update: async () => {
      const res = await axiosApi.put(`/users/4/update`);
      console.log('users: ', res.data);
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
