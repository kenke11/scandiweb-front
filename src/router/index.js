import { createRouter, createWebHashHistory } from "vue-router";
import ProductListPage from "@/views/ProductListPage.vue";
import CreateProductPage from "@/views/CreateProductPage.vue";

const routes = [
  {
    path: "/",
    name: "productList",
    component: ProductListPage,
  },
  {
    path: "/about",
    name: "product",
    component: CreateProductPage,
  },
];

const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

export default router;
