import userService from '@/core/service/user.service';
import { defineStore } from 'pinia';

export const storeUser = defineStore({
  id: 'storeUser',

  state: () => ({
    data: {
      data: {},
      message: '',
      statusCode: '',
    },
  }),

  actions: {
    async createUser(payload) {
      const response = await userService.createUser(payload);
      const { data, statusCode } = response?.data;
      if (statusCode == '201') {
        this.data = { ...response?.data, message: '' };
      } else {
        this.data = response?.data;
      }
    },
  },

  getters: {
    getDateCreate: (state) => {
      return state.data;
    },
  },
});
