import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SobreMi.vue"),
  },
  {
    path: "/contacto",
    name: "Contacto",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contacto.vue"),
  },
  {
    path: "/articulo",
    name: "Articulo",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Articulo.vue"),
  },
  {
    path: "/noencontrado",
    name: "Noencontrado",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFound.vue"),
  },
  {
    path: "/Administrador/avanzado",
    name: "administrador",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AdministradorAV.vue"),
    props: { tipo: "avanzado" },
  },
  {
    path: "/Administrador/simple",
    name: "administrador",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Administrador.vue"),
    props: { tipo: "simple" },
  },
  {
    path: "/Administrador/home",
    name: "administrador",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    props: { tipo: "home" },
  },
  {
    path: "/Administrador/inicio",
    name: "administrador",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    props: { tipo: "inicio" },
  },
  {
    path: "/Administrador/portada",
    name: "administrador",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    props: { tipo: "portada" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
