import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/global.scss";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./router/router";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
