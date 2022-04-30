import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ASoul from "../packages";

createApp(App)
  .use(router)
  .use(ASoul)
  .mount("#app");
