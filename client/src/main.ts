import "./style.css";
import { createApp } from "vue";
import Main from "@App/Main.vue";

import { Theme } from "./theme";
import { Router } from "./router";
import PrimeVue from "primevue/config";

const app = createApp(Main);

app.use(Router);
app.use(PrimeVue, Theme);

app.mount("#app");
