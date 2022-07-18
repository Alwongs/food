export default {

    getters: {
        isAsideOpen(state)  {
            return state.isAsideOpen;
        },
        isCreateFoodOpen(state) {
            return state.isCreateFoodOpen;            
        }
    },
    state: {
        isAsideOpen: false,
        isCreateFoodOpen: false
    },
    mutations: {
        TOGGLE_ASIDE(state) {
            state.isAsideOpen = !state.isAsideOpen;
        },
        OPEN_CREATE_FOOD(state, payload) {
            state.isCreateFoodOpen = payload;
        },                 
    }
}
