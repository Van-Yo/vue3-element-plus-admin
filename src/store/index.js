import { createStore } from 'vuex'
import { api } from '@/api'
import { ElMessage } from 'element-plus'
import { setToken } from '@/utils/user.js'
import filterAsyncRouter from '@/utils/loadRouterView.js'

export default createStore({
  // 创建数据仓库
  state: {
    token: '',
    hasGetRoute: false, // 是否加载了动态路由
    routeList: [], // 动态路由列表
    cancelTokenArr: [] // 取消请求token数组
  },

  // 方法------调用数据库里的数据
  // 同步调用
  mutations: {
    setToken (state, val) {
      state.token = val
    },
    setHasGetRoute (state, val) {
      state.hasGetRoute = val
    },
    setRouteList (state, val) {
      state.routeList = filterAsyncRouter(JSON.parse(JSON.stringify(val)))
    },
    // 添加取消请求token
    pushToken: (state, src) => {
      state.cancelTokenArr.push(src.cancelToken)
    },
    // 调用并清空取消请求token
    clearToken: (state) => {
      state.cancelTokenArr.forEach(item => {
        item('路由跳转取消请求')
      })
      state.cancelTokenArr = []
    }
  },
  // 异步调用
  actions: {
    login (store, data) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve) => {
        const [e, r] = await api.login(data)
        if (!e && r) {
          const token = r.token
          store.commit('setToken', token)
          setToken(token)
          // ElMessage.success('登录成功')
          resolve([null, r])
        } else {
          ElMessage.error('登录失败')
          resolve([e, undefined])
        }
      })
    },
    getRouteList (store, data) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve) => {
        const [e, r] = await api.getRouteList(data)
        if (!e && r) {
          console.log('11111111111111111111111111111111111111', r)
          // const routerList = filterAsyncRouter(JSON.parse(JSON.stringify(r.data.routerList)))
          store.commit('setRouteList', r.routerList)
          store.commit('setHasGetRoute', true)
          // const token = r.data.token
          // store.commit('setToken', token)
          // setToken(token)
          // // ElMessage.success('登录成功')
          resolve([null, r])
        } else {
          // ElMessage.error('登录失败')
          resolve([e, undefined])
        }
      })
    }
  }
})
