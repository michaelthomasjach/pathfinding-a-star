import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router/Router";
import store from "./store";

const router = new Router(store).getRouter();

// eslint-disable-next-line newline-per-chained-call
createApp(App).use(store).use(router).mount("#app");
