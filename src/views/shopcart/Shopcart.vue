<template>
  <div class="shop-cart">
    <nav-bar class="nav-bar-shopcart">
      <div slot="center">购物车({{_getCartGoodsCount}})</div>
    </nav-bar>
    <better-scroll class="content">
      <cart-goods-list :goods-list="_getCartGoodsList"></cart-goods-list>
    </better-scroll>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import BetterScroll from '@/components/common/scroll/BetterScroll'

  import CartGoodsList from './childrenViews/CartGoodsList'

  export default {
    name: "Shopcart",
    components: {
      NavBar,
      BetterScroll,

      CartGoodsList
    },
    computed: {
      _getCartGoodsList() {
        return this.$store.getters.cartList
      },
      _getCartGoodsCount() {
        return this.$store.getters.cartListCount
      }
    }
  }
</script>

<style scoped>
  .shop-cart {
    height: 100%;
  }

  .nav-bar-shopcart {
    background-color: var(--color-tint);
    color: white;
  }

  .content {
    height: calc(100% - 44px - 49px);
    background-color: white;
  }
</style>
