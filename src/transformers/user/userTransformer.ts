import { Profile } from '../../models/Profile/Profile';
import { User } from '../../models/User/User';
import { profileTransformer } from '../profile/profileTransformer';

export const userTransformer = (json: Record<string, any>): User => {
  return new User({
    id: json.id,
    email: json.email,
    password: json.password,
    status: json.status,
    role: json.role,
    profile: new Profile(profileTransformer(json.profile)),
  });
};
