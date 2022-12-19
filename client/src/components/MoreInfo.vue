<template>
  <div class="container">
    <div class="item">
      <img src="https://www.countryandtownhouse.com/wp-content/uploads/2016/12/private.white_.2.jpg" />
      <div class="text_content">
        <h3>Bộ sưu tập lịch lãm</h3>
        <h4>Chỉ từ 599k</h4>
      </div>
    </div>
    <div class="item">
      <img src="https://spy.com/wp-content/uploads/2020/10/yeahd-1.jpg" />
      <div class="text_content">
        <h3>BỘ SƯU TẬP 2022</h3>
        <h4>Thiết kế tối giản</h4>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
  gap: 20px;

  .item {
    overflow: hidden;
    height: 300px;
    width: 50%;
    position: relative;
    cursor: pointer;

    img {
      transition: all 0.4s ease-in-out;
    }

    &:hover {
      img {
        -webkit-transform: rotateY(-180deg);
        opacity: 0.7;
      }

      .text_content {
        right: 30px;
        left: auto;
        text-align: right;
      }
    }

    .text_content {
      position: absolute;
      top: 90px;
      left: 30px;
      right: auto;
      text-align: left;
      transition: all 0.4s ease-in-out;

      h3 {
        font-size: 24px;
        text-transform: uppercase;
        color: white;
        margin-bottom: 8px;
      }

      h4 {
        font-size: 18px;
        text-transform: uppercase;
        color: white;
        margin: 0;
      }
    }

    img {
      width: 100%;
    }
  }
}
</style>
