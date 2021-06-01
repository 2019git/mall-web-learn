<template>
  <div class="cart-goods-list">
    <cart-goods-list-item v-for="(item, index) in goodsList" :key="index" :product="item"/>
  </div>
</template>

<script>
  import CartGoodsListItem from './CartGoodsListItem'


  export default {
    name: "CartGoodsList",
    components: {
      CartGoodsListItem
    },
    props: {
      goodsList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

  .cart-goods-list {
    height: 100%;
  }

</style>
