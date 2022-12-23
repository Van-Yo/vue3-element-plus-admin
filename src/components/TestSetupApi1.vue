<template>
  <h1>{{ name }}</h1>
  <h1>{{ info.age }}</h1>
  <h1>{{ brief }}</h1>
</template>

<script setup>
/**
 * ref, reactive, computed
*/
import { ref, reactive, computed } from 'vue'
const name = ref('wrrrrrr')
const info = reactive({
  age: 18,
  hobby: 'basketball'
})
const brief = computed(() => {
  return `姓名：${name.value}，年龄：${info.age}`
})
</script>

<style lang="scss" scoped>

</style>
