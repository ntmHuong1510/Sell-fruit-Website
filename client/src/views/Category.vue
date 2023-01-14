<template>
  <div class="home">
    <Carosel />
    <div class="top-title">
      <h4 class="title_block title_font">
        <span class="title_text">{{ CATE_NAME[cateId] }}</span>
      </h4>
      <div class="icon_title">
        <FontAwesomeIcon icon="leaf" class="fa-icon-custom" />
      </div>
    </div>
    <div class="product-list">
      <Product v-for="(ele, index) in listProductFeature" :key="index" :data="ele" />
    </div>
    <div class="paginator-wrapper">
      <Paginator
        v-if="totaRecord > 0"
        :first="(currentPage - 1) * recordPerPage"
        @page="onChangePage"
        :rows="recordPerPage"
        :totalRecords="totaRecord"
      ></Paginator>
    </div>

    <AboutUs />
  </div>
</template>

<script setup>
import Carosel from '@/components/Carosel.vue';
import Feature from '@/components/Feature.vue';
import Product from '@/components/Product.vue';
import SmallProduct from '@/components/SmallProduct.vue';
import MoreInfo from '@/components/MoreInfo.vue';
import AboutUs from '@/components/AboutUs.vue';
import Brand from '@/components/Brand.vue';
import Footer from '@/components/Footer.vue';
import { computed, onMounted, ref, watch, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeProduct } from '@/core/store';
import { CATE_NAME } from '@/core/constants/common';
import Paginator from 'primevue/paginator';

const store = storeProduct();
const route = useRoute();
const router = useRouter();
const listProductFeature = ref([]);
const cateId = computed(() => {
  return route.query.id;
});
const recordPerPage = 20;
const totaRecord = ref(0);
const currentPage = computed(() => {
  return route.query.page;
});

const onChangePage = async (event) => {
  router.replace({
    query: {
      id: cateId.value,
      page: event.page + 1,
    },
  });
};

onBeforeMount(() => window.scrollTo({ top: 0, behavior: 'smooth' }));

onMounted(async () => {
  if (!cateId.value || !currentPage.value) {
    router.push('/');
    return;
  }
  await store.getProductList({
    currentPage: currentPage.value,
    limit: recordPerPage,
    cateId: cateId.value,
  });
  const listProduct = store.data.dataArray;
  totaRecord.value = store.data.totalRecord;
  listProduct.forEach((ele) => {
    ele.image_url = JSON.parse(ele.image_url.replace(/'/g, '"'));
  });
  listProductFeature.value = listProduct;
});
</script>

<style scoped lang="scss">
.home {
  height: auto;
}

.top-title {
  margin-top: 50px;
  text-align: center;
  display: block;

  .sub_title {
    font-size: 16px;
    font-style: italic;
    color: #666;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 5px;
  }

  .title_block {
    font-size: 30px;
    color: #333;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;

    &:hover {
      color: #addc3b;
    }
  }

  .icon_title {
    font-size: 30px;
    color: #addc3b;
    margin-bottom: 20px;
    position: relative;
    display: inline-block;
    min-width: 150px;

    &::before {
      content: '';
      width: 53px;
      height: 2px;
      top: 50%;
      left: 0;
      background: #addc3b;
      background-color: rgb(173, 220, 59);
      position: absolute;
    }

    &::after {
      content: '';
      width: 53px;
      height: 2px;
      top: 50%;
      right: 0;
      background: #addc3b;
      background-color: rgb(173, 220, 59);
      position: absolute;
    }
  }
}

.product-list {
  margin: auto;
  max-width: 1150px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  padding-left: 16px;
  margin-bottom: 30px;
}

.paginator-wrapper {
  margin: auto;
  max-width: 1150px;
  width: 100%;
  text-align: right;
  margin-bottom: 30px;
}

.best-seller-product {
  display: flex;
  justify-content: center;
  margin: 50px;
  .image-content {
    margin: 0 20px;
  }
  .title {
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 47px;
    margin: 0;
    overflow: hidden;
    display: block;
    position: relative;

    &::after {
      content: '';
      width: 53px;
      height: 2px;
      top: 38px;
      left: 0;
      background: #addc3b;
      background-color: rgb(173, 220, 59);
      position: absolute;
    }
  }
}
</style>
