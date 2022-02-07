import Vue from "vue";
import VueRouter from "vue-router";
import Produtos from "../views/Produtos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Produtos",
    component: Produtos,
  },
  {
    path: "/carrinho",
    name: "Carrinho",
    component: function () {
      return import(/* webpackChunkName: "carrinho" */ "../views/Carrinho.vue");
    },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: function () {
      return import(/* webpackChunkName: "checkout" */ "../views/Checkout.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
