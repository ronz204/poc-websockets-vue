import "./style.css";
import Main from "@App/Main.vue";

import { createApp } from "vue";
import { Router } from "./router";

const app = createApp(Main);

app.use(Router);
app.mount("#app");
