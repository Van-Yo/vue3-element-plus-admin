<template>
  <div class="title">
    <slot name="title" />
  </div>
  <div class="content">
    <slot name="content" />
  </div>
</template>

<script setup>
import { useSlots, onMounted } from 'vue'
const slots = useSlots()
onMounted(() => {
  console.log(slots.title())
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
