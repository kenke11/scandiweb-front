import { createRouter, createWebHistory } from "vue-router";
import ProductListPage from "@/views/ProductListPage.vue";
import CreateProductPage from "@/views/CreateProductPage.vue";

const routes = [
  {
    path: "/",
    name: "productList",
    component: ProductListPage,
  },
  {
    path: "/addproduct",
    name: "product",
    component: CreateProductPage,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
