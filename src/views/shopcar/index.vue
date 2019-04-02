<template>
  <div class="shopcar">
    <AppHeader item="购物车" :isBack="false" class="header"></AppHeader>
    <Refresh class="refresh" @load="getData">
      <ShopMain class="main" :list="shoplist">
        <ShopcarList></ShopcarList>
      </ShopMain>
    </Refresh>
    <div class="footer">
      <ul class="display-flex">
        <li class="display-flex flex-wrap flex-1 total">
          <p class="display-flex justify number">
            共 <span>{{ total.count }}</span
            >件 金额：
          </p>
          <p class="display-flex justify price">
            <span>{{ total.price }}</span
            >元
          </p>
        </li>
        <li class="display-flex flex-1 shopping">
          <router-link
            :to="{ name: 'classify' }"
            class="display-flex align-item justify"
            >继续购物</router-link
          >
        </li>
        <li class="display-flex align-item justify flex-1 settlement">
          去结算
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ShopMain from "./components/shopMain";
import ShopcarList from "./components/shopcarList";
import Vuex from "vuex";
import storage from "../../service/storage";
import api from "../../constant/api";

export default {
  name: "shopcar",
  data() {
    return {
      shoplist: []
    };
  },
  components: {
    ShopMain,
    ShopcarList
  },
  computed: {
    ...Vuex.mapGetters(["total"])
  },
  methods: {
    ...Vuex.mapMutations(["setShopcarList"]),
    getData(resolve) {
      this.$axios.get(api.shopcarList).then(responseData => {
        this.shoplist = responseData.data.list;
        resolve && resolve();
      });
    }
  },
  created() {
    if (storage.getInfo("shopcarList")) {
      this.setShopcarList(storage.getInfo("shopcarList"));
    }
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.shopcar {
  position: relative;
  height: 100%;
  .header {
    position: absolute;
    top: 0;
    height: 48px;
    width: 100%;
    z-index: 99;
    background: #f5f5f5;
  }
  .refresh {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-top: 48px;
    margin-bottom: 108px;
    overflow: auto;
  }
  .footer {
    position: absolute;
    bottom: 54px;
    width: 100%;
    height: 54px;
    background: #fff;
    ul {
      height: 100%;
      font-size: 18px;
      .total {
        p {
          align-items: flex-end;
          width: 100%;
          font-size: 16px;
          color: #999;
        }
        .price {
          align-items: center;
          span {
            font-size: 20px;
            color: #ff5722;
          }
        }
      }
      .shopping {
        a {
          height: 100%;
          width: 100%;
          background: #f4f4f4;
          color: black;
        }
      }
      .settlement {
        background-color: #ff6700;
        color: white;
      }
    }
  }
}
</style>
