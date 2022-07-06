import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import UsersView from "../views/UsersView";
import CoursesView from "../views/CoursesView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/UsersView",
    name: "UsersView",
    component: UsersView,
  },
  {
    path: "/AdminView",
    name: "AdminView",

    component: () => import("../views/AdminView.vue"),
  },
  {
    path: "/CoursesView",
    name: "CoursesView",
    component: CoursesView,

    accessLevel: "public",
    // meta: {
    //   accessLevel: "private",
    // },
  },
  {
    path: "/EditView",
    name: "EditView",

    component: () => import("../views/EditView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
