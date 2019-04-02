import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import mutations from "./mutations";
import getters from "./getters";
const store = new Vuex.Store({
    state: {
        isLogin: null,
        shopcarList: []
    },
    mutations,
    getters
});
export default store;
