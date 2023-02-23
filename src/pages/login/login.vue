<template lang="">
  <div class="login-area">
    <div class="login-box">
      <el-input v-model="user" placeholder="用户名" style="margin-bottom:10px" />
      <el-input v-model="password" placeholder="密码" type="password" />
      <p @click="changeMode">{{ mode?'注册':'登录' }}</p>
      <el-button v-if="mode" type="primary" :loading="loading" @click="login">登录</el-button>
      <el-button v-else type="primary" @click="register">注册</el-button>
    </div>
  </div>
  <div class="video_56wK2">
    <!--850--><video
      width="100%" src="https://search-operate.cdn.bcebos.com/23ef1fc7fbd5829ac08f5656a4bfc9ba.mp4" poster="https://search-operate.cdn.bcebos.com/cf23aa483c94da0335d7a42b2682f373.png" muted="true" autoplay="true"
      auto-rotate="false" playsinline="true" x5-playsinline="true" webkit-playsinline="true" t7-video-player-type="inline"
      crossorigin="anonymous" loop="true" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const user = ref('admin')
const password = ref('123456')
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
  if (user.value && password.value) {
    loading.value = true
    await store.dispatch('login', data)
    loading.value = false
    router.push('/home')
  } else {
    ElMessage.error('请输入账号和密码')
  }
}
const loading = ref(false)
</script>
<style lang="scss">
.login-area{
    width:100vw;
    height:100vh;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    // background:url('../../static/banner-default.jpg');
    background-size:100% 100%;
    z-index: 9999;
    position: relative;
    .login-box{
        // width:500px;
        // height:400px;
        // border:1px solid red;
        p{
            cursor: pointer;
        }
    }
}
.video_56wK2{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  video{
    width: 100%;
  }
}
</style>
