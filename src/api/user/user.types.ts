export type UserApi = {
  list: () => Promise<void>;
  find: () => Promise<void>;
  update: () => Promise<void>;
  restore: () => Promise<void>;
  destroy: () => Promise<void>;
};
