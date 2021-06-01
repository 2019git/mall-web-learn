<template>
  <div class="cart-list-item">
    <div class="item-img">
      <img :src="product.img">
    </div>
    <div class="item-right">
      <div class="item-title">{{product.title}}</div>
      <div class="item-right-bottom">
        <div class="item-price">{{product.price}}</div>
        <div class="item-count">{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartGoodsListItem",
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>
