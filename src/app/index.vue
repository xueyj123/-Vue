<template>
  <div id="app" v-SwiperBack>
    <router-view></router-view>
    <transition name="move">
    <menuNav
      class="menu-nav"
      v-show="isShow"
    ></menuNav>
    </transition>
  </div>
</template>

<script>
import MenuNav from "./menuNav";
export default {
  name: "app",
  data() {
    return {
      menuList:['home','classify','shopcar','mine']
    };
  },
  computed: {
    isShow() {
      if(this.menuList.indexOf(this.$route.name)!==-1){return true}else{return false}
    }
  },
  components: {
    MenuNav
  }
};
</script>

<style lang="scss">
@import "../assets/icon/iconfont.css";
@import "../assets/scss/reset";
@import "../assets/scss/public";
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .menu-nav {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
.move-enter-active,.move-leave-active{
  transition: all .4s
}
.move-leave-to,.move-enter{
  transform: translateY(100%)
}
</style>
