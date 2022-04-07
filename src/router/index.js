import { createRouter, createWebHistory } from "vue-router";
import Submit from "../views/Submit.vue";

const routes = [
  {
    path: "/",
    name: "submit",
    component: Submit,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
