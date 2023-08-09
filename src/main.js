import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification"; // Importing the toast plugin without PluginOptions
import "vue-toastification/dist/index.css";

const app = createApp(App);

// Configure the toast plugin
const toastOptions = {
  // Example global configuration options
  position: "top-center",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  draggable: true,
  // You can add more global options here
};

// Install the toast plugin globally with the specified options
app.use(Toast, toastOptions);

app.use(router);
app.mount("#app");
