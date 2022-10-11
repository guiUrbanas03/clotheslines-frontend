import { HearteableModel } from '../../types/HearteableModel';
import { Profile } from '../Profile/Profile';

export type HeartConstructor = {
  id: number;
  profile_id: Profile['id'];
  hearteableModel: HearteableModel;
};
