<template>
  <div class="title">
    <slot name="title" />
  </div>
  <div class="content">
    <slot name="content" />
  </div>
</template>

<script setup>
import { ref, useSlots, onMounted, useAttrs, defineExpose } from 'vue'
const slots = useSlots()
const attrs = useAttrs()
const msg = ref(123)
onMounted(() => {
  console.log(attrs) // 除了props传的参数
})
defineExpose({
  msg
})
</script>

<style lang="scss" scoped>
.title{
  width:700px;
  height:40px;
  background:red;
}
.content{
  width:700px;
  height:600px;
  border:1px solid green;
}
</style>
