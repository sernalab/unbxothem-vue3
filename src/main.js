import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import registerPrimeVueComponents from "./primevue-components";

const app = createApp(App);

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "p-light",
      cssLayer: false,
    },
  },
});

registerPrimeVueComponents(app);

app.mount("#app");
