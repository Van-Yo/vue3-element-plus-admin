<template>
    <div>
        <!-- 使用父组件传递过来的值 -->
        父组件的值:{{props.value}}
    </div>
    <button @click="handClick">子传值给父</button>
</template>
<script setup>
// *************************组件传值：子组件***************************
// 从 vue 中引入defineProps, defineEmits
import {defineProps,defineEmits} from 'vue'

// 接收父组件传递过来的值
const props = defineProps(['value'])
// 接收父组件传递过来的方法
const emit = defineEmits(['func'])

const handClick = ()=>{
    //调用父组件传递过来的方法，传入参数
    emit('func','world')
}

</script>
<style lang="">
    
</style>