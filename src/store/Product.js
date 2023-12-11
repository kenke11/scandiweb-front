import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("productStore", {
  id: "product",
  state: () => ({
    products: [],
  }),
  actions: {
    async getProducts() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products");
        if (response.status === 200) {
          this.products = response.data;
        } else {
          this.products = [];
        }
      } catch (e) {
        this.products = [];
      }
    },
    async storeProduct(values) {
      console.log(values);
      const formData = new FormData();
      formData.append("sku", values.sku);
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("product_type", values.product_type);

      switch (values.product_type) {
        case "dvd":
          formData.append("size", values?.size);
          break;
        case "book":
          formData.append("weight", values.weight);
          break;
        case "furniture":
          formData.append("height", values.height);
          formData.append("width", values.width);
          formData.append("length", values.length);
          break;
      }

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/products/store",
          formData
        );

        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
    async deleteProducts(productIds) {
      const formData = new FormData();
      formData.append("ids", productIds);

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/products/destroy",
          formData
        );

        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {},
});
