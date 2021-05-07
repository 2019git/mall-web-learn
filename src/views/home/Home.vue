<template>
  <div id="home">
    <nav-bar class="nav-bar-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tab-control-click="tabControlClick"></tab-control>
    <goods-list :goodsList = "showGoods"></goods-list>
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
  import GoodsList from '@/components/content/goods/GoodsList'

  import HomeSwiper from './childrenviews/HomeSwiper'
  import RecommendView from './childrenviews/RecommendView'
  import FeatureView from './childrenviews/FeatureView'

  import {getHomeMultidata, getHomeGoods} from '@/network/home.js'

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,

      NavBar,
      TabControl,
      GoodsList
    },
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentGoodsType: 'pop'
      }
    },
    created() {
      this.getHomeMultidata()
      this.getHomeGoods( 'pop')
      this.getHomeGoods( 'new')
      this.getHomeGoods( 'sell')
    },
    computed:{
      showGoods(){
        return this.goods[this.currentGoodsType].list
      }
    },
    methods: {
      tabControlClick(index){
        switch (index) {
          case 0:
            this.currentGoodsType = 'pop'
            break
          case 1:
            this.currentGoodsType = 'new'
            break
          case 2:
            this.currentGoodsType = 'sell'
            break
        }
      },
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res =>{
           if (this.goods[type].list.length == 0) {
             /*向数组中添加数组*/
             this.goods[type].list.push(...res)
           }
        })
      }
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
    /*设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面*/
    z-index: 100;
  }

  .tab-control {
    position: sticky;
    top: 40px;
    z-index: 9;
  }
</style>
