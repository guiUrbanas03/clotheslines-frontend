import { AuthApi } from './auth/auth.types';
import { UserApi } from './user/user.types';

export type AppApi = {
  auth: AuthApi;
  user: UserApi;
};
