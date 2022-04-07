import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import LogIn from "../components/LogIn";
import Register from "../components/Register";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/log-in",
    name: "log-in",
    component: LogIn,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
