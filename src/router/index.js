import { createRouter, createWebHistory } from "vue-router";
import MyPage from "../pages/Mypage/index.vue";
import Home from "../pages/Home/index.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/myPage", name: "myPage", component: MyPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
