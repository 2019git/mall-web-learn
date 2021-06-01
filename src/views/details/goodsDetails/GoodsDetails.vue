<template>
  <div class="goods-details">
    <goods-details-nav-bar class="nav-bar" @jump-position="_jumpPosition" ref="detailsNavBar"/>
    <better-scroll class="content" ref="scroll" :probeType="3" :pullUpload="true"
                   @sendScrollPosition="_updateNavBarStatus">
      <goods-details-swiper :topImages="topImages"/>
      <goods-details-base-info :goodsInfo="details"/>
      <goods-details-shop-info :shop-info="shopInfo"/>
      <goods-details-info :detail-info="detailInfo" @img-load="_imgLoad"/>
      <goods-details-params :params-info="paramsInfo" ref="detailsParams"/>
      <goods-details-comment-info :comment="comment" ref="detailsComment"/>
      <goods-details-recommend-info :recommend-goods="recommendGoods" ref="detailsRecommendInfo"/>
    </better-scroll>
    <back-top v-show="backTopShow" @click.native="_backTopClick"/>
    <goods-details-bottom-bar @add-shop-cart="_addShopCart"/>
  </div>
</template>

<script>
  import {getGoodsDetails, getRecommend} from '@/network/GoodsDetails'
  import {imgLoadScrollRefreshListenerMixin} from '@/common/mixin'
  import {debounce} from '@/common/utils'

  import BetterScroll from '@/components/common/scroll/BetterScroll'
  import BackTop from '@/components/content/backTop/BackTop'

  import GoodsDetailsNavBar from './childrenViews/GoodsDetailsNavBar'
  import GoodsDetailsSwiper from './childrenViews/GoodsDetailsSwiper'
  import GoodsDetailsBaseInfo from './childrenViews/GoodsDetailsBaseInfo'
  import GoodsDetailsShopInfo from './childrenViews/GoodsDetailsShopInfo'
  import GoodsDetailsInfo from './childrenViews/GoodsDetailsInfo'
  import GoodsDetailsParams from './childrenViews/GoodsDetailsParams'
  import GoodsDetailsCommentInfo from './childrenViews/GoodsDetailsCommentInfo'
  import GoodsDetailsRecommendInfo from './childrenViews/GoodsDetailsRecommendInfo'
  import GoodsDetailsBottomBar from './childrenViews/GoodsDetailsBottomBar'

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
      GoodsDetailsBottomBar,

      BetterScroll,
      BackTop
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
        detailsViewsY: [],
        backTopShow: false
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
        this.$refs.scroll.refresh();

        //加载组件位置
        this.detailsViewsY.push(0)
        this.detailsViewsY.push(this.$refs.detailsParams.$el.offsetTop)
        this.detailsViewsY.push(this.$refs.detailsComment.$el.offsetTop)
        this.detailsViewsY.push(this.$refs.detailsRecommendInfo.$el.offsetTop)
      },

      /* 位置跳转 */
      _jumpPosition(index) {
        debounce(() => this.$refs.scroll.scroll.scrollTo(0, -this.detailsViewsY[index], 300), 100)()
      },

      /* 修改NavBar状态、顶部返回按钮显示  */
      _updateNavBarStatus(position) {
        const y = -position.y;
        let index = 0;
        if (y < this.detailsViewsY[1]) {
          index = 0
        } else if (y >= this.detailsViewsY[1] && y < this.detailsViewsY[2]) {
          index = 1
        } else if (y >= this.detailsViewsY[2] && y < this.detailsViewsY[3]) {
          index = 2
        } else {
          index = 3
        }
        if (this.$refs.detailsNavBar.currentIndex !== index) {
          this.$refs.detailsNavBar.currentIndex = index;
        }

        /* 是否显示顶部返回按钮 */
        this.backTopShow = y > 800 ? true : false
      },

      /* 返回顶部 */
      _backTopClick() {
        this.$refs.scroll.backTop(0, 0, 300)
      },

      /* 加入购物车 */
      _addShopCart() {
        const obj = {};
        obj.id = this.goodsId;
        obj.img = this.topImages[0];
        obj.title = this.details.title;
        obj.price = this.details.realPrice;
        this.$store.commit('addCart', obj)
      }
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
