import callAPI from './axios.service';

const authService = {
  login(data) {
    return callAPI.api('post', 'auth', data);
  },
};

export default authService;
