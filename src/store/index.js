import { createStore } from 'vuex'
import { api } from '@/api'
import { ElMessage } from 'element-plus'
import { setToken } from '@/utils/user.js'

export default createStore({
  // 创建数据仓库
  state: {
    token: ''
  },

  // 方法------调用数据库里的数据
  // 同步调用
  mutations: {
    setToken (state, val) {
      state.token = val
    }
  },
  // 异步调用
  actions: {
    login (store, data) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve) => {
        const [e, r] = await api.login(data)
        if (!e && r) {
          const token = r.data.token
          store.commit('setToken', token)
          setToken(token)
          // ElMessage.success('登录成功')
          resolve([null, r])
        } else {
          ElMessage.error('登录失败')
          resolve([e, undefined])
        }
      })
    }
  }
})
