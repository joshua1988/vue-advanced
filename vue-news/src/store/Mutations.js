export default {
    FETCHED_NEWS(state, news){
        state.news = news;
    },
    FETCHED_ASK(state, ask){
        state.ask = ask;
    },
    FETCHED_JOBS(state, jobs){
        state.jobs = jobs;
    },
    FETCHED_USER(state, user){
        state.user = user;
    },
    FETCHED_ITEMS(state, item){
        state.item = item;
    }
}