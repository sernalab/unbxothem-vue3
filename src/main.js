import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Aura from "@primevue/themes/aura";

import registerPrimeVueComponents from "./primevue-components";

const app = createApp(App);

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
  },
});

registerPrimeVueComponents(app);

app.mount("#app");
