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
  },
  getters: {},
});
