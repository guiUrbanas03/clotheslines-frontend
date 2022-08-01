import { ForwardedRef } from 'react';
import { type Playlist } from '../../../../models/Playlist/Playlist';

export type PlaylistCardProps = {
  playlist: Playlist;
  ref?: any;
};
