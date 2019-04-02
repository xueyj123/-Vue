<template>
  <section class="appswiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide
        v-for="item of images"
        :key="item.id"
      >
        <router-link :to="item.href">
          <img :src="item.src"></router-link>
      </swiper-slide>

      <!-- Optional controls -->
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </section>
</template>
 
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "appswiper",
  props: {
    images: {
      type: Array,
      required: true
    },

  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style lang="scss" scoped>
.appswiper {
  .swiper-container {
    height: 100%;
    a {
      height: 100%;
    }
  }
}
</style>
