<!-- 商品详情页上层轮播图 -->
<template>
  <div>
    <swiper>
      <swiper-item v-for="item in topImages" class="goods-details-swiper-class">
        <img :src="item">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper/index'

  export default {
    name: "GoodsDetailsSwiper",
    components: {
      Swiper,
      SwiperItem,
    },
    props: {
      topImages: {
        type: Array,
        default: function () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods-details-swiper-class {
    text-align: center;
    height: 300px;
  }
</style>
