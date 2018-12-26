<template>
    <div class="details-container">
        <img class="cart-top" src="/static/images/icon/cart@top.png" mode="widthFix">
        <img class="main-img" :src="details.imgUrl" alt="product" mode="aspectFit">
        <div class="select-section">
            <p>数量</p>
            <picker :value="index" :range="array" @change="onNewIndex"><div class="picker">{{array[index]}}</div></picker>
            <img class="arrow" src="/static/images/icon/arrow@down.png" mode="widthFix">
            <p class="separator">......</p>
            <p>加入购物车</p>
            <img class="small-cart" src="/static/images/icon/cart.png" mode="widthFix">
        </div>
    </div>
</template>

<script>
import store from '../../store/store';

export default {
    data() {
        return {
            _id: null,
            array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            index: 0,
        }
    },   
    onLoad(options) {
        this._id = options._id;
    },
    created() {
        const db = wx.cloud.database();
            db.collection('products').where({_id: this._id}).get()
                .then( res => {
                    console.log(res.data[0]);
                    store.dispatch('getDetails', res.data[0]);
                })
                .catch( err => console.log(err) );
    },

    computed: {
        details() {
            return store.state.details;
        }
    },

    methods: {
        onNewIndex(e) {
            this.index = e.mp.detail.value;
        }
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
}
.select-section {
    background-color: #AB956D;
    height: 100rpx;
    display: flex;
    .arrow {
        width: 60rpx;
    }
    .separator {
        writing-mode: vertical-lr;
    }
    .small-cart {
        width: 60rpx;
    }
}
</style>


