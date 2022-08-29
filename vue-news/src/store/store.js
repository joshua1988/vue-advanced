import { createStore, createLogger } from "vuex"
import { fetchNewList, fetchAskList, fetchJobsList } from '../api/common';
import mutations from '../store/mutations'
import actions from '../store/actions'


const vuex = new createStore({
    state: {
        news: [],
        ask: [],
        jobs: []
    },
    getters: {
        fetchedJobs(state){
            return state.jobs;
        }
    },
    mutations,
    actions,
    plugins: [ createLogger() ]

})

export { vuex };