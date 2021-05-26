<!-- 订单详情-评价信息 -->
<template>
  <div class="comment-info">
    <div class="comment-info-top">
      <div>用户评价</div>
      <div class="more" v-if="comment.count > 1">更多</div>
    </div>
    <div class="comment-info-center" v-for="(item, index) in comment.list">
      <div class="comment-info-center-user">
        <img :src="item.userHead">
        <span>{{item.userName}}</span>
      </div>
      <div class="comment-info-center-content">
        <p>{{item.content}}</p>
        <div class="comment-info-center-content-other">
          <span class="time">{{item.createDate | showDate}}</span>
          <span>{{item.style}}</span>
        </div>
      </div>
      <div class="comment-info-center-img">
        <img v-for="i in item.images" :src="i">
      </div>
      <div :class="{commentInfoBottom: comment.list.length !== index +1}"></div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '@/common/utils.js'

  export default {
    name: "GoodsDetailsCommentInfo",
    props: {
      comment: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate: function (value) {
        return formatDate(new Date(value), 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }

  .comment-info-top {
    height: 40px;
    color: black;
    font-size: 15px;
    border-bottom: 2px solid #f2f5f8;

    /* 使子组件一个向左一个向右平齐布局 */
    display: flex;
    /* 横向布局 */
    justify-content: space-between;
    /* 纵向布局 */
    /*align-items: center;*/
  }

  .comment-info-top .more {
    font-size: 13px;
    margin-right: 10px;
  }

  .comment-info-center-user {
    height: 50px;
    display: flex;
    align-items: center;
  }

  .comment-info-center-user img {
    width: 40px;
    height: 40px;
  }

  .comment-info-center-user span {
    margin-left: 10px;
    color: black;
  }

  .comment-info-center-content p {
    font-size: 14px;
    margin: 8px 0 8px 0;
  }

  .comment-info-center-content-other {
    font-size: 13px;
    margin-bottom: 8px;
    color: #999;
  }

  .comment-info-center-content-other .time {
    margin-right: 10px;
  }

  .comment-info-center-img img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }

  .commentInfoBottom {
    margin: 10px 0 10px 0;
    border-bottom: 2px solid #f2f5f8;
  }
</style>
