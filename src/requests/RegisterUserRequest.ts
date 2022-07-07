import { UserRole, UserStatus } from "../enums";

export type RegisterUserRequest = {
  user: {
    email: string;
    status: UserStatus;
    role: UserRole;
    password: string;
    password_confirmation: string;
  };
  profile: {
    nickname: string;
    first_name: string;
    last_name: string;
    country: string;
  };
};
