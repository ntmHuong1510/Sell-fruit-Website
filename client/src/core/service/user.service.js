import callAPI from './axios.service';

const userService = {
  createUser(data) {
    return callAPI.api('post', 'user/createUser', data);
  },
};

export default userService;
