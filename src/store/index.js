import { createStore } from 'vuex'
import user from '@/store/modules/user'
import general from '@/store/modules/general.js'
import food from '@/store/modules/food.js'
import meal from '@/store/modules/meal.js'
import helper from '@/store/modules/helper.js'

export default createStore({
    modules: {
        general,
        user,
        food,
        meal,
        helper
    }
})
