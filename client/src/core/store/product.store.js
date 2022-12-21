import productService from '@/core/service/product.service';
import { defineStore } from 'pinia';

export const storeProduct = defineStore({
  id: 'storeProduct',

  state: () => ({
    data: {
      data: {},
      message: '',
      statusCode: '',
    },
  }),

  actions: {
    async getProductList(payload) {
      const response = await productService.getProductList(payload);
      const { data, statusCode } = response?.data;
      if (statusCode == '200') {
        this.data = { ...data, message: '' };
      } else {
        this.data = data;
      }
    },
  },
});
