<template>
  <div>
    <nav-bar class="nav-bar-shopcart">
      <div slot="center">购物车({{count}})</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'

  export default {
    name: "Shopcart",
    components: {
      NavBar
    },
    data(){
      return {
        count: 0
      }
    }
  }
</script>

<style scoped>
  .nav-bar-shopcart {
    background-color: var(--color-tint);
    color: white;
  }
</style>
