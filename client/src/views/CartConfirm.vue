<template>
  <div>
    <div class="top-title">
      <div class="sub_title" />
      <h4 class="title_block title_font">
        <span class="title_text">Xác nhận thông tin đơn hàng</span>
      </h4>
      <div class="icon_title">
        <FontAwesomeIcon icon="leaf" class="fa-icon-custom" />
      </div>
      <div class="form">
        <div class="item">
          <h2>Họ tên người nhận:</h2>
          <label>{{ dataOrder.name }}</label>
        </div>
        <div class="item">
          <h2>Số điện thoại người nhận:</h2>
          <label>{{ dataOrder.phone }}</label>
        </div>
        <div class="item">
          <h2>Địa chỉ giao hàng:</h2>
          <label>{{ dataOrder.address }}</label>
        </div>
        <div class="item">
          <h2>Đơn vị vận chuyển:</h2>
          <label>{{ dataOrder.shipper }}</label>
        </div>
        <div class="item">
          <h2>Phí vận chuyển:</h2>
          <label>{{ formatCurrency(dataOrder.ship_price) }}</label>
        </div>
        <div class="item">
          <h2>Ghi chú:</h2>
          <label>{{ dataOrder.note }}</label>
        </div>
        <div class="item">
          <h2>Tổng giá trị đơn hàng:</h2>
          <label>{{ cartInfo?.totalPrice && formatCurrency(cartInfo?.totalPrice + dataOrder.ship_price) }}</label>
        </div>
      </div>
      <Button label="Tiến hành đặt hàng" class="p-button-outlined p-button-success" @click="confirmOpen" />
      <ConfirmDialog></ConfirmDialog>
    </div>
  </div>
</template>
<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import { useRouter } from 'vue-router';
import { isSigned } from '@/core/helpers/commonFunction';
import { computed, onMounted, ref, onBeforeMount } from 'vue';
import { storeCart } from '@/core/store';
import { formatCurrency } from '@/core/helpers/commonFunction';
import ConfirmDialog from 'primevue/confirmdialog';
import { useConfirm } from 'primevue/useconfirm';

const router = useRouter();
const cartStore = storeCart();
const cartInfo = ref();
const dataOrder = localStorage.getItem('confirmOrder') ? JSON.parse(localStorage.getItem('confirmOrder')) : null;
const confirm = useConfirm();

onBeforeMount(() => window.scrollTo({ top: 0, behavior: 'smooth' }));

onMounted(async () => {
  if (!dataOrder) {
    router.back();
  } else {
    await cartStore.cartInfo();
    const { data } = cartStore.data;
    cartInfo.value = data;
  }
});

const confirmOpen = () => {
  confirm.require({
    message: 'Bạn có chắc muốn đặt đơn hàng này chứ?',
    header: 'Xác nhận',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Đồng ý',
    rejectLabel: 'Đóng',
    accept: async () => {
      const currentDate = new Date();
      await cartStore.createOrder({ ...dataOrder, date: currentDate.toLocaleString() });
      await cartStore.cartInfo();
      localStorage.removeItem('confirmOrder');
      router.push('/cart/history');
    },
    reject: () => {
      //callback to execute when user rejects the action
    },
    onShow: () => {
      //callback to execute when dialog is shown
    },
    onHide: () => {
      //callback to execute when dialog is hidden
    },
  });
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
  .form {
    max-width: 1150px;
    margin: auto;
    text-align: left;
    .item {
      h2 {
        display: inline-block;
        margin-bottom: 0;
        margin-right: 16px;
      }
      label {
        font-size: 18px;
        white-space: pre;
        display: inline-flex;
      }
    }
  }
}
</style>
