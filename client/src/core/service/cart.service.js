import callAPI from './axios.service';

const cartService = {
  addToCart(data) {
    return callAPI.api('post', '/cart/add', data);
  },
  cartInfo() {
    return callAPI.api('get', '/cart');
  },
  updateQuantity(data) {
    return callAPI.api('post', '/cart/update', data);
  },
};

export default cartService;
