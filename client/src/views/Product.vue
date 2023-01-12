<template>
  <div>
    <div class="home">
      <div
        v-if="arrayImage.length > 0"
        class="carosel"
      >
        <splide :options="options">
          <splide-slide
            v-for="(ele, idx) in arrayImage"
            :key="idx"
          >
            <img :src="ele">
          </splide-slide>
        </splide>
      </div>
      <div class="info">
        <p class="name">
          {{ dataProduct?.name }}
        </p>
        <div class="comments_note">
          <div class="star_content clearfix">
            <div class="star">
              <FontAwesomeIcon icon="star" />
            </div>
            <div class="star">
              <FontAwesomeIcon icon="star" />
            </div>
            <div class="star">
              <FontAwesomeIcon icon="star" />
            </div>
            <div class="star">
              <FontAwesomeIcon icon="star" />
            </div>
            <div class="star">
              <FontAwesomeIcon icon="star" />
            </div>
          </div>
        </div>
        <p class="currency">
          {{ formatCurrency(dataProduct?.price) }}
          <span class="old-price">{{ formatCurrency(dataProduct?.price + 120000) }}</span>
        </p>
        <!-- <div>
          <span class="label">Size:</span>
          <Dropdown
            class="select"
            :options="[
              { name: 'S', code: 'S' },
              { name: 'M', code: 'M' },
              { name: 'L', code: 'L' },
              { name: 'XL', code: 'XL' },
              { name: '2XL', code: '2XL' },
            ]"
            optionLabel="name"
            placeholder="Vui lòng chọn size áo"
          />
        </div> -->
        <div>
          <span class="label">Số lượng:</span>
          <InputNumber
            v-model="numberProduct"
            class="input-number"
            show-buttons
            button-layout="horizontal"
            decrement-button-class="p-button-danger"
            increment-button-class="p-button-success"
            increment-button-icon="pi pi-plus"
            decrement-button-icon="pi pi-minus"
            min="1"
          />
        </div>

        <Button
          class="button-add p-button-raised p-button-rounded p-button-success"
          label="Thêm vào giỏ hàng"
          @click="onAddItem"
        />
        <Button
          class="button-add p-button-raised p-button-rounded p-button-info"
          label="Mua ngay"
          @click="buyImediate"
        />
      </div>
    </div>
    <div class="top-title">
      <div class="sub_title">
        Hot nhất trong năm 2022
      </div>
      <h4 class="title_block title_font">
        <span class="title_text">Sản phẩm tương tự</span>
      </h4>
      <div class="icon_title">
        <FontAwesomeIcon
          icon="leaf"
          class="fa-icon-custom"
        />
      </div>
    </div>
    <div class="carosel-related">
      <splide
        v-if="listProductRelated.length > 0"
        :options="{
          type: 'loop',
          perPage: 3,
          perMove: 1,
        }"
      >
        <splide-slide
          v-for="(ele, idx) in listProductRelated"
          :key="idx"
        >
          <SmallProduct :data="ele" />
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<script setup>
import MoreInfo from '@/components/MoreInfo.vue';
import Brand from '@/components/Brand.vue';
import Footer from '@/components/Footer.vue';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useRoute, useRouter } from 'vue-router';
import { onMounted, computed, ref } from 'vue';
import { formatCurrency } from '@/core/helpers/commonFunction';
import { storeProduct, storeCart } from '@/core/store';
import SmallProduct from '@/components/SmallProduct.vue';

const router = useRouter();
const route = useRoute();
const store = storeProduct();
const cartStore = storeCart();
const productId = computed(() => {
  return route.query.id;
});
const dataProduct = ref(null);
const arrayImage = ref([]);
const listProductRelated = ref([]);
const numberProduct = ref(1);

const onAddItem = async () => {
  await cartStore.addToCart({
    product_id: productId.value,
    quantity: numberProduct.value,
  });
};

const buyImediate = async () => {
  await cartStore.addToCart({
    product_id: productId.value,
    quantity: numberProduct.value,
  });
  router.push('/cart');
};

onMounted(async () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (!productId.value) {
    router.push('/');
    return;
  }
  await store.getProductByID({
    product_id: productId.value,
  });
  const { statusCode, data } = store.data;
  if (statusCode == '200') {
    dataProduct.value = data;
    arrayImage.value = JSON.parse(dataProduct?.value?.image_url.replace(/'/g, '"'));
    await store.getProductList({
      currentPage: 1,
      limit: 30,
      cateId: data?.cate_id,
    });
    const listProduct = store.data.dataArray;
    listProduct.forEach((ele) => {
      ele.image_url = JSON.parse(ele.image_url.replace(/'/g, '"'));
    });
    listProductRelated.value = listProduct;
  }
});

const options = {
  type: '',
  perPage: 1,
};
</script>

<style scoped lang="scss">
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
.carosel-related {
  height: auto;
  width: 1150px;
  margin: auto;
  margin-bottom: 16px;
  :deep(.splide) {
    box-shadow: none;
    .splide__arrow--prev {
      left: -3em;
    }
    .splide__arrow--next {
      right: -3em;
    }
    .splide__pagination {
      bottom: -1rem !important;
    }
  }
}
.home {
  height: auto;
  width: 1150px;
  margin: auto;
  display: flex;
  gap: 60px;
  padding: 30px 0;
  .comments_note {
    display: inline-block;

    .star_content {
      text-align: center;

      div.star,
      #productCommentsBlock div.star {
        position: relative;
        top: 0;
        float: left;
        width: 15px;
        overflow: hidden;
        cursor: pointer;
        font-size: 13px;
        font-weight: 400;
        height: 22px;
        line-height: 22px;
        color: #addc3b;
      }
    }
  }
  .carosel {
    width: 500px;
    img {
      width: 100%;
      border-radius: 10px;
      &:hover {
        cursor: pointer;
      }
    }
    :deep(.splide) {
      padding: 0;
      box-shadow: none;
      .splide__arrow--prev {
        left: -3rem !important;
      }
      .splide__arrow--next {
        right: -3rem !important;
      }
      .splide__pagination {
        bottom: -1rem !important;
      }
    }
  }
  .info {
    .name {
      font-size: 30px;
      font-weight: bold;
      margin: 0;
      margin-bottom: 16px;
    }
    .currency {
      font-size: 30px;
      margin: 10px 0;
      .old-price {
        font-size: 20px;
        text-decoration: line-through;
        color: #999;
      }
    }
  }
  .label {
    font-size: 20px;
    width: 100px;
    display: inline-block;
  }
  .select {
    width: 275px;
    margin-bottom: 16px;
  }
  .input-number {
    width: 200px;
    :deep(.p-inputnumber-input) {
      text-align: center;
    }
  }
  .button-add {
    width: 100%;
    font-size: 25px;
    margin-top: 30px;
  }
}
</style>
