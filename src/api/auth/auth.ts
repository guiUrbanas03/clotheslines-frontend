import { AxiosError, AxiosInstance } from 'axios';
import { userTransformer } from '../../transformers/user/userTransformer';
import { AuthApi } from './auth.types';

export const auth = (
  axiosApi: AxiosInstance,
  axiosUrl: AxiosInstance,
): AuthApi => {
  return {
    register: async ({ user, profile }) => {
      try {
        await axiosUrl.get('/sanctum/csrf-cookie');

        const res = await axiosApi.post(`/auth/register`, { user, profile });

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

    login: async ({ email, password }) => {
      try {
        await axiosUrl.get('/sanctum/csrf-cookie');

        const res = await axiosApi.post('/auth/login', {
          email,
          password,
        });

        return {
          status: res.status,
          message: res.data.message,
          data: {
            user: userTransformer(res.data.user),
          },
        };
      } catch (error: any) {
        const { status, data } = error.response;
        console.error(error);
      }
    },

    logout: async () => {
      try {
        const res = await axiosApi.post('/auth/logout');

        if (res && res.status === 200) {
          return {
            status: res.status,
            message: res.data.message,
            data: null,
          };
        }
      } catch (error) {
        console.error(error);
      }
    },

    me: async () => {
      try {
        const res = await axiosApi.get('/auth/me');

        if (res && res.status === 200) {
          return {
            status: res.status,
            message: res.data.message,
            data: {
              user: userTransformer(res.data.user),
            },
          };
        }
      } catch (error) {
        console.error(error);
      }
    },
  };
};
