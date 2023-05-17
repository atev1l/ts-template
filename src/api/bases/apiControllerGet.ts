import { AxiosError, AxiosInstance } from 'axios';

import { IApiControllerGet } from '../interfaces';
import { PagingModel } from '../types';
import { ApiControllerBase } from './apiControllerBase';

export abstract class ApiControllerGet<T, TFilter>
  extends ApiControllerBase
  implements IApiControllerGet<T, TFilter>
{
  protected constructor(cl: AxiosInstance, v: string, controllerName: string) {
    super(cl, v, controllerName);
  }

  async getById(id: number, opts?: any): Promise<T | AxiosError> {
    return await this.process<T>(this.get(id.toString(), { params: opts }));
  }

  async getAll(
    opts?: TFilter & { [key: string]: any }
  ): Promise<PagingModel<T> | AxiosError> {
    return await this.process<PagingModel<T>>(this.get('', { params: opts }));
  }
}
