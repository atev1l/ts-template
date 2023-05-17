import { AxiosError } from 'axios';

export interface IApiControllerCrud<T> {
  create: (m: T) => Promise<T | AxiosError | null>;
  edit: (id: number, m: T, params?: any) => Promise<T | AxiosError | null>;
  editPartially: (
    id: number,
    currentState: T,
    newState: T,
    params?: any
  ) => Promise<T | AxiosError | null>;
  del: (id: number) => Promise<boolean | AxiosError | null>;
}
