<template>
  <ul class="shopcar-list">
    <li
      v-for="(item,index) of shopcarList"
      :key="item.id"
    >
      <div class="check">
        <label for="checkbox">
          <input
            type="checkbox"
            name="checkbox"
            v-model="item.checked"
          ></label>
      </div>
      <div class="list-img"><img :src="item.img"></div>

      <div class="list-con">
        <p class="list-title">{{item.title}}</p>
        <p class="list-price">售价：{{item.money}}元</p>
        <div class="count">
          <div
            @click="decreaseItem(item)"
            :class="{ 'bgcolor1': parseInt(item.count) ==1,'bgcolor2': parseInt(item.count) >1 }"
          >-</div>
          <div>{{item.count}}</div>
          <div
            @click="increaseItem(item)"
            :class="{ 'bgcolor1': parseInt(item.count) ==item.max,'bgcolor2': parseInt(item.count) <item.max }"
          >+</div>
        </div>
      </div>
      <div
        class="delete"
        @click="delItem(index)"
      ><i class="icon-del iconfont"></i></div>
    </li>
  </ul>
</template>
<script>
import Vuex from "vuex";
export default {
  name: "shopcarList",
  computed: {
    ...Vuex.mapState(["shopcarList"])
  },
  methods: {
    ...Vuex.mapMutations(["delItem", "increaseItem", "decreaseItem"])
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.shopcar-list {
  width: 100%;
  li {
    height: pxToVw(91);
    background: #ffffff;
    position: relative;
    padding: pxToVw(12);
    overflow: hidden;
    .check {
      width: pxToVw(20);
      float: left;
      line-height: pxToVw(86);
      margin-right: pxToVw(10);
      input {
        width: pxToVw(20);
        height: pxToVw(20);
      }
    }
    .list-img {
      float: left;
      width: pxToVw(91);
      height: pxToVw(91);
      img {
        height: pxToVw(91);
      }
    }
    .list-con {
      float: left;
      width: pxToVw(190);
      height: pxToVw(84);
      margin-left: pxToVw(11.25);
      .list-title {
        margin-top: pxToVw(3.75);
        height: pxToVw(20);
        font-size: pxToVw(15);
        color: #666;
      }
      .list-price {
        margin-top: pxToVw(3.75);
        margin-bottom: pxToVw(7.5);
        height: pxToVw(16);
        font-size: pxToVw(12);
        color: #999;
        // line-height: pxToVw(16);
      }
      .count {
        height: pxToVw(33);
        border: 1px solid #eee;

        div {
          width: pxToVw(31);
          height: 100%;
          font-size: pxToVw(16);
          float: left;
          line-height: pxToVw(31);
          text-align: center;
        }
      }
    }
    .delete {
      position: absolute;
      right: pxToVw(12);
      top: pxToVw(72);
      width: pxToVw(24);
      height: pxToVw(24);
      i {
        font-size: pxToVw(23);
      }
    }
  }
}
.bgcolor1 {
  background-color: #f3f0f0;
  font-size: pxToVw(25) !important;
}
.bgcolor2 {
  background-color: #e2e0e0;
  font-size: pxToVw(25) !important;
}
</style>
