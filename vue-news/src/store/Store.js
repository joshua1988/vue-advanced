import { createStore, createLogger } from "vuex"
import actions from '../store/Actions';
import mutations from '../store/Mutations';
import getters from '../store/Getters';

const vuex = new createStore({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
    },
    getters,
    mutations,
    actions,
    plugins: [ createLogger() ]
})

export { vuex };
