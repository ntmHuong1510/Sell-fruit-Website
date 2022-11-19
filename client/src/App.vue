<template>
  <HeaderVue v-if="!isLogin" />
  <router-view />
  <Brand />
  <Footer /> 
  <SubFooter />
  <div class="row">
    <div class="col-lg-6 col-md-6 col-12 copyright_left">
      <p>© 2018 by<a href="#"> FAMI</a> | All rights reserved</p>
    </div>
    <div class="col-lg-6 col-md-6 col-12 payment_right">
      <a href="#"><img
        class="img-responsive"
        src="https://demo.fieldthemes.com/ps-fami/store/modules/ftchtmlblock/images/payment_ft.png"
        alt=""
      ></a>
    </div>
  </div>
</template>

<script setup>

import HeaderVue from "@/components/Header.vue";
import SubFooter from "@/components/SubFooter.vue";
import Brand from "@/components/Brand.vue";
import Footer from "@/components/Footer.vue";
import { computed } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute();

const isLogin = computed(() => {
  const hideHeaderPath = ["/login", "/register"];
  return hideHeaderPath.includes(route?.path);
})

</script>

<style lang="scss" scoped>
.row{
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top:  1px solid #bbb7b7;
  a{
    color: #addc3b;
  }
}
</style>