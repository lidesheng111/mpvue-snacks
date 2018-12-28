<template>
  <div class="cate-container">

    <div class="sideBar">
      <p v-for="item0 in sideBar"
        :key="item0"
        @click="i = item0.index"
        :class="i == item0.index ? 'active' : ''">{{item0.title}}</p>
    </div>

    <swiper vertical="true" :current="i" @change="onGetCurrent" circular="true">
      <swiper-item v-for="item1 in cate" :key="item1">

        <img :src="item1.topicImgUrl" mode="widthFix">

        <div class="divide">
          <br class="line"> <p class="text">{{item1.name}}</p> <br class="line">
        </div>

        <div class="cated-prods">
          <div class="model" v-for="(item2, index2) in item1.products" :key="index2" @click="toDetails(item2._id)">
            <img :src="item2.imgUrl" mode="widthFix">
            <p>{{item2.name}}</p>
          </div>
        </div>

      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import store from "../../store/store";

export default {
  data: {
    i: 0,
    sideBar: [
        { index: 0, title: '果味' },
        { index: 1, title: '蔬菜' },
        { index: 2, title: '炒货' },
        { index: 3, title: '点心' },
        { index: 4, title: '粗茶' },
        { index: 5, title: '淡饭' },
    ],
  },

  mounted() {
    //  1.获取各品类数据
    const db = wx.cloud.database();
    db.collection("categories").get()
      .then(res => {
        return res.data;
      })
      .then(cate => {
        //  2.将数据循环
        const cate_ = [];
        cate.forEach(item => {
            //  3.根据cateId查询出对应的商品
          db.collection("products").where({ cateId: Number(item.cateId) }).get()
            .then(res => {
                // 4.把products插入到对应的品类里
              item.products = res.data;
              return item;
            })
            .then(item => {
                // 5.把品类合在一起
              cate_.push(item);
            });
        });
        store.dispatch("getCate", cate_);
      })
      .catch(err => console.log(err));
  },

  computed: {
    cate() {
      return store.state.cate.sort(function(a, b) {
          return (a.index - b.index);
      });
    }
  },

  methods: {
    onGetCurrent(e) {
      this.i = e.mp.detail.current;
    },
    toDetails(_id) {
      wx.navigateTo({ url: "../details/main?_id=" + _id });
    }
  }
};
</script>

<style lang="scss" scoped>
.cate-container {
  height: 100%;
  display: flex;
  font-size: 28rpx;
}

.sideBar {
  height: 100%;
  width: 150rpx;
  text-align: center;
  line-height: 80rpx;
  border-right: 1rpx solid #999;
  & p:first-child {
    padding-top: 20rpx;
  }
  .active {
    color: #ab956d;
  }
}

swiper {
  width: 600rpx;
  height: 100%;
  swiper-item {
    overflow: scroll;
  }
  img {
    margin: 40rpx;
    width: 520rpx;
  }
  .divide {
    display: flex;
    align-items: center;
    justify-content: center;
    .line {
      height: 0;
      border-top: 1rpx solid #666;
      width: 70rpx;
    }
    .text {
      color: #ab956d;
      margin: 0 20rpx;
    }
  }
  .cated-prods {
    margin: 0 40rpx;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .model {
      width: 160rpx;
      font-size: 22rpx;
      text-align: center;
      img {
        margin: 0 auto;
        width:100%;
      }
    }
    &:last-child {
        margin-bottom: 50rpx;
    }
  }
}
</style>


