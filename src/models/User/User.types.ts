import { type Profile } from '../Profile/Profile';

export type UserConstructor = {
  id: number;
  email: string;
  password: string;
  status: string;
  role: string;
  profile: Profile;
};
