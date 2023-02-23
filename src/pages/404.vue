<template>
  <section class="error-page-area">
    <div class="container">
      <img src="../assets/err_404.jpg" alt="" @click="gohome">
    </div>
  </section>
</template>

<script setup>
import router from '../router'

const gohome = () => {
  router.replace('/')
}
</script>

<style lang="scss" scoped>
.error-page-area{
    height: 100vh;
    width: 100vw;
    background: #fff;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
    .container{
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center;     /* 垂直居中 */
    }
}
</style>
