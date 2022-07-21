import { getDatabase, set, ref, child, get/*, remove, update*/ } from "firebase/database";

export default {

    getters: {
        historyList(state) {
            return state.historyList;
        }
    },
    state: {
        historyList: []
    },
    mutations: {
        UPDATE_HISTORY_LIST(state, payload) {
            state.historyList = payload
        },
    },
    actions: {

        async getHistoryList({getters, commit}) { 
            commit('SET_PROCESSING', true);
            const dbRef = ref(getDatabase());
            const uid = getters.userId;
            await get(child(dbRef, `users/${uid}/history`)).then((data) => {
                if (data.exists()) {
                    const history = data.val()  
                    const historyArray = Object.keys(history).map(key => ({...history[key], id: key}))                     
                    commit('UPDATE_HISTORY_LIST', historyArray);
                    commit('SET_PROCESSING', false);
                } else {
                    commit('UPDATE_HISTORY_LIST', [])
                    commit('SET_PROCESSING', false);
                }
            }).catch((error) => {
                console.error(error);
            });
        },



        async createMeal({getters, commit, dispatch}, data) { 

            const uid = getters.userId; 
            const foodId = Date.now();
            const db = getDatabase();
            commit('SET_PROCESSING', true);
            await set(ref(db, `users/${uid}/meal/${foodId}`), {
                selectedFood: data.selectedFood,
                weight: data.weight
            });
            dispatch('getFoodList');
            commit('SET_PROCESSING', false);
        },
         
    }
}
