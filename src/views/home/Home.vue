<template>
  <div>
    <nav-bar class="nav-bar-home">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'

  export default {
    name: "Home",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .nav-bar-home {
    background-color: var(--color-tint);
    color: white;
  }
</style>
