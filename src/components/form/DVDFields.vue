<template>
  <div>
    <InputField
      id="size"
      label="Size (in MB):"
      name="size"
      :hasError="!!errors.size"
      rules="required"
    />
  </div>
</template>

<script setup>
import InputField from "@/components/form/InputField.vue";
import { ref } from "vue";

const errors = ref({});
</script>
