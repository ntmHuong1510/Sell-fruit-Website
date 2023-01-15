import callAPI from './axios.service';

const historyService = {
  getOrders() {
    return callAPI.api('get', '/order/orders');
  },
  getOrdersAll() {
    return callAPI.api('get', '/order/orders-admin');
  },
  getOrderById(data) {
    return callAPI.api('get', '/order/order', data);
  },
  updateOrderStatus(data) {
    return callAPI.api('post', '/order/updateStatus', data);
  },
};

export default historyService;
