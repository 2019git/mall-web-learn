<template>
  <div class="details-shop-info">
    <div class="details-shop-info-top">
      <img :src="shopInfo.shopLogo">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="details-shop-info-center">
      <div class="details-shop-info-center-item details-shop-info-center-left">
        <div class="details-shop-info-center-left-sell">
          <div class="details-shop-info-center-left-sell-value">
            {{sellCountFilter(shopInfo.cSells)}}
          </div>
          <div class="details-shop-info-center-left-sell-key">
            总销量
          </div>
        </div>
        <div class="details-shop-info-center-left-goods">
          <div class="details-shop-info-center-left-goods-value">
            {{shopInfo.cGoods}}
          </div>
          <div class="details-shop-info-center-left-goods-key">
            全部宝贝
          </div>
        </div>
      </div>
      <div class="details-shop-info-center-item details-shop-info-center-right">
        <table>
          <tr v-for="item in shopInfo.score">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-color': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-color': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="details-shop-info-bottom">
      <div class="details-shop-info-bottom-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsDetailsShopInfo",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {
      sellCountFilter: function (value) {
        if (value >= 10000) {
          return (value / 10000).toFixed(1) + '万'
        }
        return value
      }
    }
  }
</script>

<style scoped>
  .details-shop-info {
    padding: 25px 8px;
    /* 设置下边框样式 */
    border-bottom: 5px solid #f2f5f8;
  }

  .details-shop-info-top {
    line-height: 45px;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-items: center;
  }

  .details-shop-info-top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .1);
  }

  .details-shop-info-top span {
    margin-left: 10px;
    vertical-align: center;
  }

  .details-shop-info-center {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .details-shop-info-center-item {
    flex: 1;
  }

  .details-shop-info-center-left {
    display: flex;
    /* 弹性内容水平对齐 */
    justify-content: space-between;
    color: #333;
    /*text-align: center;*/
    border-right: 1px solid rgba(0, 0, 0, .1);
  }

  .details-shop-info-center-left-sell {
    margin-left: 28px;
  }

  .details-shop-info-center-left-goods {
    margin-right: 28px;
  }

  .details-shop-info-center-left-sell-value, .details-shop-info-center-left-goods-value {
    font-size: 18px;
    text-align: center;
  }

  .details-shop-info-center-left-sell-key, .details-shop-info-center-left-goods-key {
    margin-top: 4px;
    font-size: 12px;
    text-align: center;
  }

  .details-shop-info-center-right {
    font-size: 13px;
    color: #333;
  }

  .details-shop-info-center-right table {
    width: 120px;
    margin-left: 50px;
  }

  .details-shop-info-center-right table td {
    padding: 5px 0;
  }

  .details-shop-info-center-right .score {
    color: #03a722;
  }

  .details-shop-info-center-right .better span {
    background-color: #03a722;
    color: white;
    text-align: center;
  }

  .details-shop-info-center-right .score-color {
    color: red;
  }

  .details-shop-info-center-right .better-color span {
    background-color: red;
  }

  .details-shop-info-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .details-shop-info-bottom-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    border-radius: 10px;
    line-height: 30px;
  }
</style>
