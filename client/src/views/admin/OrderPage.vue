<template>
  <div class="wrapper">
    <div class="form">
      <h2 class="title">Tìm kiếm đơn hàng</h2>
      <span class="p-float-label">
        <InputText id="inputtext" v-model="searchForm.code" type="text" />
        <label for="inputtext">Mã đơn hàng</label>
      </span>
      <span class="p-float-label">
        <InputText id="inputtext" v-model="searchForm.name" type="text" />
        <label for="inputtext">Tên người nhận</label>
      </span>
      <span class="p-float-label">
        <InputMask v-model="searchForm.phone" id="inputtext" :auto-clear="false" mask="999-9999-999" />
        <label for="inputtext">Số điện thoại</label>
      </span>
      <span class="p-float-label">
        <Dropdown id="dropdown" v-model="searchForm.shipper" :options="dropdownOption" option-label="name" />
        <label for="dropdown">Đơn vị vận chuyển</label>
      </span>
      <span class="p-float-label">
        <Dropdown id="dropdown" v-model="searchForm.status" :options="statusOption" option-label="name" />
        <label for="dropdown">Trạng thái đơn hàng</label>
      </span>
      <Button @click="onSearch">Tìm kiếm</Button>
    </div>
    <div class="table">
      <DataTable
        :value="filterList"
        :sort-order="-1"
        responsive-layout="scroll"
        row-hover
        :paginator="true"
        :rows="10"
        paginator-template="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        @row-click="onRowClick"
      >
        <Column :sortable="true" field="code" header="Mã đơn hàng" />
        <Column :sortable="true" field="name" header="Tên người nhận" />
        <Column :sortable="true" field="phone" header="Số điện thoại" />
        <Column :sortable="true" field="shipper" header="Đơn vị vận chuyển" />
        <Column :sortable="true" field="date" header="Ngày đặt hàng" />
        <Column :sortable="true" field="status" header="Trạng thái">
          <template #body="slotProps">
            <Button
              :label="status[slotProps.data.status].text"
              class="p-button-raised p-button-rounded status"
              :class="status[slotProps.data.status].color"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { storeHistory } from '@/core/store';

const router = useRouter();
const orderList = ref([]);
const store = storeHistory();
const searchForm = ref({
  code: '',
  name: '',
  phone: '',
  shipper: { name: 'Không chọn', code: '' },
  status: { name: 'Không chọn', code: '' },
  date: '',
});
const filterList = ref([]);

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

const dropdownOption = [
  { name: 'Không chọn', code: '' },
  { name: 'Ninja Van', code: 'Ninja Van' },
  { name: 'Viettel Post', code: 'Viettel Post' },
  { name: 'Giao Hàng tiết kiệm', code: 'Giao Hàng tiết kiệm' },
  { name: 'Shopee Express', code: 'Shopee Express' },
];

const statusOption = [
  { name: 'Không chọn', code: '' },
  { name: 'Đơn hàng bị hủy', code: '-1' },
  { name: 'Đang chuẩn bị hàng', code: '0' },
  { name: 'Đang vận chuyển', code: '1' },
  { name: 'Đã giao hàng', code: '2' },
];

const onRowClick = (event) => {
  router.push(`/admin/order-details?id=${event?.data.code}`);
};

const onSearch = () => {
  const { code, name, phone, shipper, status, date } = searchForm.value;
  let tempList = orderList.value;
  if (code) {
    filterList.value = orderList.value.filter((ele) => String(ele.code).toLowerCase()?.includes(code.toLowerCase()));
    tempList = filterList.value;
  } else {
    filterList.value = tempList;
  }

  if (name) {
    filterList.value = orderList.value.filter((ele) => String(ele.name).toLowerCase()?.includes(name.toLowerCase()));
    tempList = filterList.value;
  } else {
    filterList.value = tempList;
  }

  if (phone) {
    filterList.value = orderList.value.filter((ele) => String(ele.phone)?.includes(phone.replaceAll('_', '').replaceAll("-","")));
    tempList = filterList.value;
  } else {
    filterList.value = tempList;
  }

  if (shipper.code) {
    filterList.value = orderList.value.filter((ele) => String(ele.shipper)?.includes(shipper.name));
    tempList = filterList.value;
  } else {
    filterList.value = tempList;
  }

    if (status.code) {
    filterList.value = orderList.value.filter((ele) => String(ele.status)?.includes(status.code));
    tempList = filterList.value;
  } else {
    filterList.value = tempList;
  }
};

onMounted(async () => {
  await store.getOrdersAdmin();
  const { statusCode, data } = store.data;
  orderList.value = data.map((ele) => {
    return {
      code: ele.order_id,
      name: ele.name,
      phone: ele.phone,
      shipper: ele.shipper,
      status: ele.status,
      date: ele.date,
    };
  });
  filterList.value = orderList.value;
});
</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 50px;
}
.form {
  padding: 16px;
  max-width: 1150px;
  width: 100%;
  margin: auto;
}
.table {
  max-width: 1150px;
  width: 100%;
  margin: auto;
  :deep(.p-paginator) {
    justify-content: flex-end;
  }
}
.p-float-label {
  margin-bottom: 30px;
  input {
    max-width: 400px;
    width: 100%;
  }
  .p-dropdown {
    max-width: 400px;
    width: 100%;
  }
}
</style>
