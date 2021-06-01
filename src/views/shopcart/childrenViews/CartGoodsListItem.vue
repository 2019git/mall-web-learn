<template>
  <div class="cart-list-item">
    <div class="item-selector">
      选择器
    </div>
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
  .cart-list-item {
    width: 100%;
    display: flex;
    padding: 5px;
    border: 1px solid #ccc;
  }

  .item-selector {
    width: 14%;
  }

  .item-img {
    padding: 5px;
  }

  .item-img img {
    height: 180px;
    width: 150px;
    border-radius: 5px;
  }

  .item-right {
    font-size: 17px;
    color: black;
    padding: 5px 10px;
  }

  .item-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-right-bottom {
    margin-top: 10px;
    /*position: absolute;*/
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .item-right-bottom .item-price {
    color: orangered;
  }
</style>
