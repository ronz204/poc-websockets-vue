import { createRouter, createWebHistory } from "vue-router";
import Demo from "@App/Demo.vue";

const routes = [
  {
    path: "/demo",
    component: Demo,
  },
];

export const Router = createRouter({
  history: createWebHistory(), routes
});
