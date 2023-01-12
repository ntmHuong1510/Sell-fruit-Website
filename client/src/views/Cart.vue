<template>
  <div>
    <div class="top-title">
      <div class="sub_title" />
      <h4 class="title_block title_font">
        <span class="title_text">Giỏ hàng của bạn</span>
      </h4>
      <div class="icon_title">
        <FontAwesomeIcon
          icon="leaf"
          class="fa-icon-custom"
        />
      </div>
    </div>
    <div class="table-wrapper">
      <Button
        label="Lịch sử đơn hàng"
        class="p-button-outlined p-button-success history"
        @click="goto('cart/history')"
      />
      <DataTable
        :value="cartInfo.orders"
        data-key="product_id"
        edit-mode="cell"
        class="editable-cells-table"
        responsive-layout="scroll"
        @cell-edit-complete="onCellEditComplete"
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
        <!-- <Column field="quantity" header="Sô lượng"></Column> -->
        <Column
          field="quantity"
          header="Sô lượng"
          style="width: 20%"
        >
          <template #editor="{ data, field }">
            <InputNumber
              v-model="data[field]"
              min="1"
            />
          </template>
        </Column>
        <Column
          field="price"
          header="Giá"
        />
        <Column
          style="width: 10%; min-width: 8rem"
          body-style="text-align:center"
        >
          <template #body="slotProps">
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-danger"
              @click="confirmDeleteProduct(slotProps.data)"
            />
          </template>
        </Column>
        <template #footer>
          Tổng cộng: {{ formatCurrency(cartInfo.totalPrice) }}
        </template>
      </DataTable>
    </div>
    <div class="text-area">
      <Textarea placeholder="Bạn vui lòng ghi chú các yêu cầu có thể là kích thước quần áo, giày dép,..." />
      <Button
        label="Tiến hành đặt hàng"
        class="p-button-outlined p-button-success"
      />
    </div>
  </div>
</template>
<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { storeCart } from '@/core/store';
import { formatCurrency } from '@/core/helpers/commonFunction';

const router = useRouter();
const cartStore = storeCart();
const cartInfo = ref([]);

const goto = (path) => {
  router.push(path);
};

onMounted(async () => {
  await cartStore.cartInfo();
  const { data } = cartStore.data;
  cartInfo.value = data;
  cartInfo.value.orders = data?.orders?.map((ele) => {
    return { ...ele, price: formatCurrency(ele.price * ele.quantity) };
  });
});

const onCellEditComplete = async (event) => {
  if (event.newValue === event.value) return;
  await cartStore.updateQuantity({
    product_id: event?.data.product_id,
    quantity: event.newValue,
  });
  await cartStore.cartInfo();
  const { data } = cartStore.data;
  cartInfo.value = data;
  cartInfo.value.orders = data?.orders?.map((ele) => {
    return { ...ele, price: formatCurrency(ele.price * ele.quantity) };
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
.text-area {
  max-width: 1150px;
  margin: auto;
  text-align: right;
  button {
    margin-top: 16px;
  }
  textarea {
    width: 100%;
    height: 200px;
    margin-top: 16px;
  }
}

:deep(.p-editable-column) {
  &:hover {
    cursor: pointer;
    background: rgb(193, 191, 191);
  }
}
</style>
