<template>
  <div class="home">
    <header class="header display-flex justify-between">
      <div class="display-flex align-item width-30">
        <img
          src="images/logo.png"
          class="logo"
        >
      </div>
      <div class="display-flex justify align-item flex-1">
        <router-link :to="{name:'classify'}">
          <i class="iconfont icon-search"></i>
          <span>搜索商品名称</span>
        </router-link>
      </div>
      <div class="display-flex justify align-item width-30">
        <router-link :to="{name:'mine'}"><i class="iconfont icon-smallface "></i></router-link>
      </div>
    </header>
    <Refresh
      class="refresh"
      @load="getData"
    >
      <div class="main">
        <AppSwiper
          :images="swiperimg"
          class="swiper"
        ></AppSwiper>
        <div class="classify">
          <ul class="display-flex flex-wrap">
            <li
              v-for="item of classifylist"
              :key="item.id"
            >
              <router-link :to="item.href">
                <p>
                  <img
                    :src="item.src"
                    alt
                  >
                </p>
                <span>{{item.name}}</span>
              </router-link>
            </li>
          </ul>
        </div>
        <ListRoll
          :newsList="newslist"
          class="newslist"
        ></ListRoll>
        <HomeDetail class="content"></HomeDetail>
        <div class="foot">
          <p>--------我也是有底线的--------</p>
        </div>
      </div>
    </Refresh>
  </div>
</template>

<script>
import HomeDetail from "./components/homeDetail";
import api from '../../constant/api';
export default {
  name: "home",
  data() {
    return {
      newslist: [],
      classifylist: [],
      swiperimg: []
    };
  },
  components: {
    HomeDetail
  },
  methods: {
    getData(resolve) {
      // console.log(resolve())
      this.$axios
        .all([
          this.$axios.get(api.homeClassifyList),
          this.$axios.get(api.homeSwiper)
        ])
        .then(
          this.$axios.spread(( responseData2, responseData3) => {
            this.classifylist = responseData2.data.list;
            this.swiperimg = responseData3.data.list;
            resolve && resolve();
          })
        );
    }
  },
  created() {
    this.getData();
    this.$axios.get("homeNewsList.json").then(responseData=>{
      this.newslist = responseData.data.list}
    )
  }
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;
  .header {
    position: absolute;
    width: 100%;
    height: 48px;
    padding: 0 pxToVw(15);
    box-sizing: border-box;
    background: #f2f2f2;
    .logo {
      width: pxToVw(22);
      height: pxToVw(20);
    }
    .flex-1 {
      a {
        box-sizing: border-box;
        background-color: #fff;
        border-radius: pxToVw(5);
        width: 100%;
        height: pxToVw(32);
        padding: pxToVw(6);
        color: #666;
        span {
          font-size: pxToVw(14);
        }
      }
    }
    .icon-smallface {
      font-size: pxToVw(22);
    }
  }
  .refresh {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-top: 48px;
    margin-bottom: 54px;
    overflow: auto;
    .main {
      .swiper {
        height: pxToVw(187.5);
      }
      .classify {
        ul {
          background: #fff;
          text-align: center;
          li {
            width: 20%;
            p {
              margin-top: pxToVw(10);
              img {
                width: pxToVw(45);
                height: pxToVw(45);
                border-radius: 50%;
              }
            }
            span {
              font-size: pxToVw(12);
              color: black;
            }
          }
        }
      }
      .newslist {
        margin-top: pxToVw(10);
        background: #fff;
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
  }
}
</style>
