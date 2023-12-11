<template>
  <div>
    <ProductListHeader />
    <div class="product-container">
      <div class="product-grid">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="product-item"
        >
          <label :for="'product-checkbox-' + index">
            <input
              :id="'product-checkbox-' + index"
              class="delete-checkbox"
              type="checkbox"
          /></label>
          <div>{{ product.sku }}</div>
          <div>{{ product.name }}</div>
          <div>{{ product.price }}$</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "@/store/Product";
import { onBeforeMount, ref, watch } from "vue";
import ProductListHeader from "@/components/header/ProductListHeader.vue";

const projectStore = useProductStore();
const products = ref(projectStore.products);

onBeforeMount(() => {
  projectStore.getProducts();
  products.value = projectStore.products;
});

watch(
  () => projectStore.products,
  (newValue) => {
    products.value = newValue;
  }
);
</script>
