<template>
  <div class="cart-bar">
    <selector-button class="all-select" :check="_isAllSelect" @click.native="_allSelect"/>
    <span class="all-select-span">全选</span>
    <span class="total-price">合计:¥{{_getCartGoodsCheckPrice}}</span>
    <span class="to-compute">去计算({{_getCartGoodsCheckCount}})</span>
  </div>
</template>

<script>
  import SelectorButton from './SelectorButton'

  import {isEmptyArray} from '@/common/utils'

  export default {
    name: "CartBottomBar",
    components: {
      SelectorButton
    },
    data() {
      return {
        isAllSelect: false
      }
    },
    computed: {
      _getCartGoodsCheckCount() {
        if (isEmptyArray(this.$store.getters.cartList) || isEmptyArray(this.$store.getters.cartList.filter(o => o.check))) {
          return 0
        }
        return this.$store.getters.cartList.filter(o => o.check).map(o => o.count).reduce((x, y) => x + y)
      },
      _getCartGoodsCheckPrice() {
        if (isEmptyArray(this.$store.getters.cartList) || isEmptyArray(this.$store.getters.cartList.filter(o => o.check))) {
          return 0
        }
        return this.$store.getters.cartList.filter(o => o.check).map(o => o.price * o.count).reduce((x, y) => x + y)
      },
      _isAllSelect() {
        if (isEmptyArray(this.$store.getters.cartList)) {
          return false
        }
        return !(this.$store.getters.cartList.filter(o => !o.check).length)
      }
    },
    methods: {
      _allSelect() {
        if (this._isAllSelect) {
          this.$store.getters.cartList.forEach(o => o.check = false)
        } else {
          this.$store.getters.cartList.forEach(o => o.check = true)
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bar {
    width: 100%;
    height: 44px;
    line-height: 44px;
    position: fixed;
    bottom: 49px;
    background-color: #eee;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    padding-left: 15px;
    box-sizing: border-box;
  }

  .cart-bar .all-select {
    position: absolute;
    line-height: 0;
    top: 13px;
    left: 12px;
  }

  .cart-bar .all-select-span {
    margin: 0 20px;
  }

  .cart-bar .total-price {
    font-size: 16px;
    color: #666666;
  }

  .cart-bar .to-compute {
    background-color: var(--color-tint);
    float: right;
    width: 100px;
    height: 44px;
    color: white;
    line-height: 44px;
    text-align: center;
  }
</style>
