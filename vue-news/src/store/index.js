import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutation.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {},
        item: {},
        list: [],
    },
    getters: {
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations,
    actions,
});