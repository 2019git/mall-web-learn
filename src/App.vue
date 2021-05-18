<template>
  <div id="app">
    <keep-alive exclude = 'GoodsDetails'>
      <router-view></router-view>
    </keep-alive>
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
