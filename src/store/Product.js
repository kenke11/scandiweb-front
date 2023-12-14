import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export const useProductStore = defineStore("productStore", {
  id: "product",
  state: () => ({
    products: [],
    notification: null,
    apiUrl: process.env.VUE_APP_API_URL,
  }),
  actions: {
    async getProducts() {
      try {
        const response = await axios.get(`${this.apiUrl}/api/products`);
        if (response.status === 200) {
          this.products = response.data;
        } else {
          this.products = [];
        }
      } catch (e) {
        this.setNotification("", e.status);
      }
    },
    async storeProduct(values) {
      const formData = new FormData();
      formData.append("sku", values.sku);
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append(
        "product_type",
        values.product_type ? values.product_type : ""
      );

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
          `${this.apiUrl}/api/products/store`,
          formData
        );

        if (response.status === 200) {
          this.setNotification(response.data.message, response.status);
          await router.push({ name: "productList" });
        }
      } catch (e) {
        this.setNotification("", e.status);
      }
    },
    async deleteProducts(productIds) {
      const formData = new FormData();
      formData.append("ids", productIds);

      try {
        const response = await axios.post(
          `${this.apiUrl}/api/products/destroy`,
          formData
        );

        if (response.status === 200) {
          await this.getProducts();
          this.setNotification(response.data.message, response.status);
        }
      } catch (e) {
        this.setNotification("", e.status);
      }
    },
    setNotification(message, status) {
      this.notification = {};
      if (status > 199 && 300 > status) {
        this.notification = {
          status: "success",
          message: message,
        };
      } else {
        this.notification = {
          status: "error",
          message: "Something went wrong",
        };
      }
    },
  },
  getters: {},
});
