import { type Profile } from '../Profile/Profile';

export type CommentConstructor = {
  id: number;
  profile: Profile;
  text: string;
  heartsCount: number;
};
