import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export abstract class ApiControllerBase {
  protected client: AxiosInstance;
  protected v: string;
  protected controllerName: string;

  protected constructor(
    client: AxiosInstance,
    version: string,
    controllerName: string
  ) {
    this.client = client;
    this.v = version;
    this.controllerName = controllerName;
  }

  protected url(next: string | undefined = '') {
    // previous implementation
    // return "api/" + this.v + "/"
    // + this.controllerName + (next ? "/" + next : "")
    return this.controllerName + (next ? '/' + next : '/');
  }

  protected async process<T>(
    request: Promise<T>,
    onSuccess: ((x: T) => any) | null = null,
    onError: ((y: AxiosError) => T | any) | null = null
  ): Promise<T | AxiosError> {
    try {
      const r = await request;
      return onSuccess == null ? (r as T) : onSuccess(r);
    } catch (e: any) {
      onError && onError(e as AxiosError);
      return e;
    }
  }

  // eslint-disable-next-line
  protected async get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return await ApiControllerBase.requestInternal(
      this.client.get(this.url(url), { ...config })
    );
  }

  // eslint-disable-next-line
  protected async post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return await ApiControllerBase.requestInternal(
      this.client.post(this.url(url), config?.data, config)
    );
  }

  // eslint-disable-next-line
  protected async patch<T = any, R = AxiosResponse<T>, D = any>(
    url?: string,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return await ApiControllerBase.requestInternal(
      this.client.patch(this.url(url), config?.data, config)
    );
  }

  // eslint-disable-next-line
  protected async put<T = any, R = AxiosResponse<T>, D = any>(
    url?: string,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return await ApiControllerBase.requestInternal(
      this.client.put(this.url(url), config?.data, config)
    );
  }

  // eslint-disable-next-line
  protected async delete<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<T> {
    return await ApiControllerBase.requestInternal(
      this.client.delete(this.url(url), config)
    );
  }

  private static async requestInternal<T = any>(
    req: Promise<AxiosResponse<T>>
  ) {
    const r = await req;
    return r.data;
  }
}
