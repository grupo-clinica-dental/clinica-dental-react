// Definición genérica de la estructura de 'data'
export interface ApiResponseData<T> {
  data: T;
  errors: any;
  message: string;
  succeeded: boolean;
}
