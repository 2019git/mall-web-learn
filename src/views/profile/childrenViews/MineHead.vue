<template>
  <div class="mine-head">
    <img src="@/assets/img/profile/mine/commentUserHead.jpg">
    <div class="mine-head-info">
      <span>耐力熊物联网</span>
      <p>13200001115</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MineHead"
  }
</script>

<style scoped>
  .mine-head {
    height: 150px;
    width: 100%;
    padding: 50px 0 0 20px;
    background-color: white;
    position: relative;
    border-bottom: 10px solid #f8f8f8;
  }

  .mine-head img {
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }

  .mine-head-info {
    /*float: right;*/
    /*margin-right: calc(100% - 180px);*/
    height: 70px;
    position: absolute;
    top: 50px;
    left: 105px;
  }

  .mine-head-info span {
    display: block;
    margin-top: 5px;
    font-size: 20px;
    color: black;
  }

  .mine-head-info p {
    margin-top: 18px;
    margin-bottom: 5px;
    color: black;
    font-size: 16px;
  }
</style>
