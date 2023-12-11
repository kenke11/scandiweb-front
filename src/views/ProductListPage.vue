<template>
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
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        // Your product data goes here
        // Example structure:
        {
          name: "Product 1",
          image: "product1.jpg",
          price: "$20",
        },
        {
          name: "Product 2",
          image: "product2.jpg",
          price: "$25",
        },
        {
          name: "Product 1",
          image: "product1.jpg",
          price: "$20",
        },
        {
          name: "Product 2",
          image: "product2.jpg",
          price: "$25",
        },
        {
          name: "Product 1",
          image: "product1.jpg",
          price: "$20",
        },
        {
          name: "Product 2",
          image: "product2.jpg",
          price: "$25",
        },
        {
          name: "Product 1",
          image: "product1.jpg",
          price: "$20",
        },
        {
          name: "Product 2",
          image: "product2.jpg",
          price: "$25",
        },
        {
          name: "Product 1",
          image: "product1.jpg",
          price: "$20",
        },
        {
          name: "Product 2",
          image: "product2.jpg",
          price: "$25",
        },
        {
          name: "Product 1",
          image: "product1.jpg",
          price: "$20",
        },
        {
          name: "Product 2",
          image: "product2.jpg",
          price: "$25",
        },
        {
          name: "Product 1",
          image: "product1.jpg",
          price: "$20",
        },
        {
          name: "Product 2",
          image: "product2.jpg",
          price: "$25",
        },
        // ... More products
      ],
    };
  },
};
</script>
