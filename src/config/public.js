/**
 * 公用的数据或者方法
*/
import {reactive} from 'vue'

const plbLic = () => {
    const obj = reactive({
        name:'wrrrrrr',
        age:18,
        school:'清华大学'
    })
    return {obj}
}

export default plbLic