<template>
  <div>
    <ul>
      <li v-for="item in profileData">
        <img :src="item.icon" class="img-icon">
        <span>{{item.name}}</span>
        <img src="@/assets/img/profile/mine/arrow.png" class="img-right">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "MineInfoList",
    props: {
      profileData: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  ul {
    background-color: white;
  }

  ul li {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    list-style: none;
    padding: 10px;
    border-bottom: 3px solid #f8f8f8;
    /* li内部内容垂直方向居中 */
    display: flex;
    align-items: center;
    position: relative;
  }

  li .img-icon {
    width: 20px;
    height: 20px;
    /*position: absolute;*/
    /*top: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*margin: auto 0 auto 10px;*/
  }

  li span {
    font-size: 16px;
    color: black;
    /*position: absolute;*/
    /*top: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    /*left: 0;*/
    /*margin: auto 0 auto 40px;*/
    /*padding-bottom: -10px;*/
    margin-top: 4px;
    margin-left: 15px;
  }

  li .img-right {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 15px;
    top: 20px;
  }
</style>
