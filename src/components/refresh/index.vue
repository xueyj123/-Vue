<template>
  <div class="pull-refresh" ref="pullRefresh">
    <div ref="tipRefresh" class="tip-refresh">
      <p>{{tipInfo}}</p>
    </div>
    <div class="main-content" :class="{trans}" ref="refresh">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "appPullRefresh",
  data() {
    return {
      tipInfo: "",
      startY: "",
      endY: "",
      move: "",
      el: null,
      tipBoxHeight: "",
      trans: false,
      distance: 0
    };
  },
  methods: {
    bindTouchEvent() {
      this.el.addEventListener("touchstart", this.touchStart);
      this.el.addEventListener("touchmove", this.touchMove);
      this.el.addEventListener("touchend", this.touchEnd);
    },
    touchStart(e) {
      // console.log(e);
      this.tipBoxHeight = this.$refs.tipRefresh.offsetHeight;
      this.startY = e.changedTouches[0].clientY;
      this.tipInfo = "下拉刷新";
    },
    touchMove(e) {
      if (this.$refs.pullRefresh.scrollTop != 0) {
        return;
      }
      let move = e.changedTouches[0].clientY - this.startY;
      if (move > 0 && move < this.tipBoxHeight * 2) {
        this.el.style.top = move + "px";
        this.distance = move;
        if (move > this.tipBoxHeight) {
          this.tipInfo = "松开即可刷新";
        } else {
          this.tipInfo = "下拉刷新";
        }
      }
    },
    touchEnd(e) {
      if (this.$refs.pullRefresh.scrollTop != 0) {
        return;
      }
      this.trans = true;
      this.endY = e.changedTouches[0].clientY;
      if (this.distance > this.tipBoxHeight) {
        this.tipInfo = "数据加载中...";
        new Promise(resolve => {
          console.dir(resolve)
          this.$emit("load", resolve);
        }).then(() => {
          this.resetBox();
        });
      } else {
        this.resetBox();
      }
    },
    resetBox() {
      if (this.distance > 0) {
        this.el.style.top = 0;
      }
      this.tipInfo = "下拉刷新";
      this.distance = 0;
    }
  },
  created() {
    this.$nextTick(function() {
      this.el = this.$refs.refresh;
      this.bindTouchEvent();
    });
  }
};
</script>

<style lang="scss" scoped>
.pull-refresh {
  .tip-refresh {
    position: absolute;
    width: 100%;
    height: pxToVw(40);
    text-align: center;
    font-size: pxToVw(14);
  }
  .main-content {
    position: absolute;
    width: 100%;
  }
  .trans {
    transition: top 0.4s;
  }
}
</style>