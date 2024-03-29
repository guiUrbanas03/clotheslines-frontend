import { AxiosInstance } from 'axios';
import ClotheslinesApiService from '../services/clotheslinesApiService/clothesLinesApiService';
import { AppApi } from './api.types';
import { auth } from './auth/auth';
import { comment } from './comment/comment';
import { heart } from './heart/heart';
import { playlist } from './playlist/playlist';
import { user } from './user/user';

export const api = (): AppApi => {
  const axiosApi: AxiosInstance = ClotheslinesApiService.getInstance().axiosAPI;
  const axiosUrl: AxiosInstance = ClotheslinesApiService.getInstance().axiosURL;

  return Object.freeze({
    auth: auth(axiosApi, axiosUrl),
    user: user(axiosApi),
    playlist: playlist(axiosApi),
    comment: comment(axiosApi),
    heart: heart(axiosApi),
  });
};
