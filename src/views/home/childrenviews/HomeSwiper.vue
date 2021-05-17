<!-- 轮播图 -->
<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper/index.js'

  export default {
    name: "HomeSwiper",
    props: {
      banner: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    data(){
      return {
        isLoadImgMethod: false
      }
    },
    components: {
      Swiper,
      SwiperItem,
    },
    methods: {
      /**
       * 图片加载完成后调用
       */
      imgLoad() {
        if (!this.isLoadImgMethod) {
          this.$emit('load-tab-control-location')
          this.isLoadImgMethod = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
