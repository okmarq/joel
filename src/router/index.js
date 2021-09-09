import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Home1 from "../views/Home1.vue";
import About1 from "../views/About1.vue";
// import About from "../views/About.vue";
// import Contact from "../views/Contact.vue";
// import Experience from "../views/Experience.vue";
// import Portfolio from "../views/Portfolio.vue";
// import WhatIDo from "../views/WhatIDo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeInRight",
    },
  },
  {
    path: "/home1",
    name: "Home1",
    component: Home1,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeInRight",
    },
  },
  {
    path: "/about1",
    name: "About1",
    component: About1,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeInLeft",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeInLeft",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeInLeft",
    },
  },
  {
    path: "/experience",
    name: "Experience",
    component: () => import("../views/Experience.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeInLeft",
    },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../views/Portfolio.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeInLeft",
    },
  },
  {
    path: "/whatido",
    name: "WhatIDo",
    component: () => import("../views/WhatIDo.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeInLeft",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
