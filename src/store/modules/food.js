import { getDatabase, set, ref, child, get, remove } from "firebase/database";

export default {

    getters: {
        foodList(state) {
            return state.foodList;
        }
    },
    state: {
        foodList: []
    },
    mutations: {
        UPDATE_FOOD(state, payload) {
            state.foodList = payload
        }
    },
    actions: {
        async removeFood({commit, getters, dispatch}, id) {
            const uid = getters.userId; 
            const foodId = id;
            const db = getDatabase();
            commit('SET_PROCESSING', true);
            await remove(ref(db, `users/${uid}/food/${foodId}`));
            dispatch('getFoodList');
            commit('SET_PROCESSING', false);
        },

        async createFood({getters, commit, dispatch}, food) { 
            const uid = getters.userId; 
            const foodId = Date.now();
            const db = getDatabase();
            commit('SET_PROCESSING', true);
            await set(ref(db, `users/${uid}/food/${foodId}`), {
                title: food.title,
                energy: food.energy,
                protein: food.protein,
                fat: food.fat,
                carb: food.carb
            });
            dispatch('getFoodList');
            commit('SET_PROCESSING', false);
        },

        getFoodList({getters, commit}) { 
            commit('SET_PROCESSING', true);
            const dbRef = ref(getDatabase());
            const uid = getters.userId;
            get(child(dbRef, `users/${uid}/food`)).then((data) => {
                if (data.exists()) {
                    const foods = data.val()  
                    const foodsArray = Object.keys(foods).map(key => ({...foods[key], id: key}))                     
                    commit('UPDATE_FOOD', foodsArray);
                    commit('SET_PROCESSING', false);
                } else {
                    commit('UPDATE_FOOD', [])
                    commit('SET_PROCESSING', false);
                }
            }).catch((error) => {
                console.error(error);
            });
        }
    }
}
