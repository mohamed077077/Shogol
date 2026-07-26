
export class ApiError extends Error {
  constructor(
    message: string,
    public code: string,
    public field?: string
  ) {
    super(message);
  }
}

export type ApiResponse<T> = {
  data?: T;
  error?: {
    message: string;
    code: string;
    field?: string;
  };
}