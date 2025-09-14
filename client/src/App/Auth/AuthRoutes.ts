import type { RouteRecordRaw } from "vue-router";

export const AuthRoutes: RouteRecordRaw[] = [
  {
    path: "/auth/signin",
    name: "AuthSignin",
    component: () => import("@App/Auth/Containers/SigninContainer.vue")
  },
  {
    path: "/auth/signup",
    name: "AuthSignup",
    component: () => import("@App/Auth/Containers/SignupContainer.vue")
  }
];
