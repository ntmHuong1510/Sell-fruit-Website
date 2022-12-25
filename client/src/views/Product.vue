<template>
  <div class="home">
    <div class="carosel" v-if="arrayImage.length > 0">
      <splide :options="options">
        <splide-slide v-for="(ele, idx) in arrayImage" :key="idx">
          <img :src="ele" />
        </splide-slide>
      </splide>
    </div>
    <div class="info">
      <p class="name">{{ dataProduct?.name }}</p>
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
      <div>
        <span class="label">Size:</span>
        <Dropdown
          class="select"
          :options="[
            { name: 'S', code: 'NY' },
            { name: 'M', code: 'RM' },
            { name: 'L', code: 'LDN' },
            { name: 'XL', code: 'IST' },
            { name: '2XL', code: 'PRS' },
          ]"
          optionLabel="name"
          placeholder="Vui lòng chọn size áo"
        />
      </div>
      <div>
        <span class="label">Số lượng:</span>
        <InputNumber
          class="input-number"
          showButtons
          buttonLayout="horizontal"
          decrementButtonClass="p-button-danger"
          incrementButtonClass="p-button-success"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
          mode="currency"
          currency="EUR"
        />
      </div>

      <Button class="button-add" label="Thêm vào giỏ hàng" icon="pi pi-check" />
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
import { storeProduct } from '@/core/store';

const route = useRoute();
const store = storeProduct();
const productId = computed(() => {
  return route.query.id;
});
const dataProduct = ref(null);
const arrayImage = ref([]);

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
  }
});

const options = {
  type: '',
  perPage: 1,
};
</script>

<style scoped lang="scss">
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
  }
  .button-add {
    width: 100%;
    font-size: 25px;
    margin-top: 30px;
  }
}
</style>
