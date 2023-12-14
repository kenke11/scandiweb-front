<template>
  <div class="header">
    <div class="header_container">
      <h3>Product Add</h3>
      <div class="actions">
        <button
          id="save_btn"
          @click="clickSaveButton"
          type="submit"
          class="btn"
        >
          Save
        </button>
        <router-link id="cancel" class="btn" :to="{ name: 'productList' }"
          >Cancel</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  clickSaveButton: {
    type: Function,
    required: true,
  },
});
</script>
