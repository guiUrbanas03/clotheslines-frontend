import { HearteableType } from '../enums';
import { type Comment } from '../models/Comment/Comment';
import { type Playlist } from '../models/Playlist/Playlist';

export type Hearteable = {
  id: number;
  type: HearteableType;
};
