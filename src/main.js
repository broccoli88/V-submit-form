import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// app.directive("removeError", {
//   mounted(el) {
//     setTimeout(() => {
//       el.classList.remove("error");
//     }, 3000);
//   },
// });

app.use(router).mount("#app");
