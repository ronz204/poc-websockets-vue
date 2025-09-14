import "./style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import Main from "@App/Main.vue";

import { Theme } from "./theme";
import { Router } from "./router";
import PrimeVue from "primevue/config";

const app = createApp(Main);
const pinia = createPinia();

app.use(pinia);
app.use(Router);
app.use(PrimeVue, Theme);

app.mount("#app");
