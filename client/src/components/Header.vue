<template>
  <div class="main-header">
    <div class="header-container">
      <div id="_desktop_logo" class="hidden-md-down pull-left">
        <div class="menu-wrapper" @click="onOpen">
          <Button :label="isSignedd ? `Hello, ${userInfo?.user_name}` : 'Đăng nhập'" icon="pi pi-user" />

          <!-- 
          <FontAwesomeIcon icon="user" class="fa-icon-custom" />
          <p>{{ isSignedd ? `Hello, ${userInfo?.user_name}` : 'Đăng nhập' }}</p> -->
          <div v-show="isOpenMenu" class="menu">
            <p class="item-menu">Thông tin cá nhân</p>
            <p class="item-menu" @click="onLogout">Đăng xuất</p>
          </div>
        </div>
        <a class="logo" @click="goToHome">
          <img class="logo img-responsive" src="@/assets/shop-logo.png" alt="Fami_Organic_Home2" />
        </a>
        <Button
          type="button"
          label="Giỏ hàng"
          icon="pi pi-shopping-cart"
          class="p-button-success"
          badge="8"
          badgeClass="p-badge-info"
          @click="goToCart"
        />
        <!-- <FontAwesomeIcon icon="cart-shopping" class="fa-icon-custom" /> -->
      </div>
    </div>
    <div class="nav-bar">
      <div @click="goToCate(1)">
        <span>ÁO NAM</span>
      </div>
      <div @click="goToCate(2)">
        <span>QUẦN NAM</span>
      </div>
      <div @click="goToCate(4)">
        <span>GIÀY DÉP</span>
      </div>
      <div @click="goToCate(3)">
        <span>PHỤ KIỆN</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { isSigned, logout } from '@/core/helpers/commonFunction';
import Button from 'primevue/button';
import Cookies from 'js-cookie';

const router = useRouter();
const isOpenMenu = ref(false);
const isSignedd = ref(isSigned());
const userInfo = ref(Cookies.get('uinfo') && JSON.parse(Cookies.get('uinfo')));

const onOpen = () => {
  if (!isSignedd.value) goToLogin();
  else isOpenMenu.value = !isOpenMenu.value;
};

const onClose = () => {
  isOpenMenu.value = false;
};

const goToCate = (value) => {
  router.push({ path: '/category', query: { id: value, page: 1 } });
};

const goToHome = () => {
  router.push('/');
};

const goToLogin = () => {
  router.push('/login');
};

const goToCart = () => {
  router.push('/cart');
};

const onLogout = () => {
  isSignedd.value = isSigned();
  logout();
};
</script>

<style scoped lang="scss">
.main-header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
}

#_desktop_logo {
  margin: 0 auto;
  z-index: 1040;
  position: relative;
  width: 100%;
  line-height: 100px;
  float: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
}

.header-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  height: 70px;
  cursor: pointer;
}

.menu-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  cursor: pointer;
  z-index: 100;
  p {
    font-size: 18px;
    margin: 0;
    font-weight: bold;
  }
  .menu {
    width: 300px;
    height: auto;
    background: #addc3b;
    position: absolute;
    top: 100px;
    border: 1px solid #bbb7b7;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    flex-direction: column;
    .item-menu {
      cursor: pointer;
      &:hover {
        background-color: rgba($color: white, $alpha: 0.6);
      }
    }
  }
}

.nav-bar {
  display: flex;
  justify-content: center;
  border: 1px solid #bbb7b7;
  border-right: none;
  border-left: none;
  div {
    width: fit-content;
    padding: 10px 20px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    span {
      padding: 5px 0;
    }
    &:hover {
      span {
        border-bottom: 2px solid #addc3b;
      }
    }
  }
}
</style>
