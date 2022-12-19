<template>
  <div class="wrapper">
    <splide :options="options">
      <splide-slide>
        <div>
          <img src="https://assets.vogue.com/photos/60e70bc545d4cb14fb3dcc56/master/w_2560%2Cc_limit/00_story.jpg" />
        </div>
      </splide-slide>
      <splide-slide>
        <div>
          <img src="https://assets.vogue.com/photos/605a84ab5cd7c14dd841bd23/master/w_2560%2Cc_limit/00_story.jpg" />
        </div>
      </splide-slide>
      <splide-slide>
        <div>
          <img src="https://assets.vogue.com/photos/61e9c43c8aa98afba69ec2e8/master/w_2560%2Cc_limit/00_story.jpg" />
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script setup>
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const options = {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  perPage: 1,
};
</script>

<style scoped lang="scss">
.wrapper {
  height: 600px;
  overflow: hidden;
}
img {
  width: 100%;
}
</style>
