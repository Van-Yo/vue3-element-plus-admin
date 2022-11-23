<template>
    <div>
        <!-- 这里就可以不用写obj了 -->
        {{name}}
    </div>
    <button @click="changeInfo">点我</button>
</template>
<script>
// *************************toRefs***************************
import {reactive,toRefs} from 'vue'
export default {
    setup() {
        const obj = {name:'wrrrrrr',age:18}
        const recv = reactive(obj)
        function changeInfo(){
            recv.name = 'jokerwanr'
        }
        // 用于批量设置多个数据为响应式数据 👇
        return {...toRefs(recv),changeInfo}
    }
}
</script>
<style lang="">
    
</style>