export const formatCurrency = (value) => {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'VNĐ';
};
