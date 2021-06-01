<template>
  <div class="cart-goods-list">
    <better-scroll class="content" ref="scroll">
      <div>
        <cart-goods-list-item v-for="(item, index) in goodsList" :key="index" :product="item"/>
      </div>
    </better-scroll>
  </div>
</template>

<script>
  import CartGoodsListItem from './CartGoodsListItem'

  import BetterScroll from '@/components/common/scroll/BetterScroll'

  export default {
    name: "CartGoodsList",
    components: {
      CartGoodsListItem,

      BetterScroll
    },
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    activated() {
      console.log("1111");
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>

  .cart-goods-list {
    height: calc(100% - 44px - 49px);
    background-color: white;
  }

  .content {
    height: 100%;
    overflow: hidden;
  }
</style>
