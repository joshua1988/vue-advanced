// main.js : 애플리케이션의 플러그인, 구조를 파악할 수 있는 곳.(router, vuex, ...등)
import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import store from './store/index.js';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
