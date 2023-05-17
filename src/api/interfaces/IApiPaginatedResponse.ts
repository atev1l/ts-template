//
export interface IApiPaginatedResponse<T> {
  count: number,
  result: T[]
}
