<template>
  <div>
    <goods-details-nav-bar></goods-details-nav-bar>
  </div>
</template>

<script>
  import {getGoodsDetails} from '@/network/GoodsDetails'

  import GoodsDetailsNavBar from './childrenViews/GoodsDetailsNavBar'

  export default {
    name: "GoodsDetails",
    components: {
      GoodsDetailsNavBar
    },
    data(){
      return {
        goodsId: null
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
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>

</style>
