export type ApiResponse<T> =
  | {
      status: number | string;
      data: T;
      message: string;
    }
  | undefined;

export type ApiResponsePromise<T> = Promise<ApiResponse<T>> | undefined;
