<template>
  <div class="goods-details">
    <goods-details-nav-bar class="nav-bar"/>
    <better-scroll class="content" ref="scroll" :probeType="3" :pullUpload="true">
      <goods-details-swiper :topImages="topImages"/>
      <goods-details-base-info :goodsInfo="details"/>
      <goods-details-shop-info :shop-info="shopInfo"/>
      <goods-details-info :detail-info="detailInfo" @img-load="_imgLoad"/>
      <goods-details-params :params-info="paramsInfo"/>
      <goods-details-comment-info :comment="comment"/>
      <goods-details-recommend-info :recommend-goods="recommendGoods"/>
    </better-scroll>
  </div>
</template>

<script>
  import {getGoodsDetails, getRecommend} from '@/network/GoodsDetails'
  import {imgLoadScrollRefreshListenerMixin} from '@/common/mixin'

  import BetterScroll from '@/components/common/scroll/BetterScroll'

  import GoodsDetailsNavBar from './childrenViews/GoodsDetailsNavBar'
  import GoodsDetailsSwiper from './childrenViews/GoodsDetailsSwiper'
  import GoodsDetailsBaseInfo from './childrenViews/GoodsDetailsBaseInfo'
  import GoodsDetailsShopInfo from './childrenViews/GoodsDetailsShopInfo'
  import GoodsDetailsInfo from './childrenViews/GoodsDetailsInfo'
  import GoodsDetailsParams from './childrenViews/GoodsDetailsParams'
  import GoodsDetailsCommentInfo from './childrenViews/GoodsDetailsCommentInfo'
  import GoodsDetailsRecommendInfo from './childrenViews/GoodsDetailsRecommendInfo'

  export default {
    name: "GoodsDetails",
    components: {
      GoodsDetailsNavBar,
      GoodsDetailsSwiper,
      GoodsDetailsBaseInfo,
      GoodsDetailsShopInfo,
      GoodsDetailsInfo,
      GoodsDetailsParams,
      GoodsDetailsCommentInfo,
      GoodsDetailsRecommendInfo,

      BetterScroll
    },
    data(){
      return {
        goodsId: null,
        topImages: [],
        details: {},
        shopInfo: {},
        detailInfo: {},
        paramsInfo: {},
        comment: {},
        recommendGoods: [],
      }
    },
    mixins: [imgLoadScrollRefreshListenerMixin],
    created() {
      this.goodsId = this.$route.params.id
      this._getGoodsDetails()
      this._getRecommend()
    },
    mounted() {
    },
    destroyed() {
      /* 移除自定义事件监听器。只会移除这个回调的监听器。*/
      this.$bus.$off('goodsImgLoad', this.imgLoadScrollRefreshListener)
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
          this.detailInfo = res.itemInfo.detailInfo;
          this.paramsInfo = res.itemInfo.itemParams;
          this.comment = res.itemInfo.comment;
        })
      },

      /**
       * 获取推荐信息
       */
      _getRecommend: function () {
        getRecommend().then(res => {
          this.recommendGoods = res;
        })
      },
      /* 商品详情图片加载完成调用，刷新scroll */
      _imgLoad() {
        this.$refs.scroll.refresh()
      },
    }
  }
</script>

<style scoped>
  .goods-details {
    height: 100vh;
    position: relative;
    z-index: 8;
    background-color: #fff;
  }

  .nav-bar {
    position: relative;
    z-index: 9;
    background-color: white;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 60px;
  }
</style>
