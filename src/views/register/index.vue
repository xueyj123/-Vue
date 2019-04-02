<template>
  <div class="register">
    <AppHeader
      :item='title'
      class="app-header"
      :isSearch="false"
    ></AppHeader>
    <section class="main">
      <p class="text"><input
          type="text"
          v-model.trim="user.name"
          placeholder="请输入您的用户名"
        >
      </p>
      <p
        v-if="!validate.username"
        class="tips"
      >4到16位（字母，数字，下划线，减号）</p>
      <p class="password"><input
          type="text"
          v-model.trim="user.password"
          placeholder="请输入您的密码"
        ></p>
      <p
        v-if="!validate.password"
        class="tips"
      >最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符</p>
      <p class="password"><input
          type="text"
          v-model.trim="user.repwd"
          placeholder="请再次输入您的密码"
        ></p>
      <p
        v-if="!validate.repwd"
        class="tips"
      >两次输入的密码不一致！</p>
      <p
        class="button"
        @click="register"
      ><button>注册</button></p>

    </section>
  </div>
</template>

<script>
import Vuex from "vuex";
import reg from "../../service/regexp";

export default {
  name: "register",
  data() {
    return {
      title: "注册",
      validate: {
        username: true,
        password: true,
        repwd: true
      },
      user: {
        name: "",
        password: "",
        repwd: ""
      }
    };
  },
  watch: {
    "user.name"() {
      this.validate.username = reg(this.user.name, "username");
      // console.log(this.validate.username)
    },
    "user.password"() {
      this.validate.password = reg(this.user.password, "password");
      // console.log(this.validate.password)
    },
    "user.repwd"() {
      if (this.user.password != this.user.repwd) {
        this.validate.repwd = false;
      } else {
        this.validate.repwd = true;
      }
    }
  },
  methods: {
    ...Vuex.mapMutations(["changeLogin"]),

    register() {
      if (!this.user.name) {
        this.validate.username = false;
      }
      if (!this.user.password) {
        this.validate.password = false;
      }
      if (!this.user.repwd) {
        this.validate.repwd = false;
      }
      if (
        this.validate.username &&
        this.validate.password &&
        this.validate.repwd
      ) {
        this.changeLogin(this.user.name);
        let name = this.$route.query.name
          ? { name: this.$route.query.name }
          : { name: "home" };
        this.$router.replace(name);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.register {
  .main {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-top: 48px;
    padding: pxToVw(80) pxToVw(50) 0 pxToVw(50);
    background: #fff;
    .text,
    .password {
      padding-top: pxToVw(15);
      border-bottom: 1px solid black;
      input {
        padding: pxToVw(8);
        font-size: pxToVw(18);
      }
    }
    .button {
      margin-top: pxToVw(50);
      button {
        width: 100%;
        line-height: pxToVw(33);
        padding: pxToVw(10) 0;
        border-radius: 5px;
        font-size: pxToVw(20);
        background: #ff6700;
        color: #fff;
      }
    }
  }
}
</style>
