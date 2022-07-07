import { User } from '../../models/User/User';
import { UserProfileRequest } from '../../requests';
import { ApiResponse } from '../../types';

export type UserApi = {
  list: () => Promise<void>;
  find: () => Promise<void>;
  update: (
    userId: User['id'],
    payload: UserProfileRequest,
  ) => Promise<ApiResponse<{ user: User }>>;
  restore: () => Promise<void>;
  destroy: () => Promise<void>;
};
