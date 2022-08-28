import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from './router/router'
import { vuex } from './store/Store'


createApp(App).use(VueRouter).use(vuex).mount('#app');



