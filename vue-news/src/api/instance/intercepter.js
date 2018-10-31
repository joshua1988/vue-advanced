import store from '../../store';

function setRequestOptions(instance) {
  instance.interceptors.request.use(config => {
    const token = store.getters['auth/token'];
    config.headers.Authorization = token;
    return config;
  }, error => {
    const token = error.response.headers.authorization;
    store.commit('SET_TOKEN', token);
    return Promise.reject(error.response);
  });
}

function setResponseOptions(instance) {
  instance.interceptors.response.use(config => {
    const token = config.headers.authorization;
    store.commit('SET_TOKEN', token);
    return config;
  }, error => {
    const token = error.response.headers.authorization;
    store.commit('SET_TOKEN', token);
    return Promise.reject(error.response);
  });
}

export {
  setRequestOptions,
  setResponseOptions,
}