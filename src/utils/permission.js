import router from '../router'
import { ElMessage } from 'element-plus'
import { getToken } from './user'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 定义登录页面名称（为了方便理解才定义的）
const LOGIN_PAGE_NAME = 'login'
// 定义全局前置守卫（里面有两个坑要注意）
router.beforeEach((to, from, next) => {
  NProgress.start()
  store.commit('clearToken')// 取消上一个页面中的请求
  // // 通过自定义方法获取用户 token 用来判断用户登录状态
  const token = getToken()
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 如果没有登录而且前往的页面不是登录页面，跳转到登录页
    ElMessage.error('请先登录')
    next({ name: LOGIN_PAGE_NAME })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 如果没有登录而且前往的页面是登录页面，跳转到登录页面
    // 这里有一个坑，一定要注意这一步和上一步得分开写
    // 如果把前两步判断合并为 if (!token) next({ name:login })
    // 则会形成登录页面无限刷新的错误，具体成因后面解释
    next()
  } else {
    if (to.name === LOGIN_PAGE_NAME) {
    //   console.log('有token，但想去login页面')
      next({ ...from, replace: true })
    } else {
      if (!store.state.hasGetRoute) {
      // 如果没有获取路由信息，先获取路由信息而后跳转
        store.dispatch('getRouteList').then(() => {
          for (let i = 0; i < store.state.routeList.length; i++) {
            const element = store.state.routeList[i]
            router.addRoute('/', element)
          }
          // 404页面
          const noFound = {
            path: '/:cathchAll(.*)',
            redirect: '/404'
          }
          router.addRoute('/', noFound)
          // 这里也是一个坑，不能使用简单的 next()
          // 如果直接使用 next() 刷新后会一直白屏
          next({ ...to, replace: true })
        })
      } else {
      // 如果已经获取路由信息，直接跳转
        next()
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
