export type ApiResponse<T> =
  | {
      status: number | string;
      data: T;
      message: string;
    }
  | undefined;
