<template>
    <div>
        子组件:
        <p>{{obj.name}}</p>
        <p>{{obj.age}}</p>
        <p>{{obj.school}}</p>
    </div>
</template>
<script setup>
// *************************抽离封装***************************
import plbLic from '../config/public.js'
const obj = plbLic().obj
</script>
<style lang="">
    
</style>