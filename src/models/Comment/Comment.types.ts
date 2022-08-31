import { type Profile } from "../Profile/Profile";

export type CommentConstructor = {
  id: number | string;
  profile: Profile;
  text: string;
};
