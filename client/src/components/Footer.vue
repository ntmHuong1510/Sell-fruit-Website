<template>
  <div class="ft-before">
    <div class="container">
      <div class="block_newsletter">
        <div class="title_newsletter">
          <h4>HÃY LIÊN HỆ VỚI CHÚNG TÔI</h4>
          <p>Cảm ơn vì đã đóng góp giúp cho dịch vụ của chúng tôi ngày càng hoàn thiện hơn</p>
        </div>
        <div class="text_backgound">
          <h3>Newsletter</h3>
        </div>
        <form action="https://demo.fieldthemes.com/ps-fami/store/home2/en/#footer" method="post">
          <div class="input-wrapper">
            <input name="email" type="text" value="" placeholder="Hãy nhập email của bạn..." />
          </div>
          <input class="button-newletter title_font" name="submitNewsletter" type="submit" value="Xác nhận" />
          <input type="hidden" name="action" value="0" />
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.ft-before {
  background: #addc3b;
  background-color: rgb(173, 220, 59);
  padding: 76px 0;
  position: relative;
  z-index: 1;
  overflow: hidden;

  .container {
    margin: auto;

    .block_newsletter {
      font-size: 14px;
      margin-bottom: 0;
      text-align: center;

      .title_newsletter {
        p {
          padding-top: 0;
          font-size: 14px;
          color: #fff;
          margin-bottom: 30px;
          line-height: 1;
        }

        h4 {
          font-size: 30px;
          text-transform: uppercase;
          color: #fff;
          font-weight: 400;
          margin-bottom: 25px;
          line-height: 1;
        }
      }

      .text_backgound {
        position: absolute;
        bottom: -70px;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;

        h3 {
          font-size: 236px;
          color: rgba(255, 255, 255, 0.1);
          margin: 0;
        }
      }

      form {
        display: inline-block;

        .input-wrapper {
          float: left;

          input {
            height: 40px;
            line-height: 40px;
            box-shadow: none;
            width: auto;
            min-width: 382px;
            border: none;
            padding: 0 15px;
            text-align: left;
            border-radius: 3px 0 0 3px;
            font-weight: 400;
          }
        }

        .button-newletter {
          height: 40px;
          line-height: 40px;
          box-shadow: none;
          width: auto;
          min-width: 140px;
          background: #333;
          color: #fff;
          border: none;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 14px;
          border-radius: 3px;
          margin-left: -10px;
          padding: 0;
        }
      }
    }
  }
}
</style>
