import { createRouter, createWebHistory } from "vue-router";

import { DemoRoutes } from "@App/Demo/DemoRoutes";
import { AuthRoutes } from "@App/Auth/AuthRoutes";

export const Router = createRouter({
  history: createWebHistory(), 
  routes: [
    ...DemoRoutes,
    ...AuthRoutes,
  ],
});
