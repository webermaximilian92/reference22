import { createRouter, createWebHistory } from "vue-router";
import ImprintPrivacy from "@/views/ImprintPrivacy.vue";
import MainPage from "@/views/MainPage.vue";

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

export default router;
