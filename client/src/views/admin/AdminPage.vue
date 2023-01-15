<template>
  <div>
    <TabMenu :model="tabList" />
    <Button @click="onLogout" class="p-button-danger">Đăng xuất</Button>
    <router-view />
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import TabMenu from 'primevue/tabmenu';
import Button from 'primevue/button';
import { isAdmin, logout } from '@/core/helpers/commonFunction';

onBeforeMount(() => {
  if (!isAdmin()) window.location.href = '/';
});

const onLogout = () => {
  logout();
};

const tabList = [
  { label: 'Thống kê', icon: 'pi pi-fw pi-home', to: '/admin/dashboard' },
  { label: 'Đơn hàng', icon: 'pi pi-fw pi-box', to: '/admin/orders' },
  { label: 'Sản phẩm', icon: 'pi pi-fw pi-file', to: '/admin/products' },
];
</script>

<style scoped>
.p-button-danger {
  margin: 16px;
  display: block;
  margin-left: auto;
}
</style>
