<template>
  <div>
    <InputField
      id="height"
      label="Height:"
      name="height"
      :hasError="!!errors.height"
      rules="required|numeric"
    />
    <InputField
      id="width"
      label="Width:"
      name="width"
      :hasError="!!errors.width"
      rules="required|numeric"
    />
    <InputField
      id="length"
      label="Length:"
      name="length"
      :hasError="!!errors.length"
      rules="required|numeric"
    />
  </div>
</template>

<script setup>
import InputField from "@/components/form/InputField.vue";
import { ref } from "vue";

const errors = ref({});
</script>
