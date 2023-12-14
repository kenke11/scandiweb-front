<template>
  <div class="field_container">
    <label for="sku">{{ label }}</label>
    <div>
      <Field
        :id="id"
        :name="name"
        :type="type"
        :class="{
          invalid: hasError || !!skuErrorMessage,
        }"
        v-model="defaultValue"
        :rules="rules"
        :value="value"
        @change="onInput"
      />
      <p class="h-3 py-1">
        <small><ErrorMessage :name="name" /></small>
        <small v-if="!!skuErrorMessage">{{ skuErrorMessage }}</small>
      </p>
    </div>
  </div>
</template>

<script setup>
import { Field, ErrorMessage } from "vee-validate";
import { ref, watch, defineProps } from "vue";
import { useProductStore } from "@/store/Product";

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
  skuError: {
    type: String,
    required: false,
    default: null,
  },
});

const defaultValue = ref(props.value);
const skuErrorMessage = ref(null);
const product = useProductStore();

const onInput = () => {
  if (props.name === "sku") {
    product.removeSkuErrorMessage();
  }
};

watch(
  () => props.value,
  (newValue) => {
    defaultValue.value = newValue;
  }
);

watch(
  () => props.skuError,
  (newValue) => {
    if (props.name === "sku") {
      skuErrorMessage.value = newValue;
    }
  }
);
</script>
