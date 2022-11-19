import { defineStore } from 'pinia';
import { GET_DATA_LOGIN } from './type';
import ApiService from '@/core/service/auth.service';
import Cookies from 'js-cookie';

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
        Cookies.set('token', data?.token);
        window.location.href = '/';
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
