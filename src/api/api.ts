import { AxiosInstance } from 'axios';
import ClotheslinesApiService from '../services/clotheslinesApiService/clothesLinesApiService';
import { AppApi } from './api.types';
import { auth } from './auth/auth';
import { user } from './user/user';

export const api = (): AppApi => {
  const axiosApi: AxiosInstance = ClotheslinesApiService.getInstance().axiosAPI;
  const axiosUrl: AxiosInstance = ClotheslinesApiService.getInstance().axiosURL;

  return Object.freeze({
    auth: auth(axiosApi, axiosUrl),
    user: user(axiosApi),
  });
};
