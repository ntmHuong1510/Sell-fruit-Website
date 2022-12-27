<template>
  <div>
    <div class="top-title">
      <div class="sub_title"></div>
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
      <DataTable :value="product" editMode="row" dataKey="id" responsiveLayout="scroll">
        <Column field="name" header="Tên sản phẩm"></Column>
        <!-- <Column field="image" header="Hình ảnh"></Column> -->
        <Column header="Hình ảnh">
          <template #body="slotProps">
            <img :src="slotProps.data.image" class="product-image" />
          </template>
        </Column>
        <!-- <Column field="quantity" header="Sô lượng"></Column> -->
        <Column field="quantity" header="Sô lượng" style="width: 20%">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" />
          </template>
        </Column>
        <Column field="price" header="Giá"></Column>
        <Column :rowEditor="true" style="width: 10%; min-width: 8rem" bodyStyle="text-align:center"></Column>
        <template #footer> Tổng cộng: 1500000 </template>
      </DataTable>
    </div>
    <div class="text-area">
      <Textarea placeholder="Ghi chú cho đơn hàng" />
      <Button label="Tiến hành đặt hàng" class="p-button-outlined p-button-success" />
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

const router = useRouter();

const goto = (path) => {
  router.push(path);
};

const product = [
  {
    id: '1000',
    name: 'Áo Polo Slimfit Masculine Phối Bo PO094 Màu Kem',
    image: 'https://4menshop.com/images/thumbs/2022/11/-17480-slide-products-6368a880149bf.JPG',
    quantity: 10,
    price: 345000,
  },
  {
    id: '1001',
    name: 'Áo Polo Slimfit Masculine Phối Bo PO094 Màu Kem',
    image: 'https://4menshop.com/images/thumbs/2022/11/-17480-slide-products-6368a880149bf.JPG',
    quantity: 10,
    price: 345000,
  },
  {
    id: '1002',
    name: 'Áo Polo Slimfit Masculine Phối Bo PO094 Màu Kem',
    image: 'https://4menshop.com/images/thumbs/2022/11/-17480-slide-products-6368a880149bf.JPG',
    quantity: 10,
    price: 345000,
  },
];
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
</style>
