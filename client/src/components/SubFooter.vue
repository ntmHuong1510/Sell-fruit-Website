<template>
  <div class="footer-center">
    <div class="contain-info">
      <div class="col-12 col-md-6 col-lg-4">
        <div id="footer_logo">
          <div class="logo_ft">
            <a href="#"> <img class="logo img-responsive" src="@/assets/shop-logo.png" alt="Fami_Organic_Home2" /> </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-6 links links_ftc">
        <div class="col-md-4 wrapper">
          <div class="title-top">
            <h3 class="title_block title_font h3 hidden-sm-down">Trung tâm hỗ trợ</h3>
          </div>
          <ul id="footer_sub_menu_59168" class="collapse">
            <li>
              <a id="link-cms-page-1-3" class="cms-page-link" title="Our terms and conditions of delivery">
                Vận chuyển
              </a>
            </li>
            <li>
              <a id="link-cms-page-5-3" class="cms-page-link" title="Our secure payment method"> Thanh toán bảo mật </a>
            </li>
            <li>
              <a id="link-static-page-my-account-3" class="cms-page-link" title=""> Tài khoản </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 wrapper">
          <div class="title-top">
            <h3 class="title_block title_font h3 hidden-sm-down">Về chúng tôi</h3>
          </div>
          <ul id="footer_sub_menu_66669" class="collapse">
            <li>
              <a id="link-cms-page-4-1" class="cms-page-link" title="Learn more about us"> Thông tin </a>
            </li>
            <li>
              <a id="link-static-page-contact-1" class="cms-page-link" title="Use our form to contact us"> Liên hệ </a>
            </li>
            <li>
              <a id="link-static-page-sitemap-1" class="cms-page-link" title="Lost ? Find what your are looking for">
                Sitemap
              </a>
            </li>
            <li>
              <a id="link-static-page-stores-3" class="cms-page-link" title=""> Chi nhánh </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4 wrapper">
          <div class="title-top">
            <h3 class="title_block title_font h3 hidden-sm-down">Thông tin liên hệ</h3>
          </div>
          <ul id="footer_sub_menu_27744" class="collapse">
            <li>
              <a id="link-cms-page-1-2" class="cms-page-link" title="Our terms and conditions of delivery">
                Chính sách vận chuyển
              </a>
            </li>
            <li>
              <a id="link-cms-page-2-2" class="cms-page-link" title="Legal notice"> Giấy phép kinh doanh </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.col-md-4 {
  width: 250px;
}
.logo_ft {
  img {
    height: auto;
    width: 400px;
  }
}
.footer-center {
  background: transparent;
  padding: 60px 0 0 0;

  .contain-info {
    display: flex;
    justify-content: space-between;
    max-width: 1500px;
    width: 100%;
    margin: auto;
    gap: 30px;

    .links_ftc {
      display: flex;
      width: auto;
      justify-content: space-between;
    }
  }

  .title_block {
    text-transform: uppercase;
  }

  ul {
    padding: 0;

    li {
      list-style: none;
      padding: 5px 0;
      font-size: 18px;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}
</style>
