import {createStore} from 'vuex'

export default createStore({
    // 创建数据仓库
    state:{
        name:'wrrrrrr'
    },

    // 方法------调用数据库里的数据
    // 同步调用
    mutations:{
        trigger(state,val){
            state.name = val
        }
    },
    // 异步调用
    actions:{
        sub(store,val){
            store.commit('trigger',val)
        }
    }
})