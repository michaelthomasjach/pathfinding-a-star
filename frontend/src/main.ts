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

app.directive('click-outside', {
  mounted(el: any, binding: any, vnode: any) {
    // eslint-disable-next-line no-param-reassign
    el.clickOutsideEvent = function (event: any) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  },
});
app.mount("#app");
