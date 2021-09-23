import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/font.css";
import "./assets/css/tailwind.css";
import "./assets/js/owl.carousel.js";

createApp(App).use(store).use(router).mount("#app");
