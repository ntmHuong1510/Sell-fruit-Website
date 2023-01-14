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
  },
});
