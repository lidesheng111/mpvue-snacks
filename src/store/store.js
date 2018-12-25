import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        banner: null,
    },

    mutations: {
        setBanner(state, banner) {
            state.banner = banner;
        },
    },

    actions: {
        getBanner(context, banner) {
            context.commit('setBanner', banner)
        },
    }
})