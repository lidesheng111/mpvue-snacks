<template>
  <div class="themes-container">
    <img
      v-for="item in themes"
      :key="item._id"
      :src="item.topicImgUrl"
      alt="themes"
      mode="widthFix"
      @click="goToTheme(item.headImgUrl, item.id, item.name)"
    >
  </div>
</template>

<script>
import store from "../store/store.js";

export default {
  computed: {
    themes() {
      return store.state.themes;
    }
  },

  mounted() {
    const db = wx.cloud.database();
    db.collection("themes")
      .get()
      .then(res => {
        store.dispatch("getThemes", res.data);
      })
      .catch(err => console.log(err));
  },

  methods: {
    goToTheme(headImgUrl, id, name) {
      wx.navigateTo({ url: "../theme/main?headImgUrl=" + headImgUrl + "&id=" + id + "&name=" + name });
    }
  }
};
</script>

<style lang="scss" scoped>
.themes-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rpx;
  & img:last-child {
    grid-column: 1/3;
  }
}
</style>


