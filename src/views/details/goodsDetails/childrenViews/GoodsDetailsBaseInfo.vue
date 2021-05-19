<!-- 商品详情基本信息 -->
<template>
  <div v-if="Object.keys(goodsInfo).length >= 0" class="base-info">
    <div class="base-info-title">
      {{goodsInfo.title}}
    </div>
    <div class="base-info-price">
      <span class="n-price">¥{{goodsInfo.newPrice}}</span>
      <span class="o-price">¥{{goodsInfo.oldPrice}}</span>
      <span class="d-price">{{goodsInfo.discount}}</span>
    </div>
    <div class="base-info-other">
      <span v-for="item in goodsInfo.columns">{{item}}</span>
    </div>
    <div class="base-info-serve">
      <div class="info-serve-item" v-for="item in goodsInfo.services">
        <img :src="item.icon">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsDetailsBaseInfo",
    props: {
      goodsInfo: {
        type: Object,
        default: function () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    /* 设置下边框样式，底部画线 */
    border-bottom: 5px solid #f2f5f8;
  }

  .base-info-title {
    color: black;
    font-weight: bold;
  }

  .base-info-price {
    margin-top: 10px;
  }

  .base-info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .base-info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    /* 添加到文本的修饰，下划线、上划线、删除线等 */
    text-decoration: line-through;
  }

  .base-info-price .d-price {
    font-size: 12px;
    padding: 2px 5px;
    color: #ffffff;
    background-color: var(--color-high-text);
    /* 为元素添加圆角边框 */
    border-radius: 8px;
    margin-left: 5px;

    /* 让元素上浮一些 */
    position: relative;
    top: -8px;
  }

  .base-info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 14px;
    /* 设置边框样式 */
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    justify-content: space-between;
  }

  .base-info-serve {
    display: flex;
    /* 弹性布局内容对齐 把弹性项沿着弹性容器的主轴线（main axis）对齐*/
    justify-content: space-between;
    line-height: 60px;
  }

  .base-info-serve img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .base-info-serve span {
    font-size: 14px;
    color: #c0c0c0;
  }
</style>
