import Vue from 'vue';
import VueRouter from 'vue-router';
import { ItemView, UserView } from '../views';
import createListView from '../views/CreateListView';
import bus from '../utils/bus.js';
import store from '../store/index.js';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/news' 
    },
    {
      path: '/news',
      name: 'news',
      component: createListView('NewsView'),
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        store.dispatch('FETCH_LIST', routeTo.name)
          .then(next())
          .catch((() => new Error('failed to fetch news items')));
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView'),
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        store.dispatch('FETCH_LIST', routeTo.name)
          .then(next())
          .catch((() => new Error('failed to fetch news items')));
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView'),
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        store.dispatch('FETCH_LIST', routeTo.name)
          .then(next())
          .catch((() => new Error('failed to fetch news items')));
      },
    },
    {
      path: '/item/:id',
      component: ItemView,
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        const itemId = routeTo.params.id;
        store.dispatch('FETCH_ITEM', itemId)
          .then(() => next())
          .catch(err => new Error('failed to fetch item details', err));
      },
    },
    {
      path: '/user/:id',
      component: UserView,
      beforeEnter(routeTo, routeFrom, next) {
        bus.$emit('on:progress');
        const itemId = routeTo.params.id;
        store.dispatch('FETCH_USER', itemId)
          .then(() => next())
          .catch(err => new Error('failed to fetch user profile', err));
      },
    }
  ]
})