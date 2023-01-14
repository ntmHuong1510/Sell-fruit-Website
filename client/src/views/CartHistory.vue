<template>
  <div>
    <div class="top-title">
      <div class="sub_title" />
      <h4 class="title_block title_font">
        <span class="title_text">Lịch sử đơn hàng</span>
      </h4>
      <div class="icon_title">
        <FontAwesomeIcon
          icon="leaf"
          class="fa-icon-custom"
        />
      </div>
    </div>
    <div
      v-if="orderList.length > 0"
      class="history-wrapper"
    >
      <div
        v-for="(item, idx) in orderList"
        :key="item.order_id"
        class="item"
        @click="toggleDialog(idx)"
      >
        <p class="code">
          Mã đơn: {{ item.order_id }}
        </p>
        <p class="date">
          Người nhận: {{ item.name }}
        </p>
        <p class="date">
          Số điện thoại người nhận: {{ item.phone }}
        </p>
        <p class="date">
          Địa chỉ nhận hàng: {{ item.address }}
        </p>
        <p class="date">
          Đơn vị vận chuyển: {{ item.shipper }}
        </p>
        <p class="date">
          Ngày đặt hàng: {{ item.date }}
        </p>
        <Button
          :label="status[item.status].text"
          class="p-button-raised p-button-rounded status"
          :class="status[item.status].color"
        />
      </div>
    </div>
    <h3
      v-else
      style="text-align: center"
    >
      Lịch sử đơn hàng rỗng!
    </h3>
    <Dialog v-model:visible="display">
      <template #header>
        <h3>Chi tiết đơn hàng</h3>
      </template>
      <div class="table-wrapper">
        <DataTable
          :value="orderList[selected]?.order_items?.orders"
          data-key="product_id"
          class="editable-cells-table"
          responsive-layout="scroll"
        >
          <Column
            field="name"
            header="Tên sản phẩm"
          />
          <!-- <Column field="image" header="Hình ảnh"></Column> -->
          <Column header="Hình ảnh">
            <template #body="slotProps">
              <img
                :src="slotProps.data.thumnail"
                class="product-image"
              >
            </template>
          </Column>
          <Column
            field="quantity"
            header="Số lượng"
            style="width: 20%"
          />
          <Column
            field="price"
            header="Giá"
          >
            <template #body="slotProps">
              {{ formatCurrency(slotProps.data?.price * slotProps.data.quantity) }}
            </template>
          </Column>
          <template #footer>
            <p>Tổng cộng: {{ formatCurrency(orderList[selected]?.order_items?.totalPrice )}}</p>
            <p>Phí ship: {{ formatCurrency(orderList[selected]?.ship_price) }}</p>
            <h4>Tổng đơn: {{ formatCurrency(orderList[selected]?.order_items?.totalPrice + orderList[selected]?.ship_price) }}</h4>
          </template>
        </DataTable>
        <div style="text-align: left">
          <h3>Ghi chú:</h3>
          <label style="white-space: pre">{{ orderList[selected]?.note }}</label>
        </div>
      </div>
    </Dialog>
  </div>
</template>
<script setup>
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { storeHistory } from '@/core/store';
import { onMounted, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Textarea from 'primevue/textarea';
import { formatCurrency } from '@/core/helpers/commonFunction';

const display = ref(false);
const store = storeHistory();
const orderList = ref([]);
const selected = ref(0);

const status = {
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

const toggleDialog = (value) => {
  display.value = true;
  selected.value = value;
};

onMounted(async () => {
  await store.getOrders();
  const { statusCode, data } = store.data;
  orderList.value = data;
});
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
      margin-bottom: 5px;
      color: #463f3f;
    }
    .status {
      position: absolute;
      right: 10px;
      top: 30px;
      transform: translateY(-50%);
    }
  }
}
.table-wrapper {
  max-width: 1150px;
  margin: auto;
  text-align: right;
  .history {
    margin-bottom: 16px;
  }
  .product-image {
    height: 100px;
  }
}
</style>
