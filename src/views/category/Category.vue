<template>
  <div class="category">
    <nav-bar class="nav-bar-category">
      <div slot="center">分类</div>
      <!--
      添加100行数据方法：
      ul>li{{列表$}}*100
      -->
    </nav-bar>
    <category-list :category-list-info="categoryListInfo" @category-click="_categoryClick"/>
    <category-list-item :category-item-info="categoryItemInfo"/>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import BetterScroll from '@/components/common/scroll/BetterScroll'

  import CategoryList from './childrenViews/CategoryList'
  import CategoryListItem from './childrenViews/CategoryListItem'

  import {getCategoryList, getCategoryItem} from '@/network/Category.js'

  export default {
    name: "Category",
    components: {
      NavBar,
      BetterScroll,

      CategoryList,
      CategoryListItem
    },
    data() {
      return {
        categoryListInfo: [],
        categoryItemInfo: {}
      }
    },
    created() {
      this._getCategoryList().then(res => {
        this._categoryClick(this.categoryListInfo[0].cid);
      });
    },
    methods: {
      /* 获取分类列表数据 */
      _getCategoryList() {
        return new Promise((resolve, reject) => {
          resolve(
            getCategoryList().then(res => {
              this.categoryListInfo = res;
            })
          );
        });
      },
      /* 获取分类列表详情 */
      _categoryClick(cid) {
        getCategoryItem(cid).then(res => {
          this.categoryItemInfo = res;
        })
      }
    }
  }
</script>

<style scoped>
  .category {
    width: 100%;
    height: calc(100vh - 49px);
  }

  .nav-bar-category {
    background-color: var(--color-tint);
    color: white;
  }
</style>
