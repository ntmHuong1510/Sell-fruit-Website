import cartService from '@/core/service/cart.service';
import { defineStore } from 'pinia';

export const storeCart = defineStore({
  id: 'storeCart',

  state: () => ({
    data: {
      data: {},
      message: '',
      statusCode: '',
    },
  }),

  actions: {
    async addToCart(payload) {
      const response = await cartService.addToCart(payload);
      const { data, statusCode } = response?.data;
      if (statusCode == '201') {
      } else if (statusCode == '401') {
        window.location.href = '/login';
      } else {
      }
    },
    async cartInfo(payload) {
      const response = await cartService.cartInfo();
      const { data, statusCode } = response?.data;
      if (statusCode == '201') {
        this.data = { ...response?.data, message: '' };
      } else if (statusCode == '401') {
        window.location.href = '/login';
      } else {
        this.data = response?.data;
      }
    },
    async updateQuantity(payload) {
      await cartService.updateQuantity(payload);
    },
    async deleteItemCart(payload) {
      await cartService.deleteItem(payload);
    },
    async createOrder(payload) {
      await cartService.createOrderCart(payload);
    },
  },
});
