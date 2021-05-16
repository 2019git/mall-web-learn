<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" @load="goodsImgLoad">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommend: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    methods: {
      goodsImgLoad() {
        this.$bus.$emit('goodsImgLoad')
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    /*padding 简写属性在一个声明中设置所有内边距属性*/
    padding: 10px 0 20px;
    /*设置下边框的样式*/
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    /*设置元素的下外边距*/
    margin-bottom: 10px;
  }
</style>
