import { Post } from '../plugins/axios'

export function getTableList (data) {
  return Post('/api/getTableList', data)
}

export const compApi = {
  getTableList
}
