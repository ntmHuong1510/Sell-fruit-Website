<template>
  <div class="home">
    <Carosel />
    <Feature />
    <div class="top-title">
      <div class="sub_title">Hot nhất trong năm 2022</div>
      <h4 class="title_block title_font">
        <span class="title_text">Sản phẩm đặc trưng</span>
      </h4>
      <div class="icon_title">
        <FontAwesomeIcon icon="leaf" class="fa-icon-custom" />
      </div>
    </div>
    <div class="product-list">
      <Product v-for="(ele, index) in listProductFeature" :key="index" :data="ele" />
    </div>
    <AboutUs />
    <div class="best-seller-product">
      <div class="best-seller">
        <p class="title">BÁN CHẠY NHẤT</p>
        <div class="list">
          <SmallProduct v-for="(ele, index) in listProductBest" :key="index" :data="ele" />
        </div>
      </div>
      <div class="image-content">
        <img src="https://c0.wallpaperflare.com/preview/606/698/321/man-wearing-jacket.jpg" />
      </div>
      <div class="best-seller">
        <p class="title">ĐÁNH GIÁ CAO NHẤT</p>
        <div class="list">
          <SmallProduct v-for="(ele, index) in listProductRate" :key="index" :data="ele" />
        </div>
      </div>
    </div>
    <MoreInfo />
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
import { onMounted, ref } from 'vue';
import { storeProduct } from '@/core/store';

const store = storeProduct();
const listProductFeature = ref([]);
const listProductBest = ref([]);
const listProductRate = ref([]);

onMounted(async () => {
  await store.getProductList({
    currentPage: 15,
    limit: 36,
  });
  const listProduct = store.data.dataArray;
  listProduct.forEach((ele) => {
    ele.image_url = JSON.parse(ele.image_url.replace(/'/g, '"'));
  });
  listProductFeature.value = listProduct.slice(0, 20);
  listProductBest.value = listProduct.slice(20, 28);
  listProductRate.value = listProduct.slice(28, 36);
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
  justify-content: space-between;
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
