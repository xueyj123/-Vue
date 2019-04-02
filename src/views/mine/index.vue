<template>
  <div class="mine">
    <header class="display-flex align-item">
      <router-link :to="{name:'login'}">
        <img src="../../assets/images/avatar.png">
      </router-link>
      <span @click="cancelLogin">{{!isLogin?"登录/注册":"退出"}}</span>
    </header>
    <div class="main">
      <router-link :to="{name:'develop'}" class="order">
        <div>
          <span>我的订单</span>
          <span class="iconfont icon-right">全部订单</span>
          <!-- <span class="iconfont icon-arrowright"></span> -->
        </div>
      </router-link>
      <ul class="display-flex align-item justify-between service">
        <li class="display-flex flex-wrap flex-1">
          <router-link :to="{name:'develop'}">
            <span class="iconfont icon-deliver"></span>
            <span>待付款</span>
          </router-link>
        </li>
        <li class="display-flex flex-wrap flex-1">
          <router-link :to="{name:'develop'}">
            <span class="iconfont icon-deliver"></span>
            <span>待收货</span>
          </router-link>
        </li>
        <li class="display-flex flex-wrap flex-1">
          <router-link :to="{name:'develop'}">
            <span class="iconfont icon-deliver"></span>
            <span>退换修</span>
          </router-link>
        </li>
      </ul>
      <div class="member">
        <router-link :to="{name:'develop'}" class="iconfont icon-delivers icon-right">
          <span>会员中心</span>
        </router-link>
        <router-link :to="{name:'develop'}" class="iconfont icon-delivers icon-right">
          <span>我的优惠</span>
        </router-link>
      </div>
      <div class="member">
        <router-link :to="{name:'develop'}" class="iconfont icon-delivers icon-right">
          <span>服务中心</span>
        </router-link>
        <router-link :to="{name:'develop'}" class="iconfont icon-delivers icon-right">
          <span>小米之家</span>
        </router-link>
      </div>
      <div class="member">
        <router-link :to="{name:'develop'}" class="iconfont icon-delivers icon-right">
          <span>F码通道</span>
        </router-link>
      </div>
      <div class="member">
        <router-link :to="{name:'develop'}" class="iconfont icon-delivers icon-right">
          <span>设置</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  name: "mine",
  computed: {
    ...Vuex.mapState(["isLogin"])
  },
  methods: {
    ...Vuex.mapMutations(["cancelLogin"])
    // cancel(){
    //   cancelLogin
    // }
  }
};
</script>

<style lang="scss" scoped>
.mine {
  position: relative;
  width: 100%;
  height: 100%;
  header {
    position: absolute;top: 0;
    padding: pxToVw(16) 0;
    width: 100%;
    height: 52px;
    background: url(../../assets/images/mine-bg.png) no-repeat #f37d0f center 0;
    background-size: auto 100%;
    img {
      margin: 0 pxToVw(8) 0 pxToVw(17);
      border: 3px solid rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      width: pxToVw(44);
      height: pxToVw(44);
    }
    span {
      color: white;
    }
  }
  .main {
    position: absolute;
    top: 74px;
    bottom: 54px;
    right: 0;
    left: 0;
    // height: 100%;
    width: 100%;
    overflow:auto;
    span{
      font-size: pxToVw(16);
    }
    .order {
      height: pxToVw(50);
      line-height: pxToVw(50);
      color: black !important;
      background-color: #fff;
      border-bottom: 1px solid #d9d9d9;
      div {
        position: relative;
        padding: 0 pxToVw(15);
        span {
          &:nth-child(1) {
            float: left;
          }
          &:nth-child(2) {
            float: right;
            margin-right: pxToVw(30);
          }
        }
      }
    }
    .service {
      background: #fff;
      clear: both;
      // padding: 0 pxToVw(25);
      height: pxToVw(88);
      li {
        justify-content: center;
        a {
          color: black !important;
          span {
            display: block;
            text-align: center;
            &:nth-child(1) {
              font-size: pxToVw(20);
            }
            &:nth-child(2) {
              font-size: pxToVw(14);
            }
          }
        }
      }
    }
    .member {
      margin-top: pxToVw(7.5);
      background: #fff;
      padding: 0 pxToVw(15) 0 pxToVw(56);
      line-height: pxToVw(50);
      a {
        color: black;
      }
    }
  }
}
</style>
