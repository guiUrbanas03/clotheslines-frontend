import { Comment } from '../../models/Comment/Comment';
import { profileTransformer } from '../profile/profileTransformer';

export const commentTransformer = (json: Record<string, any>): Comment => {
  return new Comment({
    id: json.id,
    text: json.text,
    profile: profileTransformer(json.profile),
  });
};

export const commentsTransformer = (
  json: Record<string, any>,
): Array<Comment> => {
  return json.map((comment: Comment) => commentTransformer(comment));
};
