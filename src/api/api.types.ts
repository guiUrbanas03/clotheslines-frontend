import { AuthApi } from './auth/auth.types';
import { PlaylistApi } from './playlist/playlist.types';
import { UserApi } from './user/user.types';

export type AppApi = {
  auth: AuthApi;
  user: UserApi;
  playlist: PlaylistApi;
};
