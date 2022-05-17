export type AuthApi = {
  register: () => Promise<void>;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  me: () => Promise<void>;
};
