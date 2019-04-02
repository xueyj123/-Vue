export default {
    total(state) {
        const obj = {
            count: 0,
            price: 0
        };
        if (state.shopcarList) {
            state.shopcarList.map(item => {
                if (item.checked) {
                    obj.count += item.count;
                    obj.price += item.count * item.money;
                }
            });
        }
        console.log(state.shopcarList);
        return obj;
    }
};
