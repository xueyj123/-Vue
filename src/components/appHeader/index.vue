<template>
  <div class="app-header">
    <span v-if="isBack"
      class="iconfont icon-arrowleft left"
      @click="$router.go(-1)"
    ></span>
    <span class='title'>{{item}}</span>
    <span v-if="isSearch"
      class="iconfont icon-search right"
      @click="$router.push({name:'classify'})"
    ></span>
  </div>
</template>

<script>
export default {
  name: "appHeader",
  props: {
    item: {
      type: String,
      required: true
    },
    isSearch:{
      type:Boolean,
      default:true
    },
    isBack:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.app-header {position: relative;
  text-align: center;
  line-height: 48px;
  color: #666;
  .left {
    position: absolute;
    left: pxToVw(25);
    font-size: pxToVw(25);
  }
  .right {
    position: absolute;
    right: pxToVw(25);
    font-size: pxToVw(20);
  }
}
</style>
