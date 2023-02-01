import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ASoul from "../packages";
import i18n from "./language";

createApp(App).use(router).use(ASoul).use(i18n).mount("#app");
