<template>
    <div>
        {{num}}
    </div>
    <button @click="num++">+1</button>
</template>
<script>
// *************************watchEffect***************************
import {ref,watchEffect} from 'vue'
export default {
    setup() {
        const num = ref(0)
        // watchEffect在组件初始化的时候就会执行一次用于收集依赖（看看回调函数中用到了哪些响应式的数据）
        // 只有上面👆这些被收集的响应式的数据发生变化，才会被监听到，然后执行回调函数
        // 无法像watch一样获取newVal,oldVal
        const res = watchEffect(()=>{
            console.log('watchEffect')
            console.log(num.value);
        })
        return{num}
    }
}
</script>
<style lang="">
    
</style>