import Layout from '@/pages/layout/index.vue'
const loadView = (viewPath) => {
  const modules = import.meta.glob('@/pages/*/*.vue')
  console.log(1111111111, modules)
  // 用字符串模板实现动态 import 从而实现路由懒加载
  return modules[`/src/pages/${viewPath}`]
}

const filterAsyncRouter = (routeList) => {
  return routeList.filter((route) => {
    if (route.component) {
      if (route.component === 'Layout') {
        // 如果 component = Layout 说明是布局组件
        // 将真正的布局组件赋值给它
        route.component = Layout
      } else {
        // 如果不是布局组件就只能是页面的引用了
        // 利用懒加载函数将实际页面赋值给它
        route.component = loadView(route.component)
      }
      // 判断是否存在子路由，并递归调用自己
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children)
      }
      return true
    } else {
      return true
    }
  })
}

export default filterAsyncRouter
