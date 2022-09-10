import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import VueFeather from "vue-feather";
import "./index.scss";
import { createRouter, createWebHistory } from "vue-router";
import ImprintPrivacy from "@/views/ImprintPrivacy.vue";
import MainPage from "./views/MainPage.vue";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Startseite", component: MainPage },
    {
      path: "/impressum",
      name: "Impressum und Datenschutz",
      component: ImprintPrivacy,
    },
  ],
});

app.component(VueFeather.name, VueFeather);

app.use(createPinia());
app.use(router);

app.mount("#app");
