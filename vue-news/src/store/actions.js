import {
    fetchNewList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo
} from "@/api/common";

export default {
    FETCH_NEWS({commit}) {
        fetchNewList()
            .then(response => {
                commit('FETCHED_NEWS', response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ASK({commit}){
        fetchAskList()
            .then(response => {
                commit('FETCHED_ASK', response.data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_JOBS({commit}){
        fetchJobsList()
            .then(response =>{
                commit('FETCHED_JOBS',response.data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_USER({commit},userName){
        fetchUserInfo(userName)
            .then(response => {
              commit('FETCHED_USER',response.data);
            })
            .catch(error =>{
                console.log(error);
            })
    }
}