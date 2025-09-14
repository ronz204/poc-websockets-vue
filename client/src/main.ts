import "./style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import Main from "@App/Main.vue";

import { Theme } from "./theme";
import PrimeVue from "primevue/config";
import { Router } from "@Routes/Router";

const app = createApp(Main);
const pinia = createPinia();

app.use(pinia);
app.use(Router);
app.use(PrimeVue, Theme);

app.mount("#app");
