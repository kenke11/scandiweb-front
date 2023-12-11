<template>
  <div>
    <InputField
      id="height"
      label="Height:"
      name="height"
      :hasError="!!errors.height"
      rules="required"
    />
    <InputField
      id="width"
      label="Width:"
      name="width"
      :hasError="!!errors.width"
      rules="required"
    />
    <InputField
      id="length"
      label="Length:"
      name="length"
      :hasError="!!errors.length"
      rules="required"
    />
  </div>
</template>

<script setup>
import InputField from "@/components/form/InputField.vue";
import { ref } from "vue";

const errors = ref({});
</script>
