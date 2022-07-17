import { createStore } from 'vuex'
import user from '@/store/modules/user'
import general from '@/store/modules/general.js'
import food from '@/store/modules/food.js'

export default createStore({
    modules: {
        general,
        user,
        food
    }
})
