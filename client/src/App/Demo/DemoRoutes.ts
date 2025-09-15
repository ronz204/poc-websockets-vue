import type { RouteRecordRaw } from "vue-router";

export const DemoRoutes: RouteRecordRaw[] = [
  {
    path: "/demo",
    name: "Demo",
    component: () => import("@App/Demo/DemoPage.vue")
  },
];
