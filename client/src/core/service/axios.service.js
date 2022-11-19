import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const callAPI = {
  api(method, url, data) {
    return instance({
      method: method,
      url: url,
      data: data,
    });
  },
};
export default callAPI;
