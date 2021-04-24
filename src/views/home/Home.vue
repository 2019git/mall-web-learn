<template>
  <div>
    <nav-bar class="nav-bar-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import HomeSwiper from './childrenviews/HomeSwiper'
  import RecommendView from './childrenviews/RecommendView'

  import {getHomeMultidata} from '@/network/home.js'

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      NavBar
    },
    data() {
      return {
        banner: [],
        recommend: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .nav-bar-home {
    background-color: var(--color-tint);
    color: white;
  }
</style>
