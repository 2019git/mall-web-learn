<!-- 商品详情推荐信息 -->
<template>
  <div class="recommend-info">
    <div class="title">为你推荐</div>
    <goods-list :goodsList="recommendGoods"/>
  </div>
</template>

<script>

  import GoodsList from '@/components/content/goods/GoodsList'

  export default {
    name: "GoodsDetailsRecommendInfo",
    components: {
      GoodsList
    },
    props: {
      recommendGoods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend-info {
    padding: 15px 0;
  }

  .title {
    margin: 0px 0 5px 15px;
    font-size: 15px;
    color: black;
  }
</style>
