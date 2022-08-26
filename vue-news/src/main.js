import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router/router'
import { vuex } from './store/store'


createApp(App).use(VueRouter).use(vuex).mount('#app');



