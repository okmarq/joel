import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Home1 from "../components/Home1.vue";
import About1 from "../components/About1.vue";
// import About from "../components/About.vue";
// import Contact from "../components/Contact.vue";
// import Experience from "../components/Experience.vue";
// import Portfolio from "../components/Portfolio.vue";
// import WhatIDo from "../components/WhatIDo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/home1",
    name: "Home1",
    component: Home1,
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/about1",
    name: "About1",
    component: About1,
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/About.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../components/Contact.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
  {
    path: "/experience",
    name: "Experience",
    component: () => import("../components/Experience.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import("../components/Portfolio.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
  {
    path: "/whatido",
    name: "WhatIDo",
    component: () => import("../components/WhatIDo.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
