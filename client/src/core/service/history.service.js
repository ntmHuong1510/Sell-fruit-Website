import callAPI from './axios.service';

const historyService = {
  getOrders() {
    return callAPI.api('get', '/order/orders');
  },
};

export default historyService;
