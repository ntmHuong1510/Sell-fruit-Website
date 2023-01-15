import historyService from '@/core/service/history.service';
import { defineStore } from 'pinia';

export const storeHistory = defineStore({
  id: 'storeHistory',

  state: () => ({
    data: {
      data: {},
      message: '',
      statusCode: '',
    },
  }),

  actions: {
    async getOrders() {
      const response = await historyService.getOrders();
      const { data, statusCode } = response?.data;
      if (statusCode == '201') {
        this.data = { ...data, message: '' };
      } else if (statusCode == '401') {
        window.location.href = '/login';
      } else {
        this.data = response?.data;
      }
    },
    async getOrdersAdmin() {
      const response = await historyService.getOrdersAll();
      const { data, statusCode } = response?.data;
      if (statusCode == '201') {
        this.data = { ...data, message: '' };
      } else if (statusCode == '401') {
        window.location.href = '/login';
      } else {
        this.data = response?.data;
      }
    },
    async getOrderByIdAdmin(payload) {
      const response = await historyService.getOrderById(payload);
      const { data, statusCode } = response?.data;
      if (statusCode == '201') {
        this.data = { ...data, message: '' };
      } else if (statusCode == '401') {
        window.location.href = '/login';
      } else {
        this.data = response?.data;
      }
    },
    async updateOrderStatusAdmin(payload) {
      await historyService.updateOrderStatus(payload);
    },
  },
});
