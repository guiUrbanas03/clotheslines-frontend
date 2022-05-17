import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { config } from '../../config';

class ClotheslinesApiService {
  private static instance: ClotheslinesApiService;
  private axiosApi: AxiosInstance;
  private axiosUrl: AxiosInstance;

  private constructor() {
    this.axiosApi = axios.create({
      baseURL: `${config.env.BASE_API}`,
      ...this.baseAxiosRequestConfig(),
    });

    this.axiosUrl = axios.create({
      baseURL: `${config.env.BASE_URL}`,
      ...this.baseAxiosRequestConfig(),
    });
  }

  public static init(): void {
    ClotheslinesApiService.instance = new ClotheslinesApiService();
  }

  public static getInstance(): ClotheslinesApiService {
    return ClotheslinesApiService.instance;
  }

  public get axiosAPI(): AxiosInstance {
    return this.axiosApi;
  }

  public get axiosURL(): AxiosInstance {
    return this.axiosUrl;
  }

  private baseAxiosRequestConfig(): AxiosRequestConfig {
    return {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'true',
      },
      withCredentials: true,
    };
  }
}

export default ClotheslinesApiService;
