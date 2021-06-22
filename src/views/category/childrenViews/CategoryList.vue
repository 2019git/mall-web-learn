<template>
  <div class="category-left">
    <div class="category-left-item" :class="{active: index === isSelectIndex}" v-for="(item, index) in categoryListInfo"
         @click="categoryClick(item.cid, index)">
      <span>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryList",
    props: {
      categoryListInfo: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isSelectIndex: 0
      }
    },
    methods: {
      categoryClick(cid, index) {
        this.isSelectIndex = index
        this.$emit('category-click', cid)
      }
    }
  }
</script>

<style scoped>
  .category-left {
    width: 25%;
    background-color: #f8f8f8;
    height: calc(100% - 44px);
    float: left;
    overflow-y: auto;
  }

  /* css隐藏滚动条 */
  .category-left::-webkit-scrollbar {
    width: 0 !important
  }

  .category-left-item {
    text-align: center;
    height: 46px;
    line-height: 46px;
  }

  .active {
    background-color: white;
    color: var(--color-tint);
    font-weight: bold;
  }
</style>
