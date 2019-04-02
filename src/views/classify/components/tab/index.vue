<template>
  <div class="tab display-flex">
    <div
      class="tab-content"
      ref="tabContent"
    >
      <ul class="display-flex flex-wrap">
        <li
          v-for='(item,index ) of menu'
          :key="item.id"
          class="display-flex justify align-item"
          :class='{special:index==active}'
          @click="change(index,$event)"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class=" flex-1 main-content  ">
      <div
        v-for='(item,index ) of menu'
        :key="item.id"
        v-show="index==active"
      >
        <slot :name='"tabItem"+index'></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab",
  data() {
    return {
      active: 0
    };
  },
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  methods: {
    change(index,e) {
      
      let li = e.target;
      console.log(e);
      let distanse = li.offsetTop - this.$refs.tabContent.offsetHeight / 2;
      this.$refs.tabContent.scrollTop = distanse;
      this.active = index;
    }
  },
  created(){
  }
};
</script>

<style lang="scss" scoped>
.tab {
  background: #fff;
  .tab-content {
    width: pxToVw(80);
    height: 100%;
    overflow: auto;
    ul {
      box-sizing: border-box;
      width: 100%;
      padding: 0 pxToVw(10);
      border-right: 1px solid #efefef;
      li {
        height: pxToVw(48);
        width: 100%;
        font-size: pxToVw(14);
      }
      .special {
        color: #fb7d34;
        transform: scale(1.2);
      }
    }
  }
  .main-content {
    width: pxToVw(80);
    height: 100%;
    overflow: auto;
  }
}
</style>
