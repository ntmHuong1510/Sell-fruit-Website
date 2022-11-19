<template>
  <div class="home">
  </div>
</template>
  
  <script setup>
  import MoreInfo from "@/components/MoreInfo.vue";
  import Brand from "@/components/Brand.vue";
  import Footer from "@/components/Footer.vue";
  
  
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
        content: "";
        width: 53px;
        height: 2px;
        top: 50%;
        left: 0;
        background: #addc3b;
        background-color: rgb(173, 220, 59);
        position: absolute;
      }
  
      &::after {
        content: "";
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
    .image-content{
      margin: 0 20px;
    }
    .title {
      font-size: 24px;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 18px;
      padding-bottom: 47px;
      margin: 0;
      overflow: hidden;
      display: block;
      position: relative;
  
      &::after {
        content: "";
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
    