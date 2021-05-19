<!-- 标签栏最外层页面 -->
<template>
  <TabBar>
    <TabBarItem path = "/home">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg">
      <div slot="item-name">首页</div>
    </TabBarItem>
    <TabBarItem path = "/category" activeColor="red">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg">
      <div slot="item-name">分类</div>
    </TabBarItem>
    <TabBarItem path = "/shopcart" activeColor="red">
      <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/shopcart_active.svg">
      <div slot="item-name">购物车</div>
    </TabBarItem>
    <TabBarItem path = "/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg">
      <div slot="item-name">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'

  export default {
    name: "TabBarMain",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
