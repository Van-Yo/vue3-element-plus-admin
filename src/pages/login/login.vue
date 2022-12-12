<template lang="">
  <div class="login-area">
    <div class="login-box">
      <el-input v-model="user" placeholder="用户名" />
      <el-input v-model="password" placeholder="密码" />
      <p @click="changeMode">{{ mode?'注册':'登录' }}</p>
      <el-button v-if="mode" type="primary" @click="login">登录</el-button>
      <el-button v-else type="primary" @click="register">注册</el-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

import { useStore } from 'vuex'
const user = ref('')
const password = ref('')
const mode = ref(true)
const changeMode = () => {
  mode.value = !mode.value
}
const register = () => {
  console.log(user.value, password.value)
}
const store = useStore()

const login = async () => {
  // 异步调用:dispatch
  const data = {
    user: user.value,
    password: password.value
  }
  store.dispatch('login', data)
}
</script>
<style lang="scss">
.login-area{
    width:100vw;
    height:100vh;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    background:url('../../static/banner-default.jpg');
    background-size:100% 100%;
    .login-box{
        width:500px;
        height:400px;
        border:1px solid red;
        p{
            cursor: pointer;
        }
    }
}

</style>
