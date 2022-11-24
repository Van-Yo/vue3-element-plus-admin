<template>
    <h1>shallowReactive 监听了第一层属性的值，一旦发生改变，则更新视图;其他层，虽然值发生了改变，但是视图不会进行更新</h1>
    <h1>shallowRef 只处理基本类型数据，其他类型数据，虽然值发生改变，但是视图不会更新，要等到其他更新视图情况时才会更新</h1>
    <h1>shallow ：有 ‘浅’ 的意思顾名思义这个是无法做到深度监听的：</h1>
    <div>
        shallowReactive第一层数据：{{name}}<button @click="name='jokerwanr'">点击修改第一层数据</button>
        <br>
        shallowReactive非第一层数据：{{info.age}}<button @click="changeInfo">点击修改非第一层数据</button>
        <br>
        shallowRef包含非基本数据{{p2.num}}<button @click="p2.num++">p2数字++</button>
        <br>
        shallowRef包含基本数据{{p3}}<button @click="p3++">p3数字++</button>
    </div>
</template>
<script>
// *************************shallowRef,shallowReactive***************************
import {shallowRef,shallowReactive,toRefs} from 'vue'
export default {
    setup() {
        // shallowRef只处理基本类型数据
        const p3 = shallowRef(0)
        const p2 = shallowRef({
            num:0
        })
        // shallowReactive只处理第一层数据
        const p1 = shallowReactive({
            name:'wrrrrrr',
            info:{
                age:18
            }
        })
        const changeInfo = ()=>{
            p1.info.age ++
            console.log(p1.info.age);
        }
        return{p2,p3,changeInfo,...toRefs(p1)}
    }
}
</script>
<style lang="">
    
</style>