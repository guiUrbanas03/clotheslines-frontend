export type AuthApi = {
  register: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  me: () => Promise<void>;
};
