<template>
  <router-view />
  <teleport to="body">
    <NotificationMessage v-if="notification" :notification="notification" />
  </teleport>
</template>

<style lang="scss"></style>

<script setup>
import NotificationMessage from "@/components/NotificationMessage.vue";
import { useProductStore } from "@/store/Product";
import { ref, watch } from "vue";

const productStore = useProductStore();
const notification = ref(null);

watch(
  () => productStore.notification,
  (newValue) => {
    if (newValue) {
      notification.value = newValue;
      setTimeout(() => {
        notification.value = null;
      }, 10000);
    } else {
      notification.value = null;
    }
  }
);
</script>

<style lang="sass">
@import '@/styles/main.sass'
</style>
