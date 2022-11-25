<template>
    <div>
        父组件的值：{{doc}}
        <!-- 通过自定义属性value传递值doc -->
        <!-- 通过子组件自定义属性func传递值、方法getChildInfo -->
        <Test10props :value="doc" @func="getChildInfo"/>
    </div>
    
</template>
<script setup>
// *************************组件传值：父组件***************************
import Test10props from './Test10props.vue'
import {ref} from 'vue'

const doc = ref('hello')

const getChildInfo = (val)=>{
    console.log(val);
    doc.value += val
}
</script>
<style lang="">
    
</style>