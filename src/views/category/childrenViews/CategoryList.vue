<template>
  <div class="category-left">
    <div class="category-left-item" v-for="item in categoryListInfo">
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
    }
  }
</script>

<style scoped>
  .category-left {
    width: 30%;
    background-color: #f2f5f8;
    float: left;
  }

  .category-left-item {
    margin: 10px 10px 10px 10px;
    text-align: center;
  }
</style>
