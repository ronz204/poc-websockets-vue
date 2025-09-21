import type { RouteRecordRaw } from "vue-router";

export const AuthRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "AuthSignin",
    component: () => import("@App/Auth/Signin/SigninPage.vue")
  },
  {
    path: "/register",
    name: "AuthSignup",
    component: () => import("@App/Auth/Signup/SignupPage.vue")
  }
];
