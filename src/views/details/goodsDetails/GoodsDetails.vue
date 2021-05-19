<template>
  <div>
    <goods-details-nav-bar/>
    <goods-details-swiper :topImages="topImages"/>
    <goods-details-base-info :goodsInfo="details"></goods-details-base-info>
  </div>
</template>

<script>
  import {getGoodsDetails} from '@/network/GoodsDetails'

  import GoodsDetailsNavBar from './childrenViews/GoodsDetailsNavBar'
  import GoodsDetailsSwiper from './childrenViews/GoodsDetailsSwiper'
  import GoodsDetailsBaseInfo from './childrenViews/GoodsDetailsBaseInfo'

  export default {
    name: "GoodsDetails",
    components: {
      GoodsDetailsNavBar,
      GoodsDetailsSwiper,
      GoodsDetailsBaseInfo
    },
    data(){
      return {
        goodsId: null,
        topImages: [],
        details: {}
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
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>

</style>
