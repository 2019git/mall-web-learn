<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <selector-button :check="product.check" @check-product="_checkProduct"/>
    </div>
    <div class="item-img">
      <img :src="product.img">
    </div>
    <div class="item-right">
      <div class="item-title">{{product.title}}</div>
      <div class="item-right-bottom">
        <div class="item-price">¥{{product.price}}</div>
        <div class="item-count">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  import SelectorButton from './SelectorButton'

  export default {
    name: "CartGoodsListItem",
    components: {
      SelectorButton
    },
    props: {
      product: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      _checkProduct() {
        this.product.check = !this.product.check
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
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-img {
    padding: 5px;
  }

  .item-img img {
    height: 120px;
    width: 100px;
    border-radius: 5px;
  }

  .item-right {
    font-size: 15px;
    color: black;
    padding: 5px 0px 5px 10px;
    width: calc(100% - 5% - 110px);
    position: relative;
  }

  .item-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .item-right-bottom {
    font-size: 17px;

    position: absolute;
    bottom: 10px;
    width: calc(100% - 10px);
    display: flex;
    justify-content: space-between;
  }

  .item-right-bottom .item-price {
    color: orangered;
  }

  .item-right-bottom .item-count {
    margin-right: 10px;

  }
</style>
