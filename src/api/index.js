import { userApi } from './user'
import { compApi } from './comp'

export const api = {
  ...userApi,
  ...compApi
}
