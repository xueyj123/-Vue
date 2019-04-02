export default {
    setInfo(key, value) {
        if (!key) return;
        if (typeof value !== "string") {
            value = JSON.stringify(value);
        }
        window.localStorage.setItem(key, value);
    },
    getInfo(key) {
        if (!key) return;
        return window.localStorage.getItem(key);
    },
    removeInfo(key) {
        if (!key) return;
        window.localStorage.removeItem(key);
    }
};
