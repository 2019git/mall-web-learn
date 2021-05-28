<template>
  <div class="details-bottom-bar">
    <div class="details-bottom-bar-item details-bottom-bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon cfav"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="details-bottom-bar-item details-bottom-bar-right">
      <div class="details-bottom-bar-right-item add-shop-cart">加入购物车</div>
      <div class="details-bottom-bar-right-item buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsDetailsBottomBar"
  }
</script>

<style scoped>
  .details-bottom-bar {
    height: 58px;
    background-color: white;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
  }

  .details-bottom-bar-item {
    flex: 1;
  }

  .details-bottom-bar-left {
    display: flex;
  }

  .details-bottom-bar-left div {
    flex: 1;
  }

  .details-bottom-bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~@/assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .details-bottom-bar-left .service {
    background-position: 0 -53px;
  }

  .details-bottom-bar-left .shop {
    background-position: 0 -98px;
  }

  .details-bottom-bar-right {
    display: flex;
  }

  .details-bottom-bar-right-item {
    flex: 1;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .add-shop-cart {
    background-color: yellow;
  }

  .buy {
    background-color: var(--color-high-text)
  }
</style>
