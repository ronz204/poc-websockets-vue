import type { RouteRecordRaw } from "vue-router";

export const AuthRoutes: RouteRecordRaw[] = [
  {
    path: "/signin",
    name: "AuthSignin",
    component: () => import("@App/Auth/Signin/SigninPage.vue")
  },
  {
    path: "/signup",
    name: "AuthSignup",
    component: () => import("@App/Auth/Signup/SignupPage.vue")
  }
];
