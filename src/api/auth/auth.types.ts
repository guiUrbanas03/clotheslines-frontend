import { User } from '../../models/User/User';
import { LoginRequest } from '../../requests';
import { RegisterUserRequest } from '../../requests';
import { ApiResponse } from '../../types';

type UserObject = { user: User };

export type AuthApi = {
  register: (payload: RegisterUserRequest) => Promise<ApiResponse<UserObject>>;

  login: (payload: LoginRequest) => Promise<ApiResponse<UserObject>>;

  logout: () => Promise<ApiResponse<null>>;

  me: () => Promise<ApiResponse<UserObject>>;
};
