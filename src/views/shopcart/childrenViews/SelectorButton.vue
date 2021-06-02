<template>
  <div class="selector-button" :class="{active: isCheck}" @click="_imgClick">
    <img src="~@/assets/img/cart/tick.svg">
  </div>
</template>

<script>
  export default {
    name: "SelectorButton",
    props: {
      check: {
        type: Boolean,
        default() {
          return true
        }
      }
    },
    data() {
      return {
        isCheck: this.check
      }
    },
    methods: {
      _imgClick() {
        this.$emit('check-product')
        this.isCheck = !this.isCheck
      }
    }
  }
</script>

<style scoped>
  .selector-button {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
  }

  .active {
    background-color: var(--color-tint);
    border-color: var(--color-tint);
  }
</style>
