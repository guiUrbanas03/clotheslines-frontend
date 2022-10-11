import { ApiResponsePromise, Hearteable } from '../../types';

type HeartObject = {
  heart: any;
};

type HeartsObject = {
  hearts: any;
};

export type HeartApi = {
  store: (hearteable: Hearteable) => ApiResponsePromise<HeartObject>;

  destroy: (hearteable: Hearteable) => ApiResponsePromise<HeartObject>;

  getHeartedIds: (
    hearteableType: Hearteable['type'],
  ) => ApiResponsePromise<HeartsObject>;

  getHeartsCount: (hearteable: Hearteable) => ApiResponsePromise<HeartsObject>;
};
