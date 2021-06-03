<template>
  <div class="selector-button" :class="{active: check}">
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
