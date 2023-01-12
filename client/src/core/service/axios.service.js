import { storeCommon } from '@/core/store';
import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Cookies?.get('uinfo') ? JSON?.parse(Cookies?.get('uinfo')).token : ''}`,
  },
});

const callAPI = {
  api(method, url, data) {
    const store = storeCommon();
    store.setLoading(true);
    return instance({
      method: method,
      url: url,
      data: method === 'post' ? data : null,
      params: method === 'get' ? data : null,
    }).finally(() => {
      setTimeout(() => {
        store.setLoading(false);
      }, 600);
    });
  },
};
export default callAPI;
