import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/Jobs/Jobs.vue";
import JobDetails from "../views/Jobs/JobDetails.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
  {
    // the :id is a so-called route parameter and it is used for the dynamic purposes
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true,
  },
  // Easy redirects
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  // Cath all 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
