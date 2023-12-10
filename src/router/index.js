import { createRouter, createWebHashHistory } from "vue-router";
import ProductListPage from "@/views/ProductListPage.vue";

const routes = [
  {
    path: "/",
    name: "productList",
    component: ProductListPage,
  },
  {
    path: "/about",
    name: "product",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

export default router;
