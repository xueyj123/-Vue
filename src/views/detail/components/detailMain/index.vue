<template>
  <div class="detail-main">
    <appSwiper
      :images='detailList.banner'
      class="banner"
    ></appSwiper>
    <div class="content">
      <div class="hot"><img :src="detailList.hot"></div>
      <div class="title-box">
        <h3 class="title">{{detailList.title}}</h3>
        <p class="big-content">{{detailList.bigContent}}</p>
        <p class="small-content">{{detailList.smallContent}}</p>
        <p>
          <span class="money">￥{{detailList.money}}</span><span
            class="nomoney"
            v-if="detailList.noMoney"
          >￥{{detailList.noMoney}}</span><span
            class="tips"
            v-if="detailList.tips"
          >{{detailList.tips}}</span>
        </p>
      </div>
      <div class="touch-box">
        <div class="chosess"><span>已选</span><span>{{detailList.chouse}}</span><i class="icon-arrow-right iconfont icon-right"></i></div>
        <div class="address"><span>送至</span><span
            v-for=" item of detailList.address"
            :key="item"
          >{{item}}</span><i class="icon-arrow-right iconfont icon-right"></i></div>
      </div>
      <div class="touch-box">
        <div><span>配件</span><i class="icon-arrow-right iconfont icon-right"></i></div>
      </div>
    </div>
    <div class="img-box">
      <div
        v-for="img of detailList.pBox"
        :key="img"
      ><img
          v-lazy="img"
        ></div>
    </div>
    <div class="foot">
      <p>--------我也是有底线的--------</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailMain",
  props: {
    detailList: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.detail-main {
  .banner {
    height: pxToVw(188);
  }
  .content {
    .hot {
      height: pxToVw(45);
      overflow: hidden;
    }
    .title-box {
      background: #fff;
      margin-bottom: pxToVw(5);
      padding: pxToVw(10) pxToVw(15);
      .title {
        font-weight: 100;
      }
      p {
        padding-top: pxToVw(5);
        font-size: pxToVw(12);
        .money {
          color: #ff6700;
          font-size: pxToVw(22);
          font-weight: 700;
        }
        .nomoney {
          margin-left: 0.16rem;
          color: rgba(0, 0, 0, 0.54);
          text-decoration: line-through;
        }
        .tips {
          display: inline-block;
          line-height: 1em;
          padding: 0.2em;
          color: #fff;
          font-size: 0.3rem;
          background: #ff6700;
          margin-left: 0.2rem;
          border-radius: 2px;
          position: relative;
          top: -0.05rem;
        }
      }
      .big-content {
        color: rgb(255, 74, 0);
      }
      .small-content {
        color: rgb(117, 117, 117);
      }
    }
    .touch-box {
      margin-bottom: pxToVw(7.5);
      div {
        height: pxToVw(49);
        line-height: pxToVw(49);
        background-color: #fff;
        color: rgba(0, 0, 0, 0.87);
        position: relative;
        border-bottom: 1px solid #d9d9d9;
        padding: 0 pxToVw(20);
        font-size: pxToVw(14);
        span {
          &:nth-child(1) {
            padding-right: pxToVw(13);
          }
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