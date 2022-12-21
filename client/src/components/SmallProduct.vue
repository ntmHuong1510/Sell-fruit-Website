<template>
  <div class="product-small">
    <img :src="data?.image_url[0] ? data?.image_url[0] : require('@/assets/noimage.jpg')" />
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
          <span itemprop="priceCurrency" content="USD" /><span itemprop="price" content="70">
            {{ formatCurrency(data?.price) }}</span
          >
        </span>

        <span class="regular-price">{{ formatCurrency(data?.price + 120000) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatCurrency } from '@/core/helpers/commonFunction';
const props = defineProps({
  data: Object,
});
</script>

<style scoped lang="scss">
.product-small {
  max-width: 370px;
  width: 100%;
  display: flex;
  margin: 10px 5px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

img {
  width: auto;
  height: 153px;
  margin-right: 20px;
  position: relative;
  z-index: -1;
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
    height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
}

.comments_note {
  display: block;

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
  text-align: left;

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
