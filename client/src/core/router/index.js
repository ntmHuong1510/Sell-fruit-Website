import { createRouter, createWebHistory } from 'vue-router';
import About from '../../views/About';
import AdminPage from '../../views/admin/AdminPage';
import Dashboard from '../../views/admin/Dashboard';
import OrderDetailPage from '../../views/admin/OrderDetailPage';
import OrderPage from '../../views/admin/OrderPage';
import ProductPage from '../../views/admin/ProductPage';
import Cart from '../../views/Cart';
import CartConfirm from '../../views/CartConfirm';
import CartHistory from '../../views/CartHistory';
import Category from '../../views/Category';
import ForgotPassword from '../../views/ForgotPassword';
import Home from '../../views/Home';
import Login from '../../views/Login';
import Product from '../../views/Product';
import Register from '../../views/Register';
import { isSigned } from '../helpers/commonFunction';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/cart',
    children: [
      { path: '', name: 'Cart', component: Cart },
      {
        path: 'history',
        name: 'CartHistory',
        component: CartHistory,
      },
      {
        path: 'confirm',
        name: 'CartConfirm',
        component: CartConfirm,
      },
    ],
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage,
    redirect: "/admin/dashboard",
    children: [
      { path: 'dashboard', name: 'Dasboard', component: Dashboard },
      { path: 'orders', name: 'Order', component: OrderPage },
      { path: 'order-details', name: 'OrderDetail', component: OrderDetailPage },
      {
        path: 'products',
        name: 'ProductPage',
        component: ProductPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

router.beforeEach((to, from) => {
  const { path } = to;
  const requireLoginURL = ['/cart', '/cart/history', '/cart/confirm'];

  if (requireLoginURL.includes(path) && !isSigned()) {
    window.location.href = '/login';
    return false;
  } else return true;
});

export default router;
