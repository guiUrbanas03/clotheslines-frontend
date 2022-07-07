export type UserProfileRequest = {
  user: {
    email: string;
  };
  profile: {
    nickname: string;
    first_name: string;
    last_name: string;
    country: string;
  };
};
