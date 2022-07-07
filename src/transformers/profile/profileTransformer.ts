import { Profile } from '../../models/Profile/Profile';

export const profileTransformer = (json: Record<string, any>): Profile => {
  return new Profile({
    id: json.id,
    nickname: json.nickname,
    userId: json.user_id,
    firstName: json.first_name,
    lastName: json.last_name,
    country: json.country,
  });
};
