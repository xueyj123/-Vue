import Vue from "vue";
import VueRouter from "vue-router";
import Store from '../store'
Vue.use(VueRouter);

import routes from "./routes";
import storage from '../service/storage'


if(storage.getInfo('token')){
    Store.commit("changeLogin",storage.getInfo('token'))
}

const router = new VueRouter({
    routes
});
router.beforeEach((to, from, next) => {
    if (to.meta.redirect&&!storage.getInfo('token')) {
        next({ name: "login",query:{name:to.name} });
    } else {
        next();
    }
});
export default router;
