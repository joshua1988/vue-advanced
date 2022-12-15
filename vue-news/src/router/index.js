import Vue from 'vue'
import VueRouter from 'vue-router'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import CreateListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
    {
        path: '/',
        redirect: '/news',
    },
    {   
        //path: url 주소
        path: '/news',
        // component: url 주소로 갔을때 표시될 컴포넌트
        name: 'news',
        component: CreateListView('NewsView'),
    },
    {
        path: '/ask',
        name: 'ask',
        component: CreateListView('AskView')
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: CreateListView('JobsView')
    },
    {
        path: '/item/:id',
        name: 'item',
        component: ItemView
    },
    {
        path: '/user/:id',
        name: 'user',
        component: UserView
    },
    ]
});