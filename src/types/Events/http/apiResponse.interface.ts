export interface ApiResponse {
  errors: string[];
  message: string;
  succeded: boolean;
}

export type ApiResponseData<T> = ApiResponse & { data: T };
