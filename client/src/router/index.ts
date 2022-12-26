import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Home.vue"),
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
      component: () => import("../pages/EditJob.vue"),
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: () => import("../pages/NotFound.vue"),
    },
  ],
});

export default router;
