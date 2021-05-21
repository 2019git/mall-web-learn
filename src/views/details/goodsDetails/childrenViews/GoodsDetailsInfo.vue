<template>
  <div class="detail-info">
    <div class="detail-info-desc">
      <div class="detail-info-desc-start"></div>
      <div class="detail-info-desc-center"><span>{{detailInfo.desc}}</span></div>
      <div class="detail-info-desc-end"></div>
    </div>
    <div class="detail-info-image">
      <div class="detail-info-image-key">{{detailInfo.key}}</div>
      <div class="detail-info-image-list">
        <img v-for="item in detailInfo.detailImage" :src="item">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsDetailsInfo",
    props: {
      detailInfo: {
        type: Object,
        default: function () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .detail-info-desc {
    padding: 0 15px;
  }

  .detail-info-desc .detail-info-desc-start, .detail-info-desc .detail-info-desc-end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .detail-info-desc .detail-info-desc-start {
    float: left;
  }

  .detail-info-desc .detail-info-desc-end {
    float: right;
  }

  .detail-info-desc .detail-info-desc-start::before, .detail-info-desc .detail-info-desc-end::after {
    content: '';
    width: 5px;
    height: 5px;
    background-color: black;
    position: absolute;
    bottom: 0;
  }

  .detail-info-desc .detail-info-desc-end::after {
    right: 0;
  }

  .detail-info-desc .detail-info-desc-center {
    padding: 15px 0;
    font-size: 14px;
  }

  .detail-info-image-key {
    margin: 10px 0 10px 15px;
    color: black;
    font-size: 15px;
  }

  .detail-info-image-list img {
    width: 100%;
  }
</style>
