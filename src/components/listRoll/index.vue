<template>
  <div class="listroll">
    <ul
      ref='last'
      :style="{top,transitionDuration}"
    >
      <li
        v-for="item of newsList"
        :key="item.id"
      >{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "listRoll",
  props: {
    newsList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      transitionDuration: ".5s",
      index: 0,
      timing:null,
    };
  },
  computed: {
    top: {
      get() {
        return `-${this.index * 10}vw`;
      },
      set(value) {
        `-${value * 10}vw`;
      }
    }
  },
  watch: {
    newsList() {
     
      this.$nextTick(() => {
         if (!this.timing) {
         let lastli = this.$refs.last.children[0].cloneNode(true);
        this.$refs.last.appendChild(lastli);
        this.timing=setInterval(() => {
          console.log(this.$refs.last)
          this.index++;
          if (this.index === this.newsList.length) {
            setTimeout(() => {
              this.transitionDuration = "0s";
              this.top = 0;
              this.index = 0;
            }, 500);
          }
          this.transitionDuration = ".5s";
        }, 1500);
      }
       

       
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.listroll {
  position: relative;
  height: 10vw;
  overflow: hidden;
  ul {
    position: absolute;
    width: 100%;
    li {
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 10vw;
      font-size: pxToVw(12);
      overflow: hidden;
      padding: 0 pxToVw(12) 0 pxToVw(12);
    }
  }
}
</style>
