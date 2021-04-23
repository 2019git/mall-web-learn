<template>
  <div>
    <nav-bar class="nav-bar-category">
      <div slot="center">分类</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'

  export default {
    name: "Category",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .nav-bar-category {
    background-color: var(--color-tint);
    color: white;
  }
</style>
