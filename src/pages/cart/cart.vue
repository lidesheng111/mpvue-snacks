<template>
    <div class="cart-container">
        <checkbox-group class="model" v-for="item in cart" :key="item">
            <checkbox color="red" />

            <img :src="item.imgUrl" mode="widthFix">

            <div class="middle">
                <p class="name">{{item.name}}</p>
                <div>-</div>
                <div class="quantity">{{item.quantity}}</div>
                <div class="plus">+</div>
            </div>

            <div class="right">
                <div class="price">￥{{item.price}}</div>
                <div class="delete">&times;</div>
            </div>
        </checkbox-group>

        <div class="footer">
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cart: [
                { name: "芹菜 半斤", price: 0.01, imgUrl: "https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/product-vg@1.png", quantity: 1},
                { name: "芹菜 半斤", price: 0.01, imgUrl: "https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/product-vg@1.png", quantity: 1},
                { name: "芹菜 半斤", price: 0.01, imgUrl: "https://zeg-1256857292.cos.ap-chengdu.myqcloud.com/product-vg@1.png", quantity: 1}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.model {
    display: flex;
    font-size: 28rpx;
    align-items: center;
    border-bottom: 1rpx solid #aaa;
}
checkbox {
    width: 60rpx;
    margin-left: 26rpx;
}
img, .middle, .right {
    width: 226rpx;
}
img {
    margin: 23rpx 10rpx;
    width: 180rpx;
    background-color: #f5f6f5;
}
.middle {
    height: 226rpx;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    .name {
        grid-column: 1/4;
    }
    .quantity {
        font-size: 22rpx;
    }
    .plus {
        font-size: 44rpx;
    }
}
.right {
    height: 226rpx;
    text-align: right;
    & div {
        height: 68rpx;
        margin: 30rpx 40rpx;
    }
    .delete {
        line-height: 68rpx;
        font-size: 40rpx;
    }
}
</style>


