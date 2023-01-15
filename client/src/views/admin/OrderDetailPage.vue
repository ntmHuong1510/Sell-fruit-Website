<template>
  <div class="form">
    <h2 class="title">Chi tiết đơn hàng</h2>
    <div class="action">
      <Button class="p-button-secondary" @click="goBack">Trở lại</Button>
      <div class="wrapper">
        <Button class="p-button-raised p-button-rounded status" :class="statusColor[status?.code]?.color" />
        <span class="p-float-label">
          <Dropdown id="dropdown" v-model="status" :options="statusOption" option-label="name" />
          <label for="dropdown">Trạng thái đơn hàng</label>
        </span>
      </div>

      <Button :disabled="isDisable" @click="updateStatus">Cập nhật</Button>
    </div>
    <DataTable
      :value="orderList?.order_items?.orders"
      data-key="product_id"
      class="editable-cells-table"
      responsive-layout="scroll"
    >
      <Column field="name" header="Tên sản phẩm" />
      <!-- <Column field="image" header="Hình ảnh"></Column> -->
      <Column header="Hình ảnh">
        <template #body="slotProps">
          <img :src="slotProps.data.thumnail" class="product-image" />
        </template>
      </Column>
      <Column field="quantity" header="Số lượng" style="width: 20%" />
      <Column field="price" header="Giá">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data?.price * slotProps.data.quantity) }}
        </template>
      </Column>
      <template #footer>
        <p>Tổng cộng: {{ formatCurrency(orderList?.order_items?.totalPrice) }}</p>
        <p>Phí ship: {{ formatCurrency(orderList?.ship_price) }}</p>
        <h4>Tổng đơn: {{ formatCurrency(orderList?.order_items?.totalPrice + orderList?.ship_price) }}</h4>
      </template>
    </DataTable>
    <div style="text-align: left">
      <h3>Ghi chú:</h3>
      <label style="white-space: pre">{{ orderList?.note }}</label>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, ref, watch } from 'vue';
import { storeHistory } from '@/core/store';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import { formatCurrency } from '@/core/helpers/commonFunction';

const route = useRoute();
const router = useRouter();
const orderId = computed(() => {
  return route.query.id;
});
const store = storeHistory();
const orderList = ref({});
const status = ref();
const isDisable = ref(false);

const goBack = () => {
  router.back();
};

const updateStatus = async () => {
  console.log({
    order_id: orderId.value,
    status: status.value.code,
  });
  await store.updateOrderStatusAdmin({
    order_id: orderId.value,
    status: status.value.code,
  })
};

const statusOption = [
  { name: 'Đơn hàng bị hủy', code: '-1' },
  { name: 'Đang chuẩn bị hàng', code: '0' },
  { name: 'Đang vận chuyển', code: '1' },
  { name: 'Đã giao hàng', code: '2' },
];

const statusColor = {
  '-1': {
    text: 'Đơn hàng bị hủy',
    color: 'p-button-danger',
  },
  0: {
    text: 'Đang chuẩn bị hàng',
    color: 'p-button-warning',
  },
  1: {
    text: 'Đang vận chuyển',
    color: 'p-button-info',
  },
  2: {
    text: 'Đã giao hàng',
    color: 'p-button-success',
  },
};

watch(status, () => {
  if (status.value.code != orderList.value.status) {
    isDisable.value = false;
  } else isDisable.value = true;

  console.log(isDisable.value);
});

onMounted(async () => {
  await store.getOrderByIdAdmin({ order_id: orderId.value });
  const { statusCode, data } = store.data;
  orderList.value = data;
  status.value = statusOption.find((ele) => ele.code == data.status);
});
</script>

<style lang="scss" scoped>
.form {
  padding: 16px;
  max-width: 1150px;
  width: 100%;
  margin: auto;
  margin-bottom: 50px;
  .history {
    margin-bottom: 16px;
  }
  .product-image {
    height: 100px;
  }
  .action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      button {
        height: 10px !important;
        width: 10px !important;
        box-shadow: none !important;
      }
    }
    .p-float-label {
      max-width: 300px;
      width: 100%;
      .p-dropdown {
        width: 100%;
      }
    }
  }
}
</style>
