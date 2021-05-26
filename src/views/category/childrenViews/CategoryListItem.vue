<template>
  <div class="category-right">category-right</div>
</template>

<script>
  export default {
    name: "CategoryListItem",
    props: {
      categoryItemInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  }
</script>

<style scoped>
  .category-right {
    width: 80%;
    background-color: #ff5777;
    float: right;
  }

</style>
