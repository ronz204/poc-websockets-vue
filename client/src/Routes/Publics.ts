import type { RouteRecordRaw } from "vue-router";
import Demo from "@App/Demo.vue";

export const Publics: RouteRecordRaw[] = [
  {
    path: "/demo",
    name: "Demo",
    component: Demo
  },
];
