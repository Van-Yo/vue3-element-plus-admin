<template lang="">
    <div class="login-area">
        <div class="login-box">
            <el-input v-model="user" placeholder="用户名" />
            <el-input v-model="password" placeholder="密码" />
            <el-button type="primary">登录</el-button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const user = ref('')
const password = ref('')
</script>
<style>
.login-area{
    width:100vw;
    height:100vh;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:center;
    background:url('../../static/banner-default.jpg');
    background-size:100% 100%;
}
    .login-box{
        width:500px;
        height:400px;
        border:1px solid red;
    }
</style>