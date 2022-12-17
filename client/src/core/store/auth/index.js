import ApiService from '@/core/service/auth.service';
import Cookies from 'js-cookie';
import { defineStore } from 'pinia';

export const storeAuth = defineStore({
  id: 'storeAuth',

  state: () => ({
    data: {
      data: {},
      message: '',
      statusCode: '',
    },
  }),

  actions: {
    async login(payload) {
      const response = await ApiService.login({
        username: payload?.username,
        password: payload?.password,
      });
      const { data, statusCode } = response?.data;
      if (statusCode == '201') {
        this.data = { ...response?.data, message: '' };
        Cookies.set('uinfo', JSON.stringify(data));
        window.location.href = '/';
      } else {
        this.data = response?.data;
      }
    },
    async vefiryForgot(payload) {
      const response = await ApiService.verifyForgot({
        username: payload?.username,
        email: payload?.email,
      });
      const { data, statusCode } = response?.data;
      if (statusCode == '201') {
        this.data = { ...response?.data, message: '' };
      } else {
        this.data = response?.data;
      }
    },

    async changePassword(payload) {
      const response = await ApiService.changePassword({
        username: payload?.username,
        email: payload?.email,
        password: payload?.password,
      });
      const { data, statusCode } = response?.data;
      if (statusCode == '201') {
        this.data = { ...response?.data, message: '' };
      } else {
        this.data = response?.data;
      }
    },
  },

  getters: {
    getDataLogin: (state) => {
      return state.data;
    },
  },
});
