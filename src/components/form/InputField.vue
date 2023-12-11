<template>
  <div class="field_container">
    <label for="sku">{{ label }}</label>
    <div>
      <Field
        :id="id"
        :name="name"
        :type="type"
        :class="{
          invalid: hasError,
        }"
        v-model="defaultValue"
        :rules="rules"
        :value="value"
      />
      <p class="h-3 py-1">
        <ErrorMessage :name="name" class="px-3 text-sm text-red-500" />
      </p>
    </div>
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from "vee-validate";
import { ref, watch, defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
    required: false,
  },
  label: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
    default: "",
  },
  hasError: {
    type: Boolean,
    required: false,
    default: false,
  },
  value: {
    type: String,
    required: false,
    default: "",
  },
});
const defaultValue = ref(props.value);
watch(
  () => props.value,
  (newValue) => {
    defaultValue.value = newValue;
  }
);
</script>
