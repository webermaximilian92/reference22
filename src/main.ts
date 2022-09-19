import { createApp } from "vue";
import App from "@/App.vue";
import VueFeather from "vue-feather";
import { createPinia } from "pinia";
import router from "./router";
import "./global.scss";

const app = createApp(App);

app.component(VueFeather.name, VueFeather);
app.use(createPinia());
app.use(router);

app.mount("#app");
