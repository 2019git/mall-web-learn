<template>
  <div id="app">
    <router-view></router-view>
    <TabBarMain></TabBarMain>
  </div>
</template>

<script>
  import TabBarMain from '@/components/content/TabBarMain.vue'

  export default {
    name: 'App',
    components: {
      TabBarMain
    }
  }
</script>

<style>
  @import  "./assets/css/base.css";
</style>
