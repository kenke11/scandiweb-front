<template>
  <div class="header">
    <div class="header_container">
      <h3>Product List</h3>
      <div class="actions">
        <router-link id="add-product" class="btn" :to="{ name: 'product' }"
          >ADD</router-link
        >
        <button id="delete-product-btn" class="btn">MASS DELETE</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
