<template>
    <div>
        {{res}}
    </div>
    <button @click="changeStore">点击修改store数据</button>
</template>
<script>
// *************************vuex***************************
import {useStore} from 'vuex'
import {computed} from 'vue'
export default {
    setup() {
        // 从vuex数据仓库里取数据
        const store = useStore()
        const res = computed(()=>{
            // console.log(store.state.name);
            return store.state.name
        })

        const changeStore = ()=>{
            // 异步调用:dispatch
            // store.dispatch('sub','陆小凤')
            
            // 同步调用
            store.commit('trigger','西门吹雪')
        }
        // 修改vuex数据仓库里的数据
        return {res,changeStore}
    }
}
</script>
<style lang="">
    
</style>