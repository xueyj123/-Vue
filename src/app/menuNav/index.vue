<template>
  <div class="menu-nav">
    <ul class="display-flex justify-between align-item">
      <li class="flex-1">
        <router-link :to="{name:'home'}">
          <p class="iconfont icon-home"></p>
          <p>首页</p>
        </router-link>
      </li>
      <li class="flex-1">
        <router-link :to="{name:'classify'}">
          <p class="iconfont icon-classify"></p>
          <p>分类</p>
        </router-link>
      </li>
      <li class="flex-1">
        <router-link :to="{name:'shopcar'}">
          <p class="iconfont icon-shopcar"></p>
          <p>购物车</p>
        </router-link>
      </li>
      <li class="flex-1">
        <router-link :to="{name:'mine'}">
          <p class="iconfont icon-mine"></p>
          <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "menuNav"
};
</script>

<style lang="scss" scoped>
.menu-nav {
  height: 54px;
  text-align: center;
  background: #fff;
  box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  .display-flex {
    height: 100%;
    a {
      font-size: pxToVw(12);
      color: #999;
    }
    .iconfont {
      font-size: pxToVw(22.5);
    }
    .router-link-active {
      color: #ff6700;
    }
  }
}
</style>