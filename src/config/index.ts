import { AppConfig } from './config.types';

const env = <T>(configValue: T | undefined, defaultValue: T): T => {
  return configValue != null ? configValue : defaultValue;
};

export const config: AppConfig = Object.freeze({
  env: {
    NODE_ENV: env<string>(process.env.NODE_ENV, ''),
    BASE_URL: env<string>(process.env.REACT_APP_CLOTHESLINES_BASE_URL, ''),
    BASE_API: env<string>(process.env.REACT_APP_CLOTHESLINES_BASE_API, ''),
  },
});
