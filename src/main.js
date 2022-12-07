import { createApp } from 'vue'
import VueCesium from 'vue-cesium'
import App from './App.vue'
import createStore from './store/index'
import router from './router/index.js'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import 'vue-cesium/dist/index.css'
import './assets/style/normalize.css'

// import './assets/main.css'

const app = createApp(App)
app.use(VueCesium)
app.use(createStore)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
