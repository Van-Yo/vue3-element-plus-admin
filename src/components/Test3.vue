<template>
    <div>
        {{student.name}}
    </div>
    <div>
        {{student.age}}
    </div>
    <div v-for="(item,index) in friendsList" :key="index">
        姓名：{{item.name}}， 年龄:{{item.age}}
    </div>
    <button @click="changeInfo">点我</button>
</template>
<script>
// *************************reactive 组合式api***************************
import {reactive} from 'vue'
export default {
    setup(){
        // reactive无法操作基本类型数据，只可以操作复杂类型数据👇，修改数据不需要value
        const student = reactive({name:'wrrrrrr',age:18})
        const friendsList = reactive([
            {name:'小明',age:17},
            {name:'小红',age:18}
        ])
        const changeInfo = ()=>{
            student.name = 'jokerwanr'
            student.age = 18.18
            friendsList.push({name:'小西瓜',age:18})
        }
        return {student,friendsList,changeInfo}
    }
}
</script>
<style lang="">
    
</style>