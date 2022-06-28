import { AxiosInstance } from 'axios';
import { AuthApi } from './auth.types';

export const auth = (
  axiosApi: AxiosInstance,
  axiosUrl: AxiosInstance,
): AuthApi => {
  return {
    register: async () => {
      const res = await axiosApi.post(`/auth/register`);
      console.log('register: ', res.data);
    },

    login: async (email, password) => {
      await axiosUrl.get('/sanctum/csrf-cookie');

      const res = await axiosApi.post('/auth/login', {
        email: email,
        password: password,
      });

      console.log(res.data);
    },

    logout: async () => {
      const res = await axiosApi.post('/auth/logout');
      console.log('logout: ', res.data);
    },

    me: async () => {
      const res = await axiosApi.get('/auth/me');
      console.log('me: ', res.data);
    },
  };
};
