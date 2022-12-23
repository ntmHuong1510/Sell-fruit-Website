import { defineStore } from 'pinia';

export const storeCommon = defineStore({
  id: 'storeCommon',

  state: () => ({
    data: {
      isLoading: false,
    },
  }),

  actions: {
    setLoading(payload) {
      this.data = { ...this.data, isLoading: payload };
    },
  },
});
