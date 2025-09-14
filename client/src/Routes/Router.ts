import { createRouter, createWebHistory } from "vue-router";
import { Publics } from "./Publics";

export const Router = createRouter({
  history: createWebHistory(), 
  routes: [...Publics]
});
