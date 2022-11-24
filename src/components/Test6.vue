<template>
    <div>
        <input type="number" v-model="num1"/>
        <input type="number" v-model="num2"/>
        总和{{sum}}
    </div>
</template>
<script>
// *************************computed***************************
import {ref,computed} from 'vue'
export default {
    setup(){
        const num1 = ref(0)
        const num2 = ref(0)
        const sum = computed(()=>{
            return num1.value + num2.value
        })
        return{ num1,num2,sum}
    }
}
</script>
<style lang="">
    
</style>