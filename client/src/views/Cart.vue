<template>
  <div>
    <div class="top-title">
      <div class="sub_title" />
      <h4 class="title_block title_font">
        <span class="title_text">Giỏ hàng của bạn</span>
      </h4>
      <div class="icon_title">
        <FontAwesomeIcon icon="leaf" class="fa-icon-custom" />
      </div>
    </div>
    <div class="table-wrapper">
      <Button
        label="Lịch sử đơn hàng"
        class="p-button-outlined p-button-success history"
        @click="goto('cart/history')"
      />
      <DataTable
        v-if="cartInfo?.orders?.length > 0"
        :value="cartInfo.orders"
        data-key="product_id"
        edit-mode="cell"
        class="editable-cells-table"
        responsive-layout="scroll"
        @cell-edit-complete="onCellEditComplete"
      >
        <Column field="name" header="Tên sản phẩm" />
        <!-- <Column field="image" header="Hình ảnh"></Column> -->
        <Column header="Hình ảnh">
          <template #body="slotProps">
            <img :src="slotProps.data.thumnail" class="product-image" />
          </template>
        </Column>
        <Column field="quantity" header="Số lượng" style="width: 20%">
          <template #editor="{ data, field }">
            <InputNumber v-model="data[field]" min="1" />
          </template>
        </Column>
        <Column field="price" header="Giá" />
        <Column style="width: 10%; min-width: 8rem" body-style="text-align:center">
          <template #body="slotProps">
            <Button
              icon="pi pi-trash"
              class="p-button-rounded p-button-danger"
              @click="confirmDeleteProduct(slotProps.data)"
            />
          </template>
        </Column>
        <template #footer> Tổng cộng: {{ formatCurrency(cartInfo.totalPrice) }} </template>
      </DataTable>
    </div>
    <div v-if="cartInfo?.orders?.length > 0" class="text-area">
      <div>
        <div class="item">
          <label>Họ tên người nhận:</label>
          <InputText v-model="dataOrder.name" />
        </div>
        <div class="item">
          <label>Số điện thoại người nhận:</label>
          <InputMask v-model="dataOrder.phone" auto-clear="false" mask="999-9999-999" />
        </div>
        <div class="item">
          <label>Địa chỉ nhận hàng:</label>
          <InputText v-model="dataOrder.address" />
        </div>
        <div class="item">
          <label>Đơn vị vận chuyển:</label>
          <Dropdown v-model="dataOrder.shipper" :options="dropdownOption" optionLabel="name" de />
        </div>
        <Textarea
          v-model="dataOrder.note"
          placeholder="Bạn vui lòng ghi chú các yêu cầu có thể là kích thước quần áo, giày dép,..."
        />
      </div>
      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>
      <Button label="Xác nhận đơn hàng" class="p-button-outlined p-button-success" @click="gotoConfirm" />
    </div>
    <h3 v-else style="text-align: center">Giỏ hàng trống...</h3>
  </div>
</template>
<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import Dropdown from 'primevue/dropdown';
import { useRouter } from 'vue-router';
import { onMounted, ref, onBeforeMount } from 'vue';
import { storeCart } from '@/core/store';
import { formatCurrency } from '@/core/helpers/commonFunction';
import { MESSAGE } from '@/core/constants/message';

const shippingPrice = {
  'Ninja Van': 25000,
  'Viettel Post': 35000,
  'Giao Hàng tiết kiệm': 20000,
  'Shopee Express': 45000,
};

const router = useRouter();
const cartStore = storeCart();
const cartInfo = ref([]);
const initData = localStorage.getItem('confirmOrder') ? JSON.parse(localStorage.getItem('confirmOrder')) : null;
const dataOrder = ref(
  initData
    ? {
        name: initData.name,
        phone: initData.phone,
        address: initData.address,
        shipper: { name: initData.shipper, code: initData.shipper },
        note: initData.note,
      }
    : { name: '', phone: '', address: '', shipper: { name: 'Ninja Van', code: 'Ninja Van' }, note: '' }
);
const errorMessage = ref('');

const goto = (path) => {
  router.push(path);
};

const dropdownOption = [
  { name: 'Ninja Van', code: 'Ninja Van' },
  { name: 'Viettel Post', code: 'Viettel Post' },
  { name: 'Giao Hàng tiết kiệm', code: 'Giao Hàng tiết kiệm' },
  { name: 'Shopee Express', code: 'Shopee Express' },
];

onBeforeMount(() => window.scrollTo({ top: 0, behavior: 'smooth' }));

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

const confirmDeleteProduct = async (dataItem) => {
  await cartStore.deleteItemCart({
    product_id: dataItem.product_id,
  });
  await cartStore.cartInfo();
  const { data } = cartStore.data;
  cartInfo.value = data;
  cartInfo.value.orders = data?.orders?.map((ele) => {
    return { ...ele, price: formatCurrency(ele.price * ele.quantity) };
  });
};

const gotoConfirm = () => {
  const { phone, address, name, shipper } = dataOrder.value;
  if (phone && address && name) {
    localStorage.setItem(
      'confirmOrder',
      JSON.stringify({ ...dataOrder.value, shipper: shipper.name, ship_price: shippingPrice[shipper.name] })
    );
    goto('cart/confirm');
    errorMessage.value = '';
  } else {
    errorMessage.value = MESSAGE['REQUIRE'];
  }
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
  input {
    width: 100%;
    margin-top: 16px;
  }
  .item {
    text-align: left;
    margin-top: 16px;
  }
  .p-dropdown {
    margin-top: 16px;
    display: flex;
  }
}

:deep(.p-editable-column) {
  &:hover {
    cursor: pointer;
    background: rgb(193, 191, 191);
  }
}
</style>
