<template>
  <div class="header">
    <div class="header_container">
      <h3>Project List</h3>
      <div class="actions">
        <router-link id="add-product" :to="{ name: 'product' }"
          >ADD</router-link
        >
        |
        <div id="delete-product-btn">MASS DELETE</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
