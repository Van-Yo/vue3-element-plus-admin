<!-- eslint-disable vue/valid-v-model -->
<template>
  <TestSetupApi2props v-model:info="info" v-model:num="num" name="小黑" @parent-click="parentClick" />
</template>

<script setup>
import { ref, reactive } from 'vue'
import TestSetupApi2props from './TestSetupApi2props.vue'
const info = reactive({
  age: 18
})
const num = ref(0)
const parentClick = (val) => {
  console.log(val)
}
</script>

<style lang="scss" scoped>

</style>
