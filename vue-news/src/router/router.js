import {createRouter, createWebHistory} from 'vue-router'
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import ItemView from "../views/ItemView"
import UserView from "../views/UserView";


const router = new createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            component: NewsView
        },
        {
            path: '/ask',
            component : AskView
        },
        {
            path: '/jobs',
            component : JobsView
        },
        {
            path: '/item/:id',
            component : ItemView
        },
        {
            path: '/user/:id',
            component : UserView
        },
    ],

})

export default router;

