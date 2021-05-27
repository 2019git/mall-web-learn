<!-- 商品详情页最上层导航栏 -->
<template>
  <nav-bar>
    <img slot="left" class="item-img" src="@/assets/img/common/back.svg" @click="imgClick"/>
    <div slot="center" class="item-title">
      <span class="item-title-span" :class="{active: index === currentIndex}" v-for="(item,index) in titleInfos"
            @click="itemClick(index)">
        {{item}}
      </span>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'

  export default {
    name: "GoodsDetailsNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titleInfos: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('jump-position', index)
      },
      imgClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

  .item-img {
    margin-top: 12px;
  }

  .item-title {
    display: flex;
    padding: 0 20px;
    font-size: 14px;
  }

  .item-title-span {
    flex: 1;
  }

  .active {
    color: var(--color-high-text)
  }
</style>
