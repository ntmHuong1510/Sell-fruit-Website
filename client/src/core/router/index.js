import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../views/Home';
import About from '../../views/About';
import Login from '../../views/Login';
import Register from '../../views/Register';
import Product from '../../views/Product';

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
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
