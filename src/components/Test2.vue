<template>
    <div>
        {{name}}
    </div>
    <div>
        {{score}}
    </div>
    <div>
        {{obj.hobby}}
    </div>
    <div v-for="(item,index) in friendsList" :key="index">
        {{item.name}}
    </div>

    <button @click="addNum">点我</button>
</template>
<script>
// *************************ref 组合式api***************************
import {ref} from 'vue'
export default {
    setup(){
        const name = ref('wrrrrrr')
        const score = ref(99)
        // 建议ref用来操作基本数据类型 👆，修改数据需要value
        const obj = ref({hobby:'footerball'})
        const friendsList = ref([{name:'小明',age:18}])
        const addNum = ()=>{
            name.value = 'jokerwanr'
            score.value = 100
            obj.value.hobby = 'basketball'
            friendsList.value[0].name = '小红'
        }
        return {name,score,obj,friendsList,addNum}
    }
}
</script>
<style lang="">
    
</style>