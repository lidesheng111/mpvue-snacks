<template>
    <div class="cart-container">
        <checkbox-group class="model" v-for="(item, index) in cart" :key="item">
            <checkbox color="red" :checked="item.selected" @change="onToggleSelect(index)" />

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
            <checkbox-group :checked="allSelected" @change="onSelectAll">
                <checkbox />全选{{allSelected}}
            </checkbox-group>
        </div>
    </div>
</template>

<script>
import store from '../../store/store';
export default {
    data() {
        return {
            // allSelected: false,

        }
    },

    computed: {
        cart() {
            return store.state.cart;
        },
        allSelected() {
            return store.state.cart.filter( item => item.selected == false).length;
        }
    },

    // watch: {
    //     cart: function() {
    //         return this.cart.filter( item => item.selected == false ).length 
    //     }
    // },

    methods: {
        onToggleSelect(index) {
            const length = e.mp.detail.value.length;
            store.dispatch('toggleSelect', index);
        },
        onSelectAll(e) {
            const length = e.mp.detail.value.length;
            if (length == 1) {
                this.cart.filter( item => item.selected = true);
            } else {
                this.cart.filter( item => item.selected = false);
            }
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

.footer {
    height: 100rpx;
    width: 100%;
    background-color: #AB956D;
    position: fixed;
    bottom: 0;
}
</style>


