<template>
    <div>
        {{num}}
    </div>
    <div v-if="comShow">
        组件
    </div>
</template>
<script>
// *************************生命周期函数***************************
import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    ref
} from 'vue'
export default {
    setup(){
        console.log('setup');
        onBeforeMount(() => {
            console.log('onBeforeMount','在挂载开始之前被调用')
        });
        onMounted(() => {
            numAutoAdd()
            changeComShow()
            console.log('onMounted','组件挂载时调用')
        });

        onBeforeUpdate(() => {
            console.log('onBeforeUpdate','数据更新时调用')
        });
        onUpdated(() => {
            console.log('onUpdated','数据更改导致的虚拟DOM重新渲染，在这之后会调用该钩子')
        });

        onBeforeUnmount(() => {
            console.log('onBeforeUnmount','在卸载组件实例之前调用')
        });
        onUnmounted(() => {
            console.log('onUnmounted','卸载组件实例后调用')
        });


        const num = ref(0)

        const numAutoAdd = ()=>{
            setInterval(() => {
                num.value++
            }, 5000);
        }

        const comShow = ref(true)

        const changeComShow = ()=>{
            // 一定要是卸载组件实例后才调用onBeforeUnmount，onUnmounted，👇不行，因为修改数据不控制组件
            setInterval(() => {
                comShow.value = false
            }, 5000);
        }




        return {num,numAutoAdd,comShow,changeComShow}
    }
}
</script>
<style lang="">
    
</style>