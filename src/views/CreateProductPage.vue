<template>
  <div>
    <ProductCreateHeader :clickSaveButton="clickSaveButton" />
    <div class="add_product">
      <Form @submit="onSubmit" v-slot="{ errors }" id="product_form">
        <InputField
          id="sku"
          label="SKU:"
          name="sku"
          :hasError="!!errors.sku"
          rules="required|no_spaces"
        />
        <InputField
          id="name"
          label="Name:"
          name="name"
          :hasError="!!errors.name"
          rules="required"
        />
        <InputField
          id="price"
          label="Price in $:"
          name="price"
          :hasError="!!errors.price"
          rules="required|numeric"
        />

        <ProductTypeSelector
          @changeType="changeType"
          :hasError="!!errors.product_type"
        />

        <component
          v-if="selectedType"
          :is="selectedTypeComponent"
          :errors="errors"
        />

        <button hidden id="save_form"></button>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form } from "vee-validate";
import InputField from "@/components/form/InputField.vue";
import ProductTypeSelector from "@/components/form/ProductTypeSelector.vue";
import { ref, watch } from "vue";
import FurnitureFields from "@/components/form/FurnitureFields.vue";
import DVDFields from "@/components/form/DVDFields.vue";
import BookFields from "@/components/form/BookFields.vue";
import ProductCreateHeader from "@/components/header/ProductCreateHeader.vue";
import { useProductStore } from "@/store/Product";

const selectedType = ref("");
const selectedTypeComponent = ref("");

const productStore = useProductStore();

const changeType = (type) => {
  selectedType.value = type;
};

const clickSaveButton = () => {
  document.getElementById("save_form").click();
};

const onSubmit = (value) => {
  productStore.storeProduct(value);
};

watch(
  () => selectedType.value,
  (newValue) => {
    switch (newValue) {
      case "dvd":
        selectedTypeComponent.value = DVDFields;
        break;
      case "book":
        selectedTypeComponent.value = BookFields;
        break;
      case "furniture":
        selectedTypeComponent.value = FurnitureFields;
        break;
      default:
        selectedTypeComponent.value = "";
    }
  }
);
</script>
