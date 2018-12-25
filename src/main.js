import Vue from 'vue';
import App from './app.vue';

Vue.config.productionTip = false;

wx.cloud.init({
    traceUser: true,
  })

App.mpType = 'app';

const app = new Vue(App);
app.$mount();