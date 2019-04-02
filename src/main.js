import Vue from "vue";
import App from "./app";

import store from "./store";
import router from "./router";

import axios from "./service/axios";
Vue.prototype.$axios = axios;
import VueLazyload from 'vue-lazyload'
 
Vue.use(VueLazyload)


import "./components";
import "./directives";
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
