import { HearteableType } from '../enums';
import { type Comment } from '../models/Comment/Comment';
import { type Playlist } from '../models/Playlist/Playlist';

export type HearteableModel = {
  type: HearteableType;
  model: Playlist | Comment;
};
