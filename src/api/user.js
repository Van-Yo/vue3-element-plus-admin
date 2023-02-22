import { Post } from '../plugins/axios'

export function login (data) {
  return Post('/api/login', data)
}

export function loginOut (data) {
  return Post('/api/loginOut', data)
}

export function getRouteList (data) {
  return Post('/api/getRouteList', data)
}

export const userApi = {
  login,
  loginOut,
  getRouteList
}
