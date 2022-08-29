import {fetchAskList, fetchJobsList, fetchNewList} from "@/api/common";

export default {
    FETCH_NEWS(context) {
        fetchNewList()
            .then(response => {
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => console.log(error));
    },
    FETCH_ASK(context){
        fetchAskList()
            .then(response => {
                context.commit('SET_ASK',response.data);
            }).catch(error => console.log(error));
    },
    FETCH_JOBS({commit}){
        fetchJobsList()
            .then(({data}) => {
                commit('SET_JOBS', data);
            })
            .catch(error => console.log(error));
    }
}