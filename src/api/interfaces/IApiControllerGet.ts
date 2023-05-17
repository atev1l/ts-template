import { AxiosError } from 'axios';

import { PagingModel, PagingOptions } from '../types';

export interface IApiControllerGet<T, TFilter> {
  getAll: (
    opts?: PagingOptions & TFilter & { [key: string]: any }
  ) => Promise<PagingModel<T> | AxiosError>;
  getById: (
    id: number,
    opts?: { [key: string]: any }
  ) => Promise<T | AxiosError | null>;
}
