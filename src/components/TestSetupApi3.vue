<template>
  <TestSetupApi3Slots a="1" b="2" c="333" style="color:#fff">
    <template #title>
      标题1
    </template>
    <template #content>
      内容1
    </template>
  </TestSetupApi3Slots>
  <TestSetupApi3Slots ref="com">
    <template #title>
      标题2
    </template>
    <template #content>
      内容2
    </template>
  </TestSetupApi3Slots>
</template>

<script setup>
import TestSetupApi3Slots from './TestSetupApi3Slots.vue'
import { ref, onMounted } from 'vue'
const com = ref(null)
onMounted(() => {
  console.log(com.value.msg)
})
</script>

<style lang="scss" scoped>

</style>
