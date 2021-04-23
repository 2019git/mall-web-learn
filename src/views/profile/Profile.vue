<template>
  <div>
    <nav-bar class="nav-bar-profile">
      <div slot="center">我的</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'

  export default {
    name: "Profile",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .nav-bar-profile {
    background-color: var(--color-tint);
    color: white;
  }
</style>
