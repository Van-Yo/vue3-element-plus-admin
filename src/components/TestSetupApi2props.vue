<template>
  <h1>{{ name }}</h1>
  <br>
  <br>
  <br>
  子组件自动更新父组件基本类型值：
  <h1>{{ num1 }}</h1>
  <button @click="num1++">+1</button>
  <br>
  <br>
  <br>
  子组件自动更新父组件object类型值：
  <h1>{{ info1.age }}</h1>
  <button @click="info1.age++">+1</button>
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>
  子组件触发父组件方法：
  <br>
  <button @click="answer">喊话</button>
</template>

<script setup>
/**
 * defineProps,defineEmits
*/
import { computed } from 'vue'
const props = defineProps({
  name: {
    required: true,
    type: String,
    default: 'name'
  },
  info: {
    required: true,
    type: Object
  },
  num: {
    required: true,
    type: Number
  }
})
const emits = defineEmits(['parentClick', 'update:num', 'update:info'])
const num1 = computed({
  get () {
    return props.num
  },
  set (val) {
    emits('update:num', val)
  }
})
const info1 = computed({
  get () {
    return props.info
  },
  set (val) {
    emits('update:info', val)
  }
})

const answer = () => {
  emits('parentClick', '我是子组件')
}
</script>

<style lang="scss" scoped>

</style>
