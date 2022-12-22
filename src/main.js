import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './App.vue'
import createStore from './store/index'
import router from './router/index.js'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import 'vue-cesium/dist/index.css'
import './assets/style/normalize.css'
import * as Icons from '@element-plus/icons-vue'

import Pagination from '@/components/Pagination/index.vue' // 全局分页组件

// import './assets/main.css'

const app = createApp(App)
app.use(VueCesium)
app.use(createStore)
app.use(router)
app.use(ElementPlus)

// 注册全局组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key])
})
app.component('Pagination', Pagination)
app.mount('#app')
