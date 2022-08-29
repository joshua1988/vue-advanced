import axios from "axios";

//공통 URL
const config = {
    baseUrl : "https://api.hnpwa.com/v0/"
};

//news 리스트 불러오기
function fetchNewList() {
    return axios.get(config.baseUrl + "news/1.json");
}
//ask 리스트 불러오기
function fetchAskList() {
     return axios.get(config.baseUrl + "ask/1.json");
}
function fetchJobsList() {
    return axios.get(config.baseUrl + "jobs/1.json");
}
function fetchUserInfo(userName){
    return axios.get(`${config.baseUrl}user/${userName}.json`);
}
function fetchItemList(userId){
    return axios.get(`${config.baseUrl}item/${userId}.json`);
}

export {
    fetchNewList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemList
}