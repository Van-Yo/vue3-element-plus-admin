<template>
    <div>
        {{num}}
        {{num2}}
        {{obj.info.school}}
        <button @click="num++">点击+1</button>
        <button @click="obj.info.school = '北京大学'">点击改变学校名字</button>
    </div>
</template>
<script>
// *************************watch***************************
import {ref,reactive,watch} from 'vue'
export default {
    setup() {
        const num = ref(0)
        const num2 = ref(0)
        const obj = reactive({
            name:'wrrrrrr',
            info:{
                school:'清华大学'
            }
        })
        // 监听1个ref数据
        watch(num,(newVal,oldVal)=>{
            console.log({newVal,oldVal});
        })
        // 监听多个ref数据
        watch([num,num2],(newVal,oldVal)=>{
            console.log({newVal,oldVal});
        })
        // 监听reactive数据
        // 只能监听到最新的newVal，不能监听到oldVal
        watch(obj,(newVal,oldVal)=>{
            console.log({newVal,oldVal});
        })
        // 监听reactive数据中某一个值的变化
        watch(()=>obj.info.school,(newVal,oldVal)=>{
            console.log({newVal,oldVal});
        })
        return {num,num2,obj}
    }
}
</script>
<style lang="">
    
</style>