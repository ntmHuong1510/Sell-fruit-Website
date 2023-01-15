<template>
  <div>
    <div v-if="isLogin">
      <router-view :key="$route.fullPath" />
    </div>
    <div v-else>
      <HeaderVue />
      <router-view :key="$route.fullPath" />
      <Brand />
      <Footer />
      <SubFooter />
      <div class="row">
        <div class="col-lg-6 col-md-6 col-12 copyright_left">
          <p>© 2022 by<a href="#"> RICHARD'S CLOTHING LTD</a> | All rights reserved</p>
        </div>
        <div class="col-lg-6 col-md-6 col-12 payment_right">
          <a href="#"
            ><img
              class="img-responsive"
              src="https://demo.fieldthemes.com/ps-fami/store/modules/ftchtmlblock/images/payment_ft.png"
              alt=""
          /></a>
        </div>
      </div>
    </div>
    <div v-if="isLoading" class="loadding">
      <ScaleLoader />
    </div>
  </div>
</template>

<script setup>
import HeaderVue from '@/components/Header.vue';
import SubFooter from '@/components/SubFooter.vue';
import Brand from '@/components/Brand.vue';
import Footer from '@/components/Footer.vue';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue';
import { storeCommon } from '@/core/store';

const route = useRoute();
const store = storeCommon();

const isLoading = computed(() => {
  return store.data.isLoading;
});

const isLogin = computed(() => {
  const hideHeaderPath = [
    '/login',
    '/register',
    '/forgot-password',
    '/admin',
    '/admin/orders',
    '/admin/products',
    '/admin/order-details',
    '/admin/dashboard'
  ];
  return hideHeaderPath.includes(route?.path);
});
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #bbb7b7;
  a {
    color: #addc3b;
  }
}
.loadding {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba($color: black, $alpha: 0.5);
  z-index: 100;
  top: 0;
}
</style>
