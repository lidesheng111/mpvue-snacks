import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        banner: null,
        themes: null,
        products: null,
        details: {},
        cate: [],
        cart: [
            { id: 1, name: "芹菜 半斤", price: 0.01, imgUrl: "https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/product-vg@1.png", quantity: 1, selected: false},
            { id: 2, name: "芹菜 半斤", price: 0.01, imgUrl: "https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/product-vg@1.png", quantity: 1, selected: true},
            { id: 3, name: "芹菜 半斤", price: 0.01, imgUrl: "https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/product-vg@1.png", quantity: 1, selected: false}
        ],
    },

    mutations: {
        setBanner(state, banner) {
            state.banner = banner;
        },
        setThemes(state, themes) {
            state.themes = themes;
        },
        setProducts(state, products) {
            state.products = products;
        },
        setDetails(state, details) {
            state.details = details;
        },
        setCate(state, cate) {
            state.cate = cate;
        },
        toggle(state, index) {
            state.cart[index].selected = true;
        }
    },

    actions: {
        getBanner(context, banner) {
            context.commit('setBanner', banner)
        },
        getThemes(context, themes) {
            context.commit('setThemes', themes)
        },
        getProducts(context, products) {
            context.commit('setProducts', products);
        },
        getDetails(context, details) {
            context.commit('setDetails', details);
        },
        getCate(context, cate) {
            context.commit('setCate', cate);
        },
        toggleSelect(context, index) {
            context.commit('toggle', index);
        }
    }
})