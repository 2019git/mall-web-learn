<template>
  <div class="category-right">
    <div class="list-item" v-for="item in categoryItemInfo.items">
      <h4>{{item.name}}</h4>
      <ul>
        <li v-for="son in item.productCate">
          <img :src="son.img"/>
          <span>{{son.name}}</span>
        </li>
      </ul>
    </div>
  </div>
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
    height: calc(100% - 44px);
    width: 75%;
    float: right;
    background-color: white;
    overflow-y: auto;
  }

  /* css隐藏滚动条 */
  .category-right::-webkit-scrollbar {
    width: 0 !important
  }

  .list-item {
    margin: 19px 7px 0;
    /* 内容纵向排列 */
    display: flex;
    flex-direction: column;
  }

  ul {
    margin-top: 9px;
    padding: 7px 10px 0;
    list-style: none;
  }

  li {
    display: block;
    width: 32.8%;
    height: 100px;
    float: left;
    text-align: center;
  }

  li img {
    width: 50px;
    height: 50px;
  }

  li span {
    color: black;
    height: 35px;
    margin-top: 2px;
    display: block;
    font-size: 13px;
  }
</style>
