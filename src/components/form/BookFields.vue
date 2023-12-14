<template>
  <div>
    <InputField
      id="weight"
      label="Weight (in Kg):"
      name="weight"
      :hasError="!!errors.weight"
      rules="required|numeric"
    />
  </div>
</template>

<script setup>
import InputField from "@/components/form/InputField.vue";
import { ref } from "vue";

const errors = ref({});
</script>
