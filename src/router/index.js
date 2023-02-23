import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // {
  //   path: '/',
  //   redirect: '/index'
  // },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName:'login' */ '@/pages/login/login.vue')
  },
  {
    path: '/',
    name: '/',
    redirect: '/home',
    component: () => import(/* webpackChunkName:'layout' */ '@/pages/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName:'home' */ '@/pages/index/index.vue')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/404.vue')
  }

]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
})

export default router
