import isExist from "../util/isExist";
import storage from "../service/storage";

export default {
    changeLogin(state, token) {
        storage.setInfo("token", token);
        state.isLogin = token;
    },
    cancelLogin(state) {
        storage.removeInfo("token");
        state.isLogin = null;
    },
    addItem(state, info) {
        let obj = isExist(info.id, state.shopcarList);
        if (obj.isExist) {
            state.shopcarList[obj.index].count++;
            if (state.shopcarList[obj.index].count >= info.max) {
                state.shopcarList[obj.index].count = info.max;
            }
        } else {
            state.shopcarList.push(info);
        }
        storage.setInfo("shopcarList", state.shopcarList);
    },
    decreaseItem(state, info) {
        let obj = isExist(info.id, state.shopcarList);
        state.shopcarList[obj.index].count--;
        if (state.shopcarList[obj.index].count <= 1) {
            state.shopcarList[obj.index].count = 1;
        }
        storage.setInfo("shopcarList", state.shopcarList);
    },
    increaseItem(state, info) {
        let obj = isExist(info.id, state.shopcarList);
        state.shopcarList[obj.index].count++;
        if (state.shopcarList[obj.index].count >= info.max) {
            state.shopcarList[obj.index].count = info.max;
        }
        storage.setInfo("shopcarList", state.shopcarList);
    },
    delItem(state, index) {
        state.shopcarList.splice(index, 1);
        storage.setInfo("shopcarList", state.shopcarList);
    },
    setShopcarList(state, shopcarList) {
        state.shopcarList = JSON.parse(shopcarList);
    }
};
