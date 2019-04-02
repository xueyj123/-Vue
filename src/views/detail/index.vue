<template>
  <div class="detail">
    <header class='header'>
      <span
        class="iconfont icon-arrowleft fl"
        @click="$router.go(-1)"
      ></span>
      <span class="iconfont icon-add fr"></span></header>
    <DetailMain class="main" :detailList='list'>
    </DetailMain>
    <div class="footer">
      <ul class="display-flex align-item">
        <li class="display-flex align-item justify home">
          <router-link :to="{name:'home'}">
            <span class="iconfont icon-home "></span>
            <p class="text">首页</p>
          </router-link>
        </li>
        <li class="display-flex align-item justify shopping">
          <router-link :to="{name:'shopcar'}">
            <span class="iconfont icon-shopcar"></span>
            <p class="text">购物车</p>
          </router-link>
        </li>
        <li class=" flex-1 addshop " @click="addItem(list)">
          <button>加入购物车</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'
import DetailMain from "./components/detailMain";
import api from '../../constant/api';

export default {
  name: "detail",
  data() {
    return {
      list: {
        banner: []
      }
    };
  },
  methods:{
    ...Vuex.mapMutations(['addItem'])
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$axios.get(api.detail).then(responseData => {
        responseData.data.list.map(item => {
          if (item.id == vm.$route.params.id) {
            item.count=1;
            item.checked=true;
            vm.list = item;
          }
        }); 
      });
     
    });
  },
  components: {
    DetailMain
  }
};
</script>

<style lang="scss" scoped>
.detail {
  position: relative;
  height: 100%;
  .header {
    text-align: center;
    line-height: 48px;
    color: #666;
    span:nth-child(1) {
      margin-left: pxToVw(25);
      font-size: pxToVw(25);
    }
    span:nth-child(2) {
      margin-right: pxToVw(25);
      font-size: pxToVw(25);
    }
  }
  .main {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 48px 0 54px 0;
    overflow: auto;
    
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #fff;
    ul {
      height: 54px;
      li {
        height: 100%;
      }
      .home,
      .shopping {
        width: 75px;
        a {
          text-align: center;
          color: #999;
          .iconfont {
            font-size: 21px;
          }
          .text {
            font-size: 12px;
          }
        }
      }
      .addshop {
        button {
          width: 100%;
          height: 100%;
          background: #ff6700;
          color: #fff;
          font-size: 17px;
        }
      }
    }
  }
}
</style>
