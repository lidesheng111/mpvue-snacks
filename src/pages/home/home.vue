<template>
  <div>
    <Slide/>
    <div class="section-title">精选主题</div>
    <themes/>
    <div class="section-title">最近新品</div>
    <ProductList/>
  </div>
</template>

<script>
import store from "../../store/store";
import Slide from "../../components/slide";
import Themes from "../../components/Themes";
import ProductList from "../../components/ProductList";

export default {
  components: { Slide, Themes, ProductList },

  mounted() {
    const db = wx.cloud.database();
    db.collection("products")
      .limit(15)
      .get()
      .then(res => {
        store.dispatch("getProducts", res.data);
      })
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss">
.section-title {
  text-align: center;
  color: #ab956d;
  font-size: 36rpx;
  height: 100rpx;
  line-height: 100rpx;
}
</style>


