import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/views/HomePage.vue";
import PageNotFound from "@/views/PageNotFound.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: HomePage },
    {
      path: "*",
      name: "PageNotFound",
      component: PageNotFound,
    },
  ],
});

export default router;
