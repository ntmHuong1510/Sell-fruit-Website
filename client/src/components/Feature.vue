<template>
  <div>
    <div id="staticblock_endow">
      <div class="row">
        <div class="stt_icon col-lg-3 col-md-6 col-12">
          <div class="box_static_content">
            <div class="img_top">
              <a> <img class="img-responsive" src="@/assets/freeship-logo.png" alt="" /></a>
            </div>
            <div class="content_text">
              <h4>MIỄN PHÍ VẬN CHUYỂN</h4>
              <p>Miễn phí vận chuyển cho đơn hàng từ 1 triệu</p>
            </div>
          </div>
        </div>
        <div class="stt_icon col-lg-3 col-md-6 col-12">
          <div class="box_static_content">
            <div class="img_top">
              <a> <img class="img-responsive" src="@/assets/return-logo.png" alt="" /></a>
            </div>
            <div class="content_text">
              <h4>ĐỔI TRẢ MIỄN PHÍ</h4>
              <p>Đổi trả miễn phí trong vòng 7 ngày sau khi mua sản phẩm</p>
            </div>
          </div>
        </div>
        <div class="stt_icon col-lg-3 col-md-6 col-12">
          <div class="box_static_content">
            <div class="img_top">
              <a> <img class="img-responsive" src="@/assets/phone-logo.png" alt="" /></a>
            </div>
            <div class="content_text">
              <h4>HỖ TRỢ 24/7</h4>
              <p>Tư vấn khách hàng để dễ dàng lựa chọn sản phẩm phù hợp</p>
            </div>
          </div>
        </div>
        <div class="stt_icon col-lg-3 col-md-6 col-12">
          <div class="box_static_content">
            <div class="img_top">
              <a> <img class="img-responsive" src="@/assets/product-logo.png" alt="" /></a>
            </div>
            <div class="content_text">
              <h4>SẢN PHẨM ĐA DẠNG</h4>
              <p>Sản phẩm đa dạng về mẫu mã và chất lượng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner_home_top">
      <div class="item">
        <div class="banner_content">
          <div class="hover_banner">
            <a href="#">
              <img
                class="img-responsive"
                src="https://dailyegyptian.com/wp-content/uploads/2022/09/422cc661-0c79-41e9-b8e4-e2613be4fa5b_foto.jpg"
                alt=""
            /></a>
          </div>
          <div class="text_content">
            <h3>BỘ SƯU TẬP MÙA ĐÔNG 2022</h3>
            <h4>Thiết kế tối giản</h4>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="banner_content">
          <div class="hover_banner">
            <a href="#">
              <img class="img-responsive" src="https://scx2.b-cdn.net/gfx/news/2022/clothes-shopping.jpg" alt=""
            /></a>
          </div>
          <div class="text_content">
            <h4>Phong cách năng động & trẻ trung</h4>
            <h3>Giảm giá lên tới 50%</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#staticblock_endow {
  overflow: hidden;
  display: block;
  padding: 30px 0 30px;
}

.row {
  display: flex;
  padding: 0 200px;
}

.stt_icon {
  width: 25%;
  padding: 20px;
}

.img_top {
  background-color: #addc3b;
  width: 70px;
  height: 70px;
  border-radius: 20px;
  margin: auto;
  cursor: pointer;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 35px;
    height: 35px;
  }

  &:hover {
    background-color: #addc3b;
  }
}

.box_static_content {
  text-align: center;
  max-width: 230px;
}

.banner_home_top {
  display: flex;

  .item {
    width: 50%;

    .banner_content {
      position: relative;
      overflow: hidden;

      img {
        width: 100%;
      }

      .text_content {
        position: absolute;
        top: 50%;
        right: 90px;
        left: auto;
        color: #fff;
        text-transform: uppercase;
        text-align: right;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.48);
        font-weight: 700;
        padding: 15px 30px;

        h3 {
          font-size: 30px;
        }

        &:hover {
          right: 30px;
          transition: all 0.3s ease-in-out 0s;
        }
      }
    }
  }
}
</style>
