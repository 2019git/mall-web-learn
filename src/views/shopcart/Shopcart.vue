<template>
  <div class="shop-cart">
    <nav-bar class="nav-bar-shopcart">
      <div slot="center">购物车({{_getCartGoodsCount}})</div>
    </nav-bar>
    <cart-goods-list :goods-list="_getCartGoodsList"></cart-goods-list>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'

  import CartGoodsList from './childrenViews/CartGoodsList'
  import CartBottomBar from './childrenViews/CartBottomBar'

  export default {
    name: "Shopcart",
    components: {
      NavBar,

      CartGoodsList,
      CartBottomBar
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
    height: 100vh;
  }

  .nav-bar-shopcart {
    background-color: var(--color-tint);
    color: white;
  }
</style>
