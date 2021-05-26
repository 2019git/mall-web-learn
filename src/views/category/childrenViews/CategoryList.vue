<template>
  <div class="category-left">
    <div class="category-left-item" v-for="item in categoryListInfo" @click="categoryClick(item.cid)">
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
    methods: {
      categoryClick(cid) {
        this.$emit('category-click', cid)
      }
    }
  }
</script>

<style scoped>
  .category-left {
    width: 20%;
    background-color: #f8f8f8;
    float: left;
  }

  .category-left-item {
    text-align: center;
    height: 46px;
    line-height: 46px;
  }
</style>
