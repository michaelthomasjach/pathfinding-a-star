import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router/Router";
import Store from "./store/Store";

const store = new Store().getStore();
const router = new Router(store).getRouter();

// eslint-disable-next-line newline-per-chained-call
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
