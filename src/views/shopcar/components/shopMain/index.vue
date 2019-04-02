<template>
  <div class="shop-main">
    <div class="shop-list" v-if="shopcarList.length">
      <slot></slot>
    </div>
    <div class="shop-img" v-else>
      <router-link :to="{name:'home'}">
        <img src="../../../../assets/images/empty.png">
      </router-link>
    </div>
    <div class="shop-img">
      <img src="../../../../assets/images/guess-love.jpg">
    </div>
    <div class="content">
      <ul class="display-flex flex-wrap justify-between">
        <li v-for="item of list" :key="item.id">
          <router-link :to="item.href">
            <div>
              <img :src="item.src">
            </div>
            <div class="con">
              <p>{{item.title}}</p>
              <p class="price">{{item.price}}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="foot">
      <p>--------我也是有底线的--------</p>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "shopMain",
  props: {
    list: {
      type: Array,
      required: true
    }
  },

  computed: {
    ...Vuex.mapState(["shopcarList"])
  },
  created() {

  }
};
</script>

<style lang="scss" scoped>
.shop-main {
  overflow: auto;

  .shop-img {
    height: pxToVw(62.5);
  }
  .content {
    li {
      width: 49.5%;
      background: #fff;
      .con {
        padding: pxToVw(10) pxToVw(14);
        font-size: pxToVw(15);
        .price {
          margin-top: pxToVw(5);
          font-size: pxToVw(17);
          color: #ff6700;
        }
      }
    }
  }
  .foot {
    text-align: center;
    font-size: pxToVw(14);
    color: #666;
    p {
      margin: pxToVw(18.75) 0;
    }
  }
}
</style>