<template>
    <div>
        {{number}}
    </div>
    <div v-for="item in numList" :key="item">
        {{ item }}
    </div>
    <button @click="btnClick">
        点击
    </button>
</template>

<script>
// setup
export default {
    setup(){
        const number = 1
        const numList = [1,2,3,4,5,6]
        const btnClick = ()=>{
            console.log('点击');
        }
        return {number,numList,btnClick}
    }
}
</script>

<style lang="scss" scoped>

</style>