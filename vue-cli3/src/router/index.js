//import createRouter from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";

// export const router = new VueRouter({
//   routes: [
//     { path: "/news", component: NewsView },
//     { path: "/jobs", component: AskView },
//     { path: "/ask", component: JobsView },
//   ],
// });

const routes = [
  { path: "/", redirect: "/news" },
  { path: "/news", component: NewsView },
  { path: "/jobs", component: JobsView },
  { path: "/ask", component: AskView },
];
//라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});
//라우터 추출
export { router };
