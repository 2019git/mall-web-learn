<template>
  <div class="category">
    <nav-bar class="nav-bar-category">
      <div slot="center">分类</div>
      <!--
      添加100行数据方法：
      ul>li{{列表$}}*100
      -->
    </nav-bar>
    <category-list :category-list-info="categoryListInfo"/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import BetterScroll from '@/components/common/scroll/BetterScroll'

  import CategoryList from './childrenViews/CategoryList'

  import {getCategoryList} from '@/network/Category.js'

  export default {
    name: "Category",
    components: {
      NavBar,
      BetterScroll,

      CategoryList
    },
    data() {
      return {
        categoryListInfo: []
      }
    },
    created() {
      this._getCategoryList();
    },
    methods: {
      _getCategoryList() {
        getCategoryList().then(res => {
          this.categoryListInfo = res;
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>
  .category {
    width: 100%;
    height: calc(100% - 44px - 49px);
  }

  .nav-bar-category {
    background-color: var(--color-tint);
    color: white;
  }
</style>
