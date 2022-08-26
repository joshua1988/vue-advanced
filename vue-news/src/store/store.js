import { createStore } from "vuex"
import { fetchNewList } from '../api/common';

const vuex = new createStore({
    state: {
        news: []
    },
    getters: {

    },
    mutations: {

    },
    actions: {
        FETCH_NEWS() {
            fetchNewList()
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => console.log(error));
        }
    }
})

export { vuex };
