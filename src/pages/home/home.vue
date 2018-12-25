<template>
    <div>
        <swiper>
            <swiper-item v-for="item in banner" :key="item._id">
                <img :src="item.itemUrl" alt="swiper">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import store from '../../store/store.js';

export default {
    data() {
        return {
        }
    },

    computed: {
        banner() {
            return store.state.banner;
        },
    },

    mounted() {
        const db = wx.cloud.database();
        db.collection('banner').get()
            .then( res => {
                console.log(res);
                store.dispatch('getBanner', res.data);
            })
            .catch( err => console.log(err) );
    }
}
</script>

<style>

</style>


