import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import { DemoRoutes } from "@App/Demo/DemoRoutes";
import { AuthRoutes } from "@App/Auth/AuthRoutes";

const Redirects: RouteRecordRaw[] = [
  { path: "/", redirect: "/signup" }
];

export const Router = createRouter({
  history: createWebHistory(), 
  routes: [
    ...DemoRoutes,
    ...AuthRoutes,
    ...Redirects,
  ],
});
