<template>
  <div class="product">
    <div class="img-container" @mouseenter="setHover(true)" @mouseleave="setHover(false)">
      <img v-show="!isHover" :src="data?.image_url[0] ? data?.image_url[0] : require('@/assets/noimage.jpg')" />
      <img v-show="isHover" :src="data?.image_url[1] ? data?.image_url[1] : data?.image_url[0]" />
      <div class="wishlist">
        <FontAwesomeIcon icon="heart" class="fa-icon-custom" />
      </div>
    </div>
    <div class="product-info">
      <p>{{ data?.name }}</p>
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
      <div class="product-price-and-shipping">
        <span class="price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
          <span itemprop="priceCurrency" content="USD" /><span itemprop="price" content="70">{{
            formatCurrency(data?.price)
          }}</span>
        </span>

        <span class="regular-price">{{ formatCurrency(data?.price + 120000) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatCurrency } from '@/core/helpers/commonFunction';
import { ref } from 'vue';

const props = defineProps({
  data: Object,
});

const isHover = ref(false);

const setHover = (value) => {
  isHover.value = value;
};
</script>

<style scoped lang="scss">
.product {
  max-width: 250px;
  width: 100%;
  margin: 16px;
  border-radius: 5px;

  .img-container {
    width: 100%;
    height: 320px;
    overflow: hidden;
    border: 1px solid #bbb7b7;
    border-radius: 5px;
    position: relative;
    transition: 0.3s;
    cursor: pointer;

    img {
      width: 100%;
      position: absolute;
      left: 0;
      z-index: -1;
      top: 50%;
      transform: translateY(-50%);
    }

    .wishlist {
      width: fit-content;
      padding: 10px;
      background: #2f2f2f;
      color: white;
      border-radius: 50%;
      position: absolute;
      top: -100px;
      left: 10px;
      transition: 0.4s;
      cursor: pointer;

      &:hover {
        background-color: #addc3b;
      }
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      .wishlist {
        top: 10px;
      }
    }
  }
}

.product-info {
  overflow: hidden;
  position: relative;
  display: block;
  text-align: center;

  p {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 10px;
    height: 38px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

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

.product-price-and-shipping {
  color: #232323;
  font-weight: 700;
  text-align: center;

  .price {
    color: #333;
    font-size: 20px;
    font-weight: 700;
  }

  .regular-price {
    color: #999;
    text-decoration: line-through;
    font-size: 14px;
    font-weight: 400;
    margin-left: 18px;
    vertical-align: bottom;
  }
}
</style>
