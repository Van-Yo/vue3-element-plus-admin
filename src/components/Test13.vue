<template>
    <div>
        父组件：
        <p>{{obj.name}}</p>
        <p>{{obj.age}}</p>
        <p>{{obj.school}}</p>
    </div>
    <Child></Child>
</template>
<script setup>
// *************************抽离封装***************************
import Child from './Test13Child.vue'
import plbLic from '../config/public.js'
const obj = plbLic().obj
</script>
<style lang="">
    
</style>