<template>
  <div id="home">
    <nav-bar class="nav-bar-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import TabControl from '@/components/content/tabControl/TabControl'
  import HomeSwiper from './childrenviews/HomeSwiper'
  import RecommendView from './childrenviews/RecommendView'
  import FeatureView from './childrenviews/FeatureView'

  import {getHomeMultidata} from '@/network/home.js'

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,

      NavBar,
      TabControl
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
  #home {
    padding-top: 44px;
  }

  .nav-bar-home {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
  }

  .tab-control {
    position: sticky;
    top: 40px;
    z-index: 9;
  }
</style>
