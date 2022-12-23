import { createRouter, createWebHistory } from 'vue-router';
import About from '../../views/About';
import Category from '../../views/Category';
import ForgotPassword from '../../views/ForgotPassword';
import Home from '../../views/Home';
import Login from '../../views/Login';
import Product from '../../views/Product';
import Register from '../../views/Register';

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
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
