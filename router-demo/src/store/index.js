import { createStore } from "vuex";
import userStore from "./UserState/UserState";
const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        
    },
    modules: {
        userStore
    }
})

export default store