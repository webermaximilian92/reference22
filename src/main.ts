import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import VueFeather from "vue-feather";
import "./index.scss";

const app = createApp(App);

app.component(VueFeather.name, VueFeather);

app.use(createPinia());

app.mount("#app");
