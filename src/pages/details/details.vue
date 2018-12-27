<template>
    <div class="details-container">
        <img class="cart-top" src="/static/images/icon/cart@top.png" mode="widthFix">
        <img class="main-img" :src="details.imgUrl" alt="product" mode="aspectFit">
        <div class="select-section">
            <picker :value="index" :range="array" @change="onChangeIndex">
                <p>数量</p>
                <p class="quantity">{{array[index]}}</p>
                <img class="arrow" src="/static/images/icon/arrow@down.png" mode="widthFix">
            </picker>
            <p class="separator">......</p>
            <div class="addToCart">
                <p>加入购物车</p>
                <img class="small-cart" src="/static/images/icon/cart.png" mode="widthFix">
            </div>
        </div>
        <div class="basic-info">
            <p>{{details.stock > 0 ? '有货' : '补货中'}}</p>
            <p>{{details.name}}</p>
            <p>￥{{details.price}}</p>
        </div>
        <div class="empty"></div>
        <div class="slide-title">
            <p @click="i = 0, h = imgsLen">商品详情</p>
            <p @click="i = 1, h = 1">产品参数</p>
            <p @click="i = 2, h = 1">售后保障</p>
        </div>
        <swiper class="slide-content" :current="i"  :style="{height: h * 400 + 'rpx'}">
            <swiper-item><img  v-for="item in details.detailsImg" :key="item" :src="item" mode="widthFix"></swiper-item>
            <swiper-item>
                <p class="props-model" v-for="(item, key) in details.detailsProps" :key="item">
                    <span class="key">{{key}}</span><span class="item">{{item}}</span>
                </p>
            </swiper-item>
            <swiper-item>7天无理由退货</swiper-item>
        </swiper>
    </div>
</template>

<script>
import store from '../../store/store';

export default {
    // i: 用于控制swiper的当前index; imgLen: 商品图片的张数; h：通过对其赋值，来控制swiper的高度
    data() {
        return {
            _id: null,
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            index: 0,
            i: 0,
            imgsLen: 0,
            h: 0,
        }
    },   
    onLoad(options) {
        const db = wx.cloud.database();
            db.collection('products').where({_id: options._id}).get()
                .then( res => {
                    console.log(res.data[0]);
                    this.imgsLen = this.h = res.data[0].detailsImg.length;
                    store.dispatch('getDetails', res.data[0]);
                })
                .catch( err => console.log(err) );
    },

    computed: {
        details() {
            return store.state.details;
        },
    },

    methods: {
        onChangeIndex(e) {
            console.log(e)
            this.index = e.mp.detail.value;
        },
    }
}
</script>

<style lang="scss">
.cart-top {
    width: 80rpx;
    position: fixed;
    right: 30rpx;
    top: 20rpx;
}
.main-img {
    height: 600rpx;
    transform: scale(1.3);
}
.select-section {
    background-color: #AB956D;
    height: 100rpx;
    margin: 0 40rpx;
    color: white;
    border-radius: 100rpx;
    font-size: 28rpx;
    justify-content: space-around;
    align-items: center;
    display: flex;
    picker {
        // display: flex;
        width: 660rpx;
        align-items: center;
        height: 100rpx;
        .quantity {
            // display: inline-block;
            line-height: 100rpx;
        }
        .arrow {
            width: 60rpx;
        }
    }
    .separator {
        width: 10rpx;
        writing-mode: vertical-lr;
    }
    .addToCart {
        width: 660rpx;
        display: flex;
        .small-cart {
            width: 45rpx;
        }
    }
}
.basic-info {
    margin-top: 30rpx;
    text-align: center;
    line-height: 70rpx;
    & p:first-child {
        font-size: 24rpx;
    }
    & p:last-child {
        font-size: 28rpx;
    }
}
.empty {
    height: 30rpx;
    background-color: #F5F6F5;
}
.slide-title {
    border-bottom: 1rpx solid rgba(0, 0, 0, 0.5);
    opacity: 0.8;
    display: flex;
    justify-content: space-around;
    font-size: 30rpx;
    height: 90rpx;
    line-height: 90rpx;
    & p {
        width: 250rpx;
        text-align: center
    }
    & p:hover {
        color: #AB956D;
        border-bottom: 4rpx solid #AB956D;
        opacity: 1;
    }
}
swiper {
    font-size: 24rpx;
    letter-spacing: 4rpx;
    & img {
        display: block;
    }
    .props-model {
        margin: 30rpx 50rpx 20rpx ;
    }
    .key {
        color: #888888;
        margin-right: 40rpx;
        display: inline-block;
        width: 100rpx;
    }
    .item {
        text-align: left;
    }
    & swiper-item:last-child {
        margin-top: 30rpx;
        text-align: center;
    }
}
</style>


