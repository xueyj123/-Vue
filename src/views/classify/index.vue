<template>
  <div class="classify">
    <AppHeader
      item="分类"
      :isBack='false'
    >
    </AppHeader>
    <Tab
      :menu='tabList'
      class="main"
    >
      <ClassifyContent
        v-for="(item,index) of contentlist"
        :key="item.id"
        :list="item"
        :slot="'tabItem'+index"
      ></ClassifyContent>
    </Tab>
  </div>
</template>

<script>
import Tab from "./components/tab";
import ClassifyContent from "./components/classifyContent";
import api from '../../constant/api';

export default {
  name: "classify",
  data() {
    return {
      tabList: [],
      contentlist: []
    };
  },
  components: {
    Tab,
    ClassifyContent
  },
  created() {
    this.$axios.get(api.classifyMenu).then(responseData => {
      this.tabList = responseData.data.list;
    });
    this.$axios.get(api.classifyContent).then(responseData => {
      this.contentlist = responseData.data.list;
    });
  }
};
</script>

<style lang="scss" scoped>
.classify {
  position: relative;
  height: 100%;
  .main {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 48px 0 54px 0;
  }
}
</style>
