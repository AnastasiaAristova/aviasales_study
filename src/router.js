import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const page = (path) => () => import(`@pages${path}`);
const routes = [
  {
    path: "/",
    name: "searching-of-tickets",
    component: page("SearchingOfTickets"),
  },

];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;