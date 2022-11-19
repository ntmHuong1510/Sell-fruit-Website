<template>
  <div class="product-small">
    <img src="https://demo.fieldthemes.com/ps-fami/store/home2/51-home_default/nullam-malesuada.jpg">
    <div class="product-info">
      <p>Nullam malesuada..</p>
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
        <span
          class="price"
          itemprop="offers"
          itemscope=""
          itemtype="http://schema.org/Offer"
        >
          <span
            itemprop="priceCurrency"
            content="USD"
          /><span
            itemprop="price"
            content="70"
          >$70.00</span>
        </span>

        <span class="regular-price">$120.00</span>
      </div>
    </div>
  </div>
</template>
    
  <script setup>
  
  
  </script>
    
  <style scoped lang="scss">
  .product-small{
    max-width: 370px;
    width: 100%;
    display: flex;
    padding: 10px 5px;
  }
  img{
    width: auto;
    height: 153px;
    border: 1px solid #bbb7b7;
    margin-right: 20px;
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
            color: #addc3b
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
    