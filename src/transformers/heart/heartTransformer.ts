import { HearteableType } from '../../enums';
import { Comment } from '../../models/Comment/Comment';
import { Heart } from '../../models/Heart/Heart';
import { Playlist } from '../../models/Playlist/Playlist';
import { HearteableModel } from '../../types/HearteableModel';
import { commentTransformer } from '../comment/commentTransformer';
import { playlistTransformer } from '../playlist/playlistTransformer';

export const heartTransformer = (
  json: Record<string, any>,
): Heart | undefined => {
  const model = getTransformedModel(
    json.hearteable.type,
    json.hearteable.model,
  );

  if (model) {
    return new Heart({
      id: json.id,
      profile_id: json.profile_id,
      hearteableModel: {
        type: json.hearteable.type,
        model: model,
      },
    });
  }
};

const getTransformedModel = (
  type: HearteableType,
  model: HearteableModel['model'],
): Playlist | Comment | undefined => {
  switch (type) {
    case 'playlist':
      return playlistTransformer(model);
    case 'comment':
      return commentTransformer(model);
  }
};
