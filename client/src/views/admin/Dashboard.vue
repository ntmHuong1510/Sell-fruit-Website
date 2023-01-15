<template>
  <div class="card">
    <h2>Số liệu thống kê</h2>
    <Accordion>
      <AccordionTab :header="'Tổng số đơn hàng: ' + analytic.total">
        <p> Đang chuẩn bị:  {{ analytic.prepare }}</p>
        <p> Đang vận chuyển:  {{ analytic.shipping }}</p>
        <p> Đã giao:  {{ analytic.done }}</p>
        <p> Đơn đã hủy:  {{ analytic.cancel }}</p>
      </AccordionTab>
      <AccordionTab :header="'Tổng số tiền từ các đơn hàng: ' + formatCurrency(analytic.totalPrice)">
        <p> Các đơn đang chuẩn bị:  {{ formatCurrency(analytic.preparePrice) }}</p>
        <p> Các đơn đang vận chuyển:  {{ formatCurrency(analytic.shippingPrice) }}</p>
        <p> Các đơn đã giao:  {{ formatCurrency(analytic.donePrice) }}</p>
        <p> Các đơn đã hủy:  {{ formatCurrency(analytic.cancelPrice) }}</p>
      </AccordionTab>
    </Accordion>
    <h2>Biểu đồ các đơn hàng trong 30 ngày gần đây</h2>
    <Chart
      type="bar"
      :data="basicData"
      :options="basicOptions"
    />
    <Chart
      type="line"
      :data="basicDataLine"
      :options="basicOptions"
    />
  </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import { storeHistory } from '@/core/store';
import { computed, onMounted, ref } from 'vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import { formatCurrency } from '@/core/helpers/commonFunction';

const store = storeHistory();
const dataChart = ref();
const dataList= ref([]);

const analytic = computed(()=>{
  let totalPrice = 0;
  let preparePrice = 0;
  let shippingPrice = 0;
  let donePrice = 0;
  let cancelPrice = 0;

  dataList.value.forEach(ele=>{
    totalPrice += ele.order_items.totalPrice
    if(ele.status == 0)  preparePrice += ele.order_items.totalPrice
    if(ele.status == 1)  shippingPrice += ele.order_items.totalPrice
    if(ele.status == 2)  donePrice += ele.order_items.totalPrice
    if(ele.status == -1)  cancelPrice += ele.order_items.totalPrice
  })

  return {
    total: dataList.value.length,
    prepare:  dataList.value.filter(ele => ele.status == "0").length,
    shipping: dataList.value.filter(ele => ele.status == "1").length,
    done: dataList.value.filter(ele => ele.status == "2").length,
    cancel: dataList.value.filter(ele => ele.status == "-1").length,

    totalPrice, preparePrice, shippingPrice,donePrice,cancelPrice
  }
})

const basicData = computed(() => ({
  labels: dataChart.value?.labels,
  datasets: [
    {
      label: 'Số lượng đơn hàng trong ngày',
      backgroundColor: '#42A5F5',
      data: dataChart.value?.data,
    },
  ],
}));

const basicDataLine = computed(() => ({
  labels: dataChart.value?.labels,
  datasets: [
    {
      label: 'Số lượng đơn hàng trong ngày',

      data: dataChart.value?.data,
      fill: true,
      borderColor: '#FFA726',
      tension: 0.4,
      backgroundColor: 'rgba(255,167,38,0.2)',
    },
  ],
}));

const basicOptions = {
  plugins: {
    legend: {
      labels: {
        color: '#495057',
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#495057',
      },
      grid: {
        color: '#ebedef',
      },
    },
    y: {
      ticks: {
        color: '#495057',
      },
      grid: {
        color: '#ebedef',
      },
      ticks: {
        precision: 0,
      },
    },
  },
};

onMounted(async () => {
  await store.getOrdersAdmin();
  const { statusCode, data } = store.data;
  const listLabel = [];
  const listOrder = [];
  dataList.value = data
  for (let i = 1; i <= 31; i++) {
    const now = new Date();
    listLabel.push(new Date(now.setDate(now.getDate() - 31 + i)).toLocaleString().split(', ')[1]);
  }
  listLabel.forEach((element) => {
    const list = data?.filter((item) => String(item.date).split(', ')[1] == element);
    listOrder.push(list ? list.length : 0);
  });
  dataChart.value = { labels: listLabel, data: listOrder };
});
</script>

<style lang="scss" scoped>
.card {
  max-width: 1150px;
  width: 100%;
  margin: auto;
  margin-bottom: 50px;
}
</style>
