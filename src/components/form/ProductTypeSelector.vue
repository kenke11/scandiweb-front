<template>
  <div class="field_container">
    <label for="productType">Product Type:</label>
    <div>
      <Field
        id="productType"
        name="product_type"
        as="select"
        @change="changeType"
        :class="{ invalid: hasError }"
        rules="required"
      >
        <option value="" disabled>Choose Type</option>
        <option value="dvd">DVD</option>
        <option value="book">Book</option>
        <option value="furniture">Furniture</option>
      </Field>
      <p class="h-3 py-1">
        <ErrorMessage name="product_type" class="px-3 text-sm text-red-500" />
      </p>
    </div>
  </div>
</template>

<script setup>
import { Field, ErrorMessage, defineProps, defineEmits } from "vee-validate";
const emit = defineEmits(["changeType"]);

defineProps({
  hasError: {
    type: Boolean,
    required: false,
    defaults: false,
  },
});

const changeType = (selected) => {
  emit("changeType", selected.target.value);
};
</script>
