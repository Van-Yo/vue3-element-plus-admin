<template lang="">
  <div class="container">
    <div id="header">
      <div>logo</div>
      <div>注销</div>
    </div>
    <div id="nav-bar">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        :router="true"
      >
        <div v-for="(item,index) in barList" :key="index">
          <el-menu-item v-if="item.children.length==0" :index="item.path" @click="handleSelect">
            <el-icon><component :is="item.icon" /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
          <el-sub-menu v-else :index="item.path">
            <template #title>
              <el-icon><component :is="item.icon" /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="(jtem,jdex) in item.children" :key="jdex" :index="jtem.path" @click="handleSelect">{{ jtem.name }}</el-menu-item>
          </el-sub-menu>
        </div>
      </el-menu>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const barList = reactive([
  {
    index: '1',
    name: '首页',
    path: '/index',
    icon: 'HomeFilled',
    children: []
  },
  {
    index: '2',
    name: '商品列表',
    path: '',
    icon: 'GoodsFilled',
    children: [
      {
        index: '2-1',
        name: '热销产品',
        path: '',
        icon: ''
      }, {
        index: '2-2',
        name: '时令果蔬',
        path: '',
        icon: ''
      }, {
        index: '2-3',
        name: '鲜杀肉蛋',
        path: '',
        icon: ''
      }
    ]
  },
  {
    index: '3',
    name: '个人中心',
    path: '/login',
    icon: 'Avatar',
    children: []
  }
])
const handleSelect = (item) => {
  console.log(item)
}
</script>
<style lang="scss">
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
    position:absolute;
    top: 50px;
    max-width: 250px;
  }
}
</style>
