<template>
  <div class="register">
    <div class="big-img">
      <router-link :to="{name:'home'}">
        <img
          :src="list.bigImg"
          alt=""
        ></router-link>
    </div>
    <div
      v-for="item2 of list.children"
      :key="item2.id"
      class="product-con"
    >
      <p class="product-title ">{{item2.title}}</p>
      <div class="display-flex flex-wrap">
        <div
          class="product-img "
          v-for="item3 of item2.children"
          :key="item3.id"
        >
          <router-link :to="{name:'home'}">
            <img
              :src="item3.imgUrl"
              alt=""
            >
            <p>{{item3.content}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  props: {
    list: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  padding: 0 pxToVw(16);
  text-align: center;
  .big-img {
    height: pxToVw(100);
    a {
      height: 100%;
    }
  }
  .product-con {
    .product-title {
      margin: pxToVw(30) 0;
      font-size: pxToVw(15);
    }
    .display-flex {
      height: pxToVw(214);
      .product-img {
        width: 33%;
      height: pxToVw(107);
        a {
          height: 100%;
          img {
            width: pxToVw(52);
            height: pxToVw(52);
          }
          p {
            margin-top: pxToVw(14);
            font-size: pxToVw(12);
          }
        }
      }
    }
  }
}
</style>
