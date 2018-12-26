<template>
    <div class="theme-container">
        <img :src="headImgUrl" alt="head image">
        <productList />
    </div>
</template>

<script>
import store from '../../store/store';
import ProductList from '../../components/ProductList';

export default {
    components: { ProductList},

    data() {
        return {
            headImgUrl: null,
        }
    },

    onLoad(options) {
        this.headImgUrl = options.headImgUrl;
        this.retrieveThemedProducts(Number(options.id));
        wx.setNavigationBarTitle({ title: options.name});
    },

    methods: {
        retrieveThemedProducts(id) {
            const db = wx.cloud.database();
            db.collection('products').where({ themeId: id }).get()
                .then( res => {
                    store.dispatch('getProducts', res.data);
                })
                .catch( err => console.log(err) );
        }
    }
}
</script>

<style lang="scss">
.theme-container {
    height: 480rpx;
    & img {
        margin-bottom: 25rpx;
    }
}
</style>


