import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './core/router';
import App from './App.vue';
import '@/assets/styles/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPhone,
  faCartShopping,
  faUser,
  faLeaf,
  faStar,
  faHeart,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPhone, faCartShopping, faUser, faLeaf, faStar, faHeart, faEye, faEyeSlash);

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(pinia).mount('#app');
