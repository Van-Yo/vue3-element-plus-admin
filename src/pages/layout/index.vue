<template lang="">
  <div class="container">
    <div id="header">
      <div>logo</div>
      <div class="logout" @click="logout">注销</div>
    </div>
    <div style="display:flex;height:calc(100vh - 50px)">
      <div id="nav-bar">
        <el-menu
          :default-active="defaultRoute"
          class="el-menu-vertical-demo"
          @select="handleSelect"
        >
          <div v-for="(item,index) in barList" :key="index">
            <el-menu-item v-if="item.children.length==0" :index="item.path">
              <el-icon><component :is="item.icon" /></el-icon>
              <span>{{ item.name }}</span>
            </el-menu-item>
            <el-sub-menu v-else :index="item.path">
              <template #title>
                <el-icon><component :is="item.icon" /></el-icon>
                <span>{{ item.name }}</span>
              </template>
              <el-menu-item v-for="(jtem,jdex) in item.children" :key="jdex" :index="jtem.path">{{ jtem.name }}</el-menu-item>
            </el-sub-menu>
          </div>
        </el-menu>
      </div>
      <div id="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, onBeforeMount } from 'vue'
import { useRouter, onBeforeRouteUpdate } from 'vue-router'
import { removeToken } from '@/utils/user.js'
import { useStore } from 'vuex'
import { ElMessage, ElMessageBox } from 'element-plus'
const store = useStore()
const router = useRouter()
// 在setup中
const defaultRoute = ref('/home')
onBeforeRouteUpdate((to) => {
  // console.log(to, '=====')
  defaultRoute.value = to.fullPath
})
onBeforeMount(() => {
  // console.log(router.currentRoute.value.fullPath)
  defaultRoute.value = router.currentRoute.value.fullPath
})
const barList = reactive([
  {
    index: '1',
    name: '首页',
    path: '/home',
    icon: 'HomeFilled',
    children: []
  },
  {
    index: '2',
    name: '商品列表',
    path: '/products',
    icon: 'GoodsFilled',
    children: [
      {
        index: '2-1',
        name: '热销产品',
        path: '/hot',
        icon: ''
      }, {
        index: '2-2',
        name: '时令果蔬',
        path: '/fruit',
        icon: ''
      }, {
        index: '2-3',
        name: '鲜杀肉蛋',
        path: '/meat',
        icon: ''
      }
    ]
  },
  {
    index: '3',
    name: '个人中心',
    path: '/person',
    icon: 'Avatar',
    children: []
  }
])
const handleSelect = (index, indexPath, item, routeResult) => {
  // console.log({ index, indexPath, item, routeResult })
  router.push(index)
}
const logout = () => {
  ElMessageBox.confirm(
    '您确定要注销账号吗?',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  )
    .then(() => {
      removeToken()
      store.commit('setHasGetRoute', false)
      store.commit('setRouteList', [])
      router.push('/login')
    })
    .catch(() => {

    })
}
</script>
<style lang="scss" scoped>
.container{
  width: 100vw;
  height: auto;
  position: relative;
  #header{
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding:15px;
    border-bottom: 1px solid #dcdfe6;
  }
  #nav-bar{
    max-width: 250px;
    .el-menu{
      height: 100%;
    }
  }
  #content{
    flex:1;
    padding: 15px;
  }
  .logout{
    cursor: pointer;
  }
}
</style>
