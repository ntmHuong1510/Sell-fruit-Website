<template>
  <div class="main-header">
    <div class="header-container">
      <div
        id="_desktop_logo"
        class="hidden-md-down pull-left"
      >
        <FontAwesomeIcon
          icon="user"
          class="fa-icon-custom"
        />
        <a class="logo">
          <img
            class="logo img-responsive"
            src="https://demo.fieldthemes.com/ps-fami/store/home2/img/famiorganichome2-logo-15306742692.jpg"
            alt="Fami_Organic_Home2"
          >
        </a>
        <FontAwesomeIcon
          icon="cart-shopping"
          class="fa-icon-custom"
        />
      </div>
    </div>
    <div class="nav-bar">
      <div>
        <span>DANH MỤC</span>
      </div>
      <div>
        <span>TRANG CHỦ</span>
      </div>
      <div>
        <span>SẢN PHẨM MỚI</span>
      </div>
      <div>
        <span>LIÊN HỆ</span>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'HeaderShop',
  components: { FontAwesomeIcon },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.main-header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
}

#_desktop_logo {
  margin: 0 auto;
  z-index: 1040;
  position: relative;
  width: 100%;
  line-height: 100px;
  float: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 50px;
}

.header-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
}

.nav-bar {
  display: flex;
  justify-content: center;
  border: 1px solid #bbb7b7;
  border-right: none;
  border-left: none;
  div {
    width: fit-content;
    padding: 10px 20px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    span{
        padding: 5px 0;
      }
    &:hover{
      span{
        border-bottom: 2px solid #addc3b;
      }
    }
  }
}
</style>
