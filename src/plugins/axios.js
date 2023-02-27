import axios from 'axios'
import store from '@/store'

import {
  handleChangeRequestHeader,
  handleConfigureAuth,
  handleAuthError,
  handleGeneralError,
  handleNetworkError
} from '../utils/tools'

axios.interceptors.request.use((config) => {
  config = handleChangeRequestHeader(config)
  config = handleConfigureAuth(config)

  // vuex记录cancelToken
  config.cancelToken = new axios.CancelToken((cancel) => {
    store.commit('pushToken', {
      cancelToken: cancel
    })
  })

  return config
})

axios.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data)
    if (response.data.errno) {
      handleAuthError(response.data.errno)
      handleGeneralError(response.data.errno, response.data.errmsg)
    }
    return response
  },
  (err) => {
    handleNetworkError(err.response.status)
    Promise.reject(err.response)
  }
)

export const Get = (url, params = {}, clearFn) =>
  new Promise((resolve) => {
    axios
      .get(url, { params })
      .then((result) => {
        let res
        if (clearFn !== undefined) {
          res = clearFn(result.data.data)
        } else {
          res = result.data.data
        }
        resolve([null, res])
      })
      .catch((err) => {
        resolve([err, undefined])
      })
  })

export const Post = (url, data, params = {}) => {
  return new Promise((resolve) => {
    axios
      .post(url, data, { params })
      .then((result) => {
        console.log('233333', result)
        resolve([null, result.data.data])
      })
      .catch((err) => {
        resolve([err, undefined])
      })
  })
}
