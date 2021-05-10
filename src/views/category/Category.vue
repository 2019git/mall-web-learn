<template>
  <div>
    <nav-bar class="nav-bar-category">
      <div slot="center">分类</div>
      <!--
      添加100行数据方法：
      ul>li{{列表$}}*100
      -->
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
