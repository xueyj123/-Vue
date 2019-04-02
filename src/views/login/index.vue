<template>
  <div class="login">
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
      >请输入正确的用户名</p>
      <p class="password"><input
          :type="!showPassword?'password':'text'"
          v-model.trim="user.password"
          placeholder="请输入您的密码"
        ><span
          v-if="isShowPasswordValue"
          @click="switchPasswordValue"
        >{{isShow}}</span></p>
      <p
        v-if="!validate.password"
        class="tips"
      >请输入正确的密码</p>

      <p
        class="button"
        @click="login"
      ><button>登录</button></p>
      <p class="register">
        <router-link :to="{name:'register'}"><span>立即注册|</span></router-link>
        <router-link :to="{name:'develop'}"><span>忘记密码</span></router-link>
      </p>
    </section>
  </div>
</template>

<script>
import Vuex from "vuex";
import reg from "../../service/regexp";

export default {
  name: "login",
  data() {
    return {
      title: "登录",
      showPassword: false,
      validate: {
        username: true,
        password: true
      },
      user: {
        name: "",
        password: ""
      }
    };
  },
  computed: {
    isShow() {
      return !this.showPassword ? "显示" : "隐藏";
    },
    isShowPasswordValue() {
      return this.user.password;
    }
  },
  watch: {
    "user.name"() {
      this.validate.username = reg(this.user.name, "username");
      // console.log(this.validate.username)
    },
    "user.password"() {
      this.validate.password = reg(this.user.password, "password");
      // console.log(this.validate.password)

    }
  },
  methods: {
    ...Vuex.mapMutations(["changeLogin"]),
    switchPasswordValue() {
      this.showPassword = !this.showPassword;
    },
    login() {
      if (!this.user.name) {
        this.validate.username = false;
      }
      if (!this.user.password) {
        this.validate.password = false;
      }
      if (this.validate.username && this.validate.password) {
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
.login {
  .app-header {
    position: relative;
    top: 0;
  }
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
    .register {
      margin-top: pxToVw(15);
      font-size: pxToVw(18);
      text-align: center;
      a {
        display: inline;
        &:nth-child(1) {
          color: #666;
        }
        &:nth-child(2) {
          color: #ff6700;
        }
      }
    }
  }
}
</style>
