<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item._id">
      <img :src="item.itemUrl" alt="swiper" mode="widthFix">
    </swiper-item>
  </swiper>
</template>

<script>
import store from '../store/store.js';

export default {
  computed: {
    banner() {
      return store.state.banner;
    }
  },

  mounted() {
    const db = wx.cloud.database();
    db.collection("banner")
      .get()
      .then(res => {
        store.dispatch("getBanner", res.data);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss" scoped>
swiper {
    height: 400rpx;
}
</style>


