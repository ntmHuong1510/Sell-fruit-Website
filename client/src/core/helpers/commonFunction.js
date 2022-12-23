import Cookies from 'js-cookie';

export const formatCurrency = (value) => {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'VNĐ';
};
export const isSigned = () => {
  const token = Cookies.get('uinfo');
  return token ? true : false;
};

export const logout = () => {
  Cookies.remove('uinfo');
  window.location.href = '/';
};
