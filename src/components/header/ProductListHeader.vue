<template>
  <div class="header">
    <div class="header_container">
      <h3>Product List</h3>
      <div class="actions">
        <router-link id="add-product" class="btn" :to="{ name: 'product' }"
          >ADD</router-link
        >
        <button
          id="delete-product-btn"
          class="btn"
          @click="deleteSelectedProducts"
          :disabled="products.length === 0"
        >
          MASS DELETE
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";

const props = defineProps({
  deleteSelectedProducts: {
    type: Function,
    required: true,
  },
  selectedProducts: {
    type: Array,
    required: false,
    value: [],
  },
});

const products = ref([]);

watch(
  () => props.selectedProducts,
  (newValue) => {
    products.value = newValue;
  }
);
</script>
