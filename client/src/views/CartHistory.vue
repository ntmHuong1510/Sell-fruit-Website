<template>
  <div>
    <div class="top-title">
      <div class="sub_title"></div>
      <h4 class="title_block title_font">
        <span class="title_text">Lịch sử đơn hàng</span>
      </h4>
      <div class="icon_title">
        <FontAwesomeIcon icon="leaf" class="fa-icon-custom" />
      </div>
    </div>
  </div>
</template>
<script setup></script>

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
</style>
