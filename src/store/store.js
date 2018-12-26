import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        banner: null,
        themes: null,
        products: null,
        details: null,
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
        }
    }
})