import { AxiosError, AxiosInstance } from 'axios';
import * as jsonpatch from 'fast-json-patch';

import { IApiControllerCrud } from '../interfaces';
import { ApiControllerGet } from './apiControllerGet';
export abstract class ApiControllerCrud<T, TFilter>
  extends ApiControllerGet<T, TFilter>
  implements IApiControllerCrud<T>
{
  protected constructor(
    client: AxiosInstance,
    version: string,
    controllerName: string
  ) {
    super(client, version, controllerName);
  }

  async create(m: T): Promise<T | AxiosError | null> {
    return await this.process<T>(this.post('', { data: m }));
  }

  async del(id: number): Promise<boolean | AxiosError | null> {
    return await this.process<boolean>(
      this.delete(id.toString()),
      () => true,
      () => false
    );
  }

  async edit(id: number, m: T, params?: any): Promise<T | AxiosError | null> {
    return await this.process<T>(
      this.put(id.toString(), { data: m, params: params })
    );
  }

  async editPartially(
    id: number,
    currentState: T,
    beforeState: T,
    sendEmpty?: boolean,
    params?: any
  ): Promise<T | AxiosError | null> {
    const data = jsonpatch.compare(
      { ...(beforeState as any) },
      { ...(currentState as any) }
    );
    if (!sendEmpty && (!data || data.length == 0)) {
      return null;
    }
    return await this.process<T>(
      this.patch(id.toString(), { data: data, params: params })
    );
  }
}
