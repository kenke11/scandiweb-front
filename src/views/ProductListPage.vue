<template>
  <div>
    <ProductListHeader
      :deleteSelectedProducts="deleteSelectedProducts"
      :selectedProducts="selectedProducts"
    />
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
              :value="product.id"
              v-model="selectedProducts"
          /></label>
          <div>{{ product.sku }}</div>
          <div>{{ product.name }}</div>
          <div>{{ product.price }}$</div>
          <div v-if="product.dvd">Size: {{ product.dvd.size }} MB</div>
          <div v-if="product.book">Weight: {{ product.book.weight }}KG</div>
          <div v-if="product.furniture">
            Dimension: {{ product.furniture.width }}x{{
              product.furniture.height
            }}x{{ product.furniture.length }}
          </div>
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
const selectedProducts = ref([]);

const deleteSelectedProducts = () => {
  projectStore.deleteProducts(selectedProducts.value);
  selectedProducts.value = [];
};

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
