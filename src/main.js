import Vue from "vue";

import router from "./router";
import App from "./App.vue";

const VueApp = new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
