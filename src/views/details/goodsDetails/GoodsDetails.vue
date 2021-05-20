<template>
  <div>
    <goods-details-nav-bar/>
    <goods-details-swiper :topImages="topImages"/>
    <goods-details-base-info :goodsInfo="details"/>
    <goods-details-shop-info :shop-info="shopInfo"/>
  </div>
</template>

<script>
  import {getGoodsDetails} from '@/network/GoodsDetails'

  import GoodsDetailsNavBar from './childrenViews/GoodsDetailsNavBar'
  import GoodsDetailsSwiper from './childrenViews/GoodsDetailsSwiper'
  import GoodsDetailsBaseInfo from './childrenViews/GoodsDetailsBaseInfo'
  import GoodsDetailsShopInfo from './childrenViews/GoodsDetailsShopInfo'

  export default {
    name: "GoodsDetails",
    components: {
      GoodsDetailsNavBar,
      GoodsDetailsSwiper,
      GoodsDetailsBaseInfo,
      GoodsDetailsShopInfo
    },
    data(){
      return {
        goodsId: null,
        topImages: [],
        details: {},
        shopInfo: {}
      }
    },
    created() {
      this.goodsId = this.$route.params.id
      this._getGoodsDetails()
    },
    methods: {
      /**
       * 获取商品详情数据
       */
      _getGoodsDetails: function () {
        const id = this.$route.params.id;
        getGoodsDetails(id).then(res => {
          this.topImages = res.itemInfo.topImages
          this.details = res.itemInfo
          this.shopInfo = res.itemInfo.shopInfo
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>

</style>
