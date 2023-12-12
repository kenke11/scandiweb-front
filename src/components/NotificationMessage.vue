<template>
  <div
    :class="`popup-message ${closeNotificationClass} ${notification?.status}`"
  >
    <p>{{ notification?.message }}</p>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

defineProps({
  notification: {
    type: Object,
    required: false,
  },
});

const closeNotificationClass = ref("");

setTimeout(() => {
  closeNotificationClass.value = "close-notification";
}, 8000);
</script>
