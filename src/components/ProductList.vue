<template>
  <div class="model-container">
    <div class="model" v-for="item in products" :key="item._id">
      <img :src="item.imgUrl" alt="products" mode="aspectFit" @click="toDetails(item._id)">
      <div>{{item.name}}</div>
      <div>￥{{item.price}}</div>
    </div>
  </div>
</template>

<script>
import store from "../store/store";

export default {
  computed: {
    products() {
      return store.state.products;
    }
  },

  methods: {
    toDetails(_id) {
      wx.navigateTo({ url: "../details/main?_id=" + _id });
    }
  }
};
</script>

<style lang="scss" scoped>
.model-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16rpx;
  grid-row-gap: 10rpx;
  margin: 0 20rpx;
}
.model {
  width: 347rpx;
  height: 347rpx;
  background-color: #f5f6f5;
  border-radius: 10rpx;
  text-align: center;
  font-size: 30rpx;
  padding-bottom: 10rpx;
  & img {
    height: 75%;
    transform: scale(1.3);
  }
  & div:last-child {
    font-size: 24rpx;
    margin-top: 5rpx;
  }
}
</style>
