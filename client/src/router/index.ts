import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("../pages/JobsList.vue"),
    },
    {
      path: "/add-job",
      name: "add-job",
      component: () => import("../pages/AddJob.vue"),
    },
    {
      path: "/job/:id",
      name: "job",
      component: () => import("../pages/Job.vue"),
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: () => import("../pages/NotFound.vue"),
    },
  ],
});

export default router;
