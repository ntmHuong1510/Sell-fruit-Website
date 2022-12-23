import '@/assets/styles/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCartShopping,
  faEye,
  faEyeSlash,
  faHeart,
  faLeaf,
  faPhone,
  faStar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './core/router';

library.add(faPhone, faCartShopping, faUser, faLeaf, faStar, faHeart, faEye, faEyeSlash);

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(pinia).mount('#app');
app.use(PrimeVue);
