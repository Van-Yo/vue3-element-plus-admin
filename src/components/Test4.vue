<template>
    <div>
        {{obj.name}}
    </div>
    <button @click="changeInfo">点我</button>
</template>
<script>
// *************************toRef***************************
import {toRef} from 'vue'
export default {
    setup(){
        const obj = {name:'wrrrrrr',age:18}
        const res = toRef(obj,'name')
        const changeInfo = ()=>{
            res.value = 'jokerwanr'
            // 源数据obj已经被修改，但是视图层却并没有更新
            // 该api可运用于场景：只想在代码逻辑中修改一些值，但不想视图层更新
            console.log(obj);
        }
        return{obj,changeInfo}
    }
}
</script>
<style lang="">
    
</style>