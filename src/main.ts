import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./index.css";
import "./assets/main.css";
import VueFeather from "vue-feather";

const app = createApp(App);

app.component(VueFeather.name, VueFeather);

app.use(createPinia());

app.mount("#app");
