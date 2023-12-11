<template>
  <div class="header">
    <div class="header_container">
      <h3>Product Add</h3>
      <div class="actions">
        <button id="delete-product-btn" class="btn">Save</button>
        <router-link id="add-product" class="btn" :to="{ name: 'productList' }"
          >Cancel</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup></script>
