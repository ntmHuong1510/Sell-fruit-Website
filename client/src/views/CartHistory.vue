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
    <div class="history-wrapper">
      <div class="item" @click="toggleDialog">
        <p class="code">Mã đơn: ABG123WSQ</p>
        <p class="date">Ngày đặt hàng: 22/03/2000</p>
        <Button label="Đã giao" class="p-button-raised p-button-rounded status" />
      </div>
      <div class="item" @click="toggleDialog">
        <p class="code">Mã đơn: ABG123WSQ</p>
        <p class="date">Ngày đặt hàng: 22/03/2000</p>
        <Button label="Đã giao" class="p-button-raised p-button-rounded status" />
      </div>
      <div class="item" @click="toggleDialog">
        <p class="code">Mã đơn: ABG123WSQ</p>
        <p class="date">Ngày đặt hàng: 22/03/2000</p>
        <Button label="Đã giao" class="p-button-raised p-button-rounded status" />
      </div>
      <div class="item" @click="toggleDialog">
        <p class="code">Mã đơn: ABG123WSQ</p>
        <p class="date">Ngày đặt hàng: 22/03/2000</p>
        <Button label="Đã giao" class="p-button-raised p-button-rounded status" />
      </div>
      <div class="item" @click="toggleDialog">
        <p class="code">Mã đơn: ABG123WSQ</p>
        <p class="date">Ngày đặt hàng: 22/03/2000</p>
        <Button label="Đã giao" class="p-button-raised p-button-rounded status" />
      </div>
    </div>
    <Dialog v-model:visible="display">
      <template #header>
        <h3>Header</h3>
      </template>

      Content

      <template #footer>
        <Button label="No" icon="pi pi-times" class="p-button-text" />
        <Button label="Yes" icon="pi pi-check" autofocus />
      </template>
    </Dialog>
  </div>
</template>
<script setup>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { ref } from 'vue';

const display = ref(false);

const toggleDialog = () => {
  display.value = true;
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
.history-wrapper {
  max-width: 1150px;
  width: 100%;
  margin: auto;
  .item {
    border: 1px solid gray;
    padding: 10px 20px;
    border-radius: 6px;
    position: relative;
    cursor: pointer;
    margin-bottom: 16px;
    &:hover {
      background: rgba($color: #333, $alpha: 0.2);
    }
    .code {
      margin: 0;
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
    }
    .date {
      margin: 0;
      font-size: 18px;
      color: #463f3f;
    }
    .status {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
